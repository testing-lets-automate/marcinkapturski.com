import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import client from "../client.js";
import Preloader from "components/organisms/Preloader/Preloader";
import HeaderPost from "components/organisms/HeaderPost/HeaderPost";
import Footer from "components/organisms/Footer/Footer";
import SocialIcons from "components/atoms/SocialIcons/SocialIcons";
import ScrollToTop from "components/organisms/ScrollToTop/ScrollToTop";
import HeadingPost from "components/atoms/HeadingPost/HeadingPost";
import Text from "components/atoms/Text/Text";
import { format } from "date-fns";

const PortfolioPage = () => {
  const [portfolio, setPost] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const variables = {
          slug: slug,
        };
        const result = await client.request(query, variables);
        setPost(result.portfolio);
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
      if (item.type === "heading") {
        return <h1 key={index}>{item.children[0].value}</h1>;
      } else if (item.type === "paragraph") {
        return <p key={index}>{item.children[0].value}</p>;
      } else if (item.type === "list") {
        return (
          <ul key={index}>
            {item.children.map((listItem, idx) => (
              <li key={idx}>{renderContent(listItem.children)}</li>
            ))}
          </ul>
        );
      } else if (item.type === "listItem") {
        return (
          <ul key={index}>
            <li>{renderContent(item.children)}</li>
          </ul>
        );
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
        portfolio && (
          <>
            <Helmet>
              <title>Showcase | {portfolio.title}</title>
              <meta
                name="description"
                content={portfolio.metaPageDescription}
              />
            </Helmet>
            <div className="home">
              <Preloader />
              <HeaderPost />
              <div className="spacer-double"></div>
              <div className="spacer-double"></div>
              <div className="container">
                <div className="row g-14">
                  <div className="col-lg-14">
                    <HeadingPost text={portfolio.title} />
                    <div className="spacer-single"></div>
                    <div>
                      <Text
                        text={renderContent(
                          portfolio.body.value.document.children
                        )}
                        id={portfolio.id}
                      />
                    </div>
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
  portfolio(filter: { slug: { eq: $slug } }) {
    id
    title
    slug
    body {
      value
    }
    metaPageDescription
  }
}
`;

export default PortfolioPage;
