import React, { Component } from "react";
import { Parallax } from "react-parallax";
import background from "../../../assets/background.jpg";
import Heading from "components/atoms/Heading/Heading";
import Image from "components/atoms/Image/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { iconsAnimationSettings } from "../../../utils/IconsAnimationSettings";
import { createGlobalStyle } from "styled-components";
import javascriptico from "../../../assets/icon-panel/javascript-ico.png";
import cypressicon from "../../../assets/icon-panel/cypress-ico-bw.png";
import appiumicon from "../../../assets/icon-panel/appium-ico-2-bw.png";
import reacticon from "../../../assets/icon-panel/react-ico-bw.png";
import githubicon from "../../../assets/icon-panel/github-ico.png";
import grafanaicon from "../../../assets/icon-panel/grafana-ico.png";
import postmanicon from "../../../assets/icon-panel/postman-ico-bw.png";
import cucumbericon from "../../../assets/icon-panel/cucumber-ico-bw.png";

import AOS from "aos";

AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

const IconsSlider = function () {
  return (
    <section id="skills" className="pb-0">
      <div className="spacer-double"></div>
      <div className="spacer-double"></div>
      <Parallax className="pb-5" bgImage={background} strength={300}>
        <div className="spacer-double"></div>
        <div
          className="py-5 position-relative"
          data-aos="fade"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="container">
            <GlobalStyles />
            <div className="row" data-aos="fade-up" data-aos-once="true">
              <Slider {...iconsAnimationSettings}>
                <CustomSlide className="itm" index={1}>
                  <div className="de_count text-center">
                    <Image
                      src={cypressicon}
                      className={"img-icon-slider"}
                      alt={"Cypress"}
                    />
                    <span>Cypress</span>
                  </div>
                </CustomSlide>

                <CustomSlide className="itm" index={2}>
                  <div className="de_count text-center">
                    <Image
                      src={cucumbericon}
                      className={"img-icon-slider"}
                      alt={"Cucumber"}
                    />
                    <span>Cucumber</span>
                  </div>
                </CustomSlide>

                <CustomSlide className="itm" index={3}>
                  <div className="de_count text-center">
                    <Image
                      src={javascriptico}
                      className={"img-icon-slider"}
                      alt={"Logo"}
                    />
                    <span>JavaScript</span>
                  </div>
                </CustomSlide>

                <CustomSlide className="itm" index={4}>
                  <div className="de_count text-center">
                    <Image
                      src={appiumicon}
                      className={"img-icon-slider"}
                      alt={"Appium"}
                    />
                    <span>Appium</span>
                  </div>
                </CustomSlide>

                <CustomSlide className="itm" index={5}>
                  <div className="de_count text-center">
                    <Image
                      src={reacticon}
                      className={"img-icon-slider"}
                      alt={"React"}
                    />
                    <span>React</span>
                  </div>
                </CustomSlide>

                <CustomSlide className="itm" index={6}>
                  <div className="de_count text-center">
                    <Image
                      src={githubicon}
                      className={"img-icon-slider"}
                      alt={"GitHub Actions"}
                    />
                    <span>GitHub Actions</span>
                  </div>
                </CustomSlide>

                <CustomSlide className="itm" index={7}>
                  <div className="de_count text-center">
                    <Image
                      src={postmanicon}
                      className={"img-icon-slider"}
                      alt={"Postman"}
                    />
                    <span>Postman</span>
                  </div>
                </CustomSlide>

                <CustomSlide className="itm" index={8}>
                  <div className="de_count text-center">
                    <Image
                      src={grafanaicon}
                      className={"img-icon-slider"}
                      alt={"Grafana"}
                    />
                    <span>Grafana</span>
                  </div>
                </CustomSlide>
              </Slider>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="spacer-double"></div>
      <div className="spacer-double"></div>
    </section>
  );
};

export default IconsSlider;
