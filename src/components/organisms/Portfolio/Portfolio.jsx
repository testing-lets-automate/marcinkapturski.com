import React from "react";
import Masonry from "react-masonry-component";
import { createGlobalStyle } from "styled-components";
import Heading from "components/atoms/Heading/Heading";
import Image from "components/atoms/Image/Image";
import automationImg from "../../../assets/start-portfolio-pictures/ui-api-automation.png";
import ciImg from "../../../assets/start-portfolio-pictures/ci-run-tests.png";
import mobileImg from "../../../assets/start-portfolio-pictures/mobile-automation.png";
import testingStrategy from "../../../assets/start-portfolio-pictures/testing-strategy.png";

import AOS from "aos";
AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden;
          overflow-x: hidden;
        }
`;

const Portfolio = function () {
  return (
    <section id="portfolio">
      <div className="container">
        <GlobalStyles />
        <div className="spacer-double"></div>
        <div className="spacer-double"></div>
        <Heading text="Portfolio" />
        <div className="spacer-single"></div>
        <Masonry className={"row my-gallery-class"} elementType={"div"}>
          <div
            className="col-lg-4 image-element-class de_modal de_modal"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <a href="http://localhost:3000/#/portfolio/ui-api-automation">
              <div className="card-image-1">
                <div className="d-text">
                  <h5 className="d-tag">Automation tests with Cypress tool</h5>
                </div>
                <Image src={automationImg} className={" "} alt={"gallery"} />
              </div>
            </a>
          </div>
          <div
            className="col-lg-4 image-element-class de_modal"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <a href="http://localhost:3000/#/portfolio/test-planning-tests-execution">
              <div className="card-image-1">
                <div className="d-text">
                  <h5 className="d-tag">Tests planning, tests execution</h5>
                </div>
                <Image src={testingStrategy} className={" "} alt={"gallery"} />
              </div>
            </a>
          </div>
          <div
            className="col-lg-4 image-element-class de_modal"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <a href="http://localhost:3000/#/portfolio/mobile-automation">
              <div className="card-image-1">
                <div className="d-text">
                  <h5 className="d-tag">
                    Run tests by Appium on iOS & Android
                  </h5>
                </div>
                <Image src={mobileImg} className={" "} alt={"gallery"} />
              </div>
            </a>
          </div>
          <div
            className="col-lg-4 image-element-class de_modal"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <a href="http://localhost:3000/#/portfolio/ci-github-gitlab-automation">
              <div className="card-image-1">
                <div className="d-text">
                  <h5 className="d-tag">
                    CI configuration on GitHub Actions, GitLab
                  </h5>
                </div>
                <Image src={ciImg} className={" "} alt={"gallery"} />
              </div>
            </a>
          </div>
          <div className="spacer-double"></div>
        </Masonry>
      </div>
    </section>
  );
};

export default Portfolio;
