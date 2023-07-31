import React, { useEffect, useState } from "react";

import client from "../client.js";
import Preloader from "components/organisms/Preloader/Preloader";
import Header from "components/organisms/Header/Header";
import SocialIcons from "components/atoms/SocialIcons/SocialIcons";
import HeroArea from "components/organisms/HeroArea/HeroArea";
import AboutBlog from "components/molecules/AboutBlog/AboutBlog";
import WhatIDoTypes from "components/organisms/WhatIDoTypes/WhatIDoTypes";
import IconsSlider from "components/organisms/IconsSlider/IconsSlider";
import Blog from "components/organisms/Blog/Blog";
import WorkWithMe from "components/organisms/WorkWithMe/WorkWithMe";
import Contact from "components/organisms/Contact/Contact";
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
      {isFetching ? (
        <h2>Loading...</h2>
      ) : (
        posts && (
          <>
            <div className="home">
              <Preloader />
              <Header />
              <HeroArea />
              <AboutBlog />
              <IconsSlider />
              <WhatIDoTypes />
              <Blog posts={posts} />
              <WorkWithMe />
              <Contact />
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
    
  }
}
`;

export default StartPage;
