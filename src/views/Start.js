import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import client from "../client.js";
import Preloader from "components/organisms/Preloader/Preloader";
import Header from "components/organisms/Header/Header";
import SocialIcons from "components/atoms/SocialIcons/SocialIcons";
import HeroArea from "components/organisms/HeroArea/HeroArea";
import Portfolio from "components/organisms/Portfolio/Portfolio.jsx";
import WhatIDoContentArea from "components/organisms/WhatIDoContentArea/WhatIDoContentArea.jsx";
import Blog from "components/organisms/Blog/Blog";
import ContactContentArea from "components/organisms/ContactContentArea/ContactContentArea.jsx";
import ScrollToTop from "components/organisms/ScrollToTop/ScrollToTop";
import Footer from "components/organisms/Footer/Footer";

function StartPage() {
  const [posts, setPost] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await client.request(query);
        const blogComponentData = posts.allPosts;
        setPost(blogComponentData);
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
        <title>
          About automation tests in Software Development | Freelance Test
          Automation Engineer
        </title>
        <meta
          name="description"
          content="Freelance Test Automation Engineer | Cypress, Github Actions, SlackBot, Test planning, Mobile Automation with Appium "
        />
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
              <Portfolio />
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
