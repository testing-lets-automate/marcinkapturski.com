import React from "react";
import Heading from "components/atoms/Heading/Heading";
import webautomation from "../../../assets/web-automation.png";
import mobileautomation from "../../../assets/mobile-automation.png";
import teststrategies from "../../../assets/test-strategies.png";
import AOS from "aos";
AOS.init();

const WhatIDoTypes = () => {
  return (
    <section id="whatido">
      <div className="container">
        <div className="spacer-double"></div>
        <Heading text="What I do" />
        <div className="spacer-single"></div>
        <div
          className="col-md-8 text-center m-auto"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <blockquote className="q-big">
            I ensure the technology meets high-quality standards. I have a
            proven track record of developing automation tests and testes
            strategies performed manually and automatically.
          </blockquote>
          <div className="spacer-single"></div>
          <div className="spacer-single"></div>
        </div>
        <div className="row">
          <div
            className="col-lg-4"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className="de_3d-box">
              <div className="d-inner">
                <div>
                  <img
                    src={webautomation}
                    alt={"web automation"}
                    data-testid="web-automation"
                    className="what-i-do-image"
                  />
                </div>
                <div className="text">
                  <h3>Web & API automation</h3>I am writing WEB & API tests,
                  mostly with{" "}
                  <a
                    className="link_black"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/marcinkapturski/marcinkapturski.com/tree/master/cypress"
                  >
                    Cypress tool
                  </a>{" "}
                  and support of{" "}
                  <a
                    className="link_black"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/marcinkapturski/marcinkapturski.com/actions/workflows/automation-tests.yml"
                  >
                    GitHub Action workflows
                  </a>{" "}
                  by runing them in different ways and on many environments
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className="de_3d-box">
              <div className="d-inner">
                <div>
                  <img
                    src={mobileautomation}
                    alt={"mobile automation"}
                    data-testid="mobile-automation"
                    className="what-i-do-image"
                  />
                </div>
                <div className="text">
                  <h3>Mobile automation tests</h3>
                  Changes in software development inspired me to start
                  supporting mobile automation with Appium & Wdio for iOS &
                  Android (Browserstack, Lambdatest)
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className="de_3d-box">
              <div className="d-inner">
                <div>
                  <img
                    src={teststrategies}
                    alt={"test strategies"}
                    data-testid="test-strategies"
                    className="what-i-do-image"
                  />
                </div>
                <div className="text">
                  <h3>Developing test strategies</h3>
                  Well-written tests require proper planning <br />I like to use
                  Mind Map from{" "}
                  <a
                    className="link_black"
                    target="_blank"
                    rel="noreferrer"
                    href="https://miro.com/app/board/uXjVPxsPXv4=/"
                  >
                    Miro
                  </a>{" "}
                  for visibility, Jira or TFS for transparency and task tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoTypes;
