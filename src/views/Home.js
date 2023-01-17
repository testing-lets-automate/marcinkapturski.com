import Preloader from "components/organisms/Preloader/Preloader";
import Header from "components/organisms/Header/Header";
import HeroArea from "components/organisms/HeroArea/HeroArea";
import StatisticsBar from "components/organisms/StatisticsBar/StatisticsBar";
import Quote from "components/organisms/Quote/Quote";
import Contact from "components/organisms/Contact/Contact";
import Footer from "components/organisms/Footer/Footer";
import SocialIcons from "components/atoms/SocialIcons/SocialIcons";
import ScrollToTop from "components/organisms/ScrollToTop/ScrollToTop";
import WhatIDoTypes from "components/organisms/WhatIDoTypes/WhatIDoTypes";

function HomePage() {
  return (
    <>
      <div className="home">
        <Preloader />
        <Header />
        <HeroArea />
        <WhatIDoTypes />
        <StatisticsBar />
        <Quote />
        <Contact />
        <Footer />
        <SocialIcons text="GitHub" />
      </div>
      <ScrollToTop />
    </>
  );
}

export default HomePage;
