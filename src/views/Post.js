import React, { useEffect, useState } from "react";
import client from "../client.js";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import Preloader from "components/organisms/Preloader/Preloader";
import HeaderPost from "components/organisms/HeaderPost/HeaderPost";
import Footer from "components/organisms/Footer/Footer";
import SocialIcons from "components/atoms/SocialIcons/SocialIcons";
import ScrollToTop from "components/organisms/ScrollToTop/ScrollToTop";
import HeadingPost from "components/atoms/HeadingPost/HeadingPost";
import Text from "components/atoms/Text/Text";
import { format } from "date-fns";

const PostPage = () => {
  const [post, setPost] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const variables = {
          slug: slug,
        };
        const result = await client.request(query, variables);
        setPost(result.post);
        setIsFetching(false);
      } catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
        setIsFetching(false);
      }
    };

    fetchData();
  }, [slug]);

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.level === 1) {
        return <h1 key={index}>{item.children[0].value}</h1>;
      } else if (item.level === 2) {
        return <h2 key={index}>{item.children[0].value}</h2>;
      } else if (item.level === 3) {
        return <h3 key={index}>{item.children[0].value}</h3>;
      } else if (item.level === 6) {
        const imageUrl = item.children[0].url;
        const altText = item.children[0].children[0].value;

        return <img key={index} src={imageUrl} alt={altText} />;
      } else if (item.type === "paragraph") {
        if (item.children.length === 1 && item.children[0].type === "link") {
          const url = item.children[0].url;
          const linkText = item.children[0].children[0].value;

          return (
            <a key={index} href={url}>
              {linkText}
            </a>
          );
        } else if (
          item.children[0].type === "span" &&
          item.children[0].value === ""
        ) {
          return <div className="spacer-single" key={index}></div>;
        } else {
          return <p key={index}>{item.children[0].value}</p>;
        }
      } else if (item.style === "numbered") {
        return (
          <ol key={index}>
            {item.children.map((listItem, idx) => (
              <li key={idx}>{renderContent(listItem.children)}</li>
            ))}
          </ol>
        );
      } else if (item.style === "bulleted") {
        return (
          <ul key={index}>
            {item.children.map((listItem, idx) => (
              <li key={idx}>{renderContent(listItem.children)}</li>
            ))}
          </ul>
        );
      } else if (item.type === "span") {
        return <b key={index}>{item.children[0].value}</b>;
      } else if (item.type === "code") {
        return (
          <SyntaxHighlighter
            key={index}
            language={item.language}
            style={tomorrow}
          >
            {item.code}
          </SyntaxHighlighter>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <section>
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        post && (
          <>
            <Helmet>
              <title>{post.title}</title>
              <meta name="description" content={post.metaPageDescription} />
            </Helmet>
            <div className="home">
              <Preloader />
              <HeaderPost />
              <div className="spacer-double"></div>
              <div className="spacer-double"></div>
              <div className="container">
                <div className="row g-5">
                  <div className="col-lg-9">
                    <HeadingPost text={post.title} />
                    <div className="spacer-single"></div>
                    <div>
                      <Text
                        text={renderContent(post.body.value.document.children)}
                        id={post.id}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 de_project-info">
                    <div className="spacer-double"></div>
                    <div className="spacer-single"></div>
                    <div className="de_project-details">
                      <div className="d-field">
                        <i className="fa fa-external-link"></i>GitHub:{" "}
                        <span>
                          <a
                            href={post.github || ""}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {post.githubLinkName || ""}
                          </a>
                        </span>
                      </div>
                      <div className="d-field">
                        <i className="fa fa-user-o"></i>Category:{" "}
                        <span>{post.category.name}</span>
                      </div>
                    </div>
                    <div className="spacer-30"></div>
                    <p>
                      <i className="fa fa-calendar-o"></i> Post date:{" "}
                      {format(new Date(post._firstPublishedAt), "dd-MM-yyyy")}
                    </p>
                  </div>
                </div>
              </div>
              <Footer />
              <SocialIcons text="GitHub" />
            </div>
            <ScrollToTop />
          </>
        )
      )}
    </section>
  );
};

const query = `
query getPostSinglePost($slug: String!) {
  post(filter: { slug: { eq: $slug } }) {
    id
    title
    slug
    metaPageDescription
    body {
      value
    }
    category { name }
    _firstPublishedAt
    github
    githubLinkName
  }
}
`;

export default PostPage;
