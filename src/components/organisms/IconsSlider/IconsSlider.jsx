import React from "react";
import { Parallax } from "react-parallax";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createGlobalStyle } from "styled-components";
import AOS from "aos";

AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const IconsSlider = function () {
  return (
    <div className="pb-0">
      <Parallax className="pb-5" bgImage={""} strength={300}>
        <div
          className="position-relative"
          data-aos="fade"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="container">
            <GlobalStyles />
            <div className="row" data-aos="fade-up" data-aos-once="true">
              <div className="text">
                <div className="skill-pix">Cypress</div>
                <div className="skill-pix">Appium</div>
                <div className="skill-pix">Selenium</div>
                <div className="skill-pix">WebdriverIO</div>
                <div className="skill-pix">BDD</div>
                <div className="skill-pix">Cucumber</div>
                <div className="skill-pix">JavaScript</div>
                <div className="skill-pix">Java</div>
                <div className="skill-pix">BrowserStack</div>
                <div className="skill-pix">Lambdatest</div>
                <div className="skill-pix">jMeter</div>
                <div className="skill-pix">AWS</div>
                <div className="skill-pix">GIT</div>
                <div className="skill-pix">GitHub Actions</div>
                <div className="skill-pix">GitLab</div>
                <div className="skill-pix">SauceLabs</div>
                <div className="skill-pix">Jenkins</div>
                <div className="skill-pix">Postman</div>
                <div className="skill-pix">SoupUI</div>
                <div className="skill-pix">Agile Scrum</div>
                <div className="skill-pix">Jira</div>
                <div className="skill-pix">TFS</div>
                <div className="skill-pix">Grafana</div>
                <div className="skill-pix">Gatling</div>
                <div className="skill-pix">App Center</div>
                <div className="skill-pix">Linux</div>
                <div className="skill-pix">Salesforce</div>
                <div className="skill-pix">MS Dynamics</div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default IconsSlider;
