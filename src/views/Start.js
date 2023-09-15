import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import client from "../client.js";
import Preloader from "components/organisms/Preloader/Preloader";
import Header from "components/organisms/Header/Header";
import SocialIcons from "components/atoms/SocialIcons/SocialIcons";
import HeroArea from "components/organisms/HeroArea/HeroArea";
import Service from "components/organisms/Service/Service.jsx";
import WhatIDoContentArea from "components/organisms/WhatIDoContentArea/WhatIDoContentArea.jsx";
import Blog from "components/organisms/Blog/Blog";
import ContactContentArea from "components/organisms/ContactContentArea/ContactContentArea.jsx";
import ScrollToTop from "components/organisms/ScrollToTop/ScrollToTop";
import Footer from "components/organisms/Footer/Footer";

function StartPage() {
  const [posts, setPosts] = useState([]);
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { allPosts, _site } = await client.request(query);
        const { title, description } = _site.globalSeo.fallbackSeo;

        setPosts(allPosts);
        setPageTitle(title);
        setPageDescription(description);
        setIsFetching(false);
      } catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        posts && (
          <>
            <div className="home">
              <Preloader />
              <Header />
              <HeroArea />
              <WhatIDoContentArea />
              <Service />
              <ContactContentArea />
              <Blog posts={posts} />
              <Footer />
              <SocialIcons text="GitHub" />
            </div>
            <ScrollToTop />
          </>
        )
      )}
    </section>
  );
}

const query = `
{
  _site {
  globalSeo {
    fallbackSeo {
      title
      description        
    }
  }
}
allPosts {
  id
  title
  slug
  createdAt
  introduction
  coverImage {
    url
  }
  metaPageDescription
}
}
`;

export default StartPage;
