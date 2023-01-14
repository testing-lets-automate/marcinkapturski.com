import Preloader from "components/organisms/Preloader/Preloader";
import Header from "components/organisms/Header/Header";
import HeroArea from "components/organisms/HeroArea/HeroArea";
import ContentArea from "components/organisms/ContentArea/ContentArea";
import Quote from "components/organisms/Quote/Quote";
import Cooperation from "components/organisms/Cooperation/Cooperation";
import Contact from "components/organisms/Contact/Contact";
import Footer from "components/organisms/Footer/Footer";
import SocialIcons from "components/atoms/SocialIcons/SocialIcons";
import ScrollToTop from "components/organisms/ScrollToTop/ScrollToTop";

function HomePage() {
  return (
    <>
      <div className="home">
        <Preloader />
        <Header />
        <HeroArea />
        <ContentArea />
        <Quote />
        <Cooperation />
        <Contact />
        <Footer />
        <SocialIcons text="GitHub" />
      </div>
      <ScrollToTop />
    </>
  );
}

export default HomePage;
