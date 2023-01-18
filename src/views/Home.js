import Preloader from "components/organisms/Preloader/Preloader";
import Header from "components/organisms/Header/Header";
import HeroArea from "components/organisms/HeroArea/HeroArea";
import WorkWithMe from "components/organisms/WorkWithMe/WorkWithMe";
import Contact from "components/organisms/Contact/Contact";
import Footer from "components/organisms/Footer/Footer";
import SocialIcons from "components/atoms/SocialIcons/SocialIcons";
import ScrollToTop from "components/organisms/ScrollToTop/ScrollToTop";
import WhatIDoTypes from "components/organisms/WhatIDoTypes/WhatIDoTypes";
import Counter from "components/organisms/Counter/Counter";

function HomePage() {
  return (
    <>
      <div className="home">
        <Preloader />
        <Header />
        <HeroArea />
        <WhatIDoTypes />
        <Counter />
        <WorkWithMe />
        <Contact />
        <Footer />
        <SocialIcons text="GitHub" />
      </div>
      <ScrollToTop />
    </>
  );
}

export default HomePage;
