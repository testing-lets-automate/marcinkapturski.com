import React from "react";
import Masonry from "react-masonry-component";
import { createGlobalStyle } from "styled-components";
import Heading from "components/atoms/Heading/Heading";
import Image from "components/atoms/Image/Image";
import automationImg from "../../../assets/start-portfolio-pictures/ui-api-automation.png";
import mobileImg from "../../../assets/start-portfolio-pictures/mobile-automation.png";
import peripheral from "../../../assets/start-portfolio-pictures/peripheral-assets.png";

import AOS from "aos";
AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden;
          overflow-x: hidden;
        }
`;

const Service = function () {
  return (
    <section id="service">
      <div className="container">
        <GlobalStyles />
        <div className="spacer-double"></div>
        <div className="spacer-double"></div>
        <div className="spacer-double"></div>
        <div className="spacer-double"></div>
        <Heading text="Service" />
        <div className="spacer-single"></div>
        <Masonry className={"row my-gallery-class"} elementType={"div"}>
          <div
            className="col-lg-4 image-element-class de_modal de_modal"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <a href="#/service/ui-api-automation">
              <div className="card-image-1">
                <div className="d-text">
                  <h5 className="d-tag">Automation tests with Cypress</h5>
                </div>
                <Image src={automationImg} className={" "} alt={"gallery"} />
              </div>
            </a>
          </div>
          <div
            className="col-lg-4 image-element-class de_modal de_modal"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <a href="#/service/support-tools">
              <div className="card-image-1">
                <div className="d-text">
                  <h5 className="d-tag">Dashboards / SlackBots</h5>
                </div>
                <Image src={peripheral} className={" "} alt={"gallery"} />
              </div>
            </a>
          </div>
          <div
            className="col-lg-4 image-element-class de_modal"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <a href="#/service/mobile-automation">
              <div className="card-image-1">
                <div className="d-text">
                  <h5 className="d-tag">
                    Automation tests for iOS & Android apps
                  </h5>
                </div>
                <Image src={mobileImg} className={" "} alt={"gallery"} />
              </div>
            </a>
          </div>
          <div className="spacer-double"></div>
        </Masonry>
      </div>
    </section>
  );
};

export default Service;
