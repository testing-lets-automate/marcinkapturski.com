import { Parallax } from "react-parallax";
import Hero from "components/molecules/Hero/Hero";
import LinkSmooth from "components/molecules/LinkSmooth/LinkSmooth";
import background from "../../../assets/background.jpg";

const HeroArea = () => {
  return (
    <>
      <section id="hero-area" className="bg-bottom py-0">
        <Parallax bgImage={background} strength={300}>
          <Hero />
          <LinkSmooth to="whatido" />
        </Parallax>
      </section>
    </>
  );
};

export default HeroArea;
