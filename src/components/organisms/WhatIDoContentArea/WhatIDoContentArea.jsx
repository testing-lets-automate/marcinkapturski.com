import React from "react";
import Heading from "components/atoms/Heading/Heading";
import AOS from "aos";
AOS.init();

const WhatIDoContentArea = () => {
  return (
    <section id="whatido">
      <div className="container">
        <div className="spacer-double"></div>
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
            proven track record of developing automation tests and test
            strategies performed manually and automatically.
          </blockquote>
          <div className="spacer-double"></div>
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
                <div className="text">
                  <h3>Web & API automation</h3>I am writing WEB & API tests,
                  mostly with{" "}
                  <a
                    className="link_black"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.cypress.io"
                  >
                    Cypress tool
                  </a>{" "}
                  and support of{" "}
                  <a
                    className="link_black"
                    target="_blank"
                    rel="noreferrer"
                    href="https://docs.github.com/en/actions/quickstart"
                  >
                    GitHub Actions
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
                <div className="text">
                  <h3>Mobile automation tests</h3>
                  Changes in software development inspired me to start
                  supporting mobile automation ( iOS / Android ) with{" "}
                  <a
                    className="link_black"
                    target="_blank"
                    rel="noreferrer"
                    href="http://appium.io"
                  >
                    Appium
                  </a>
                  ,
                  <a
                    className="link_black"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.browserstack.com"
                  >
                    {" "}
                    Browserstack
                  </a>{" "}
                  or
                  <a
                    className="link_black"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.lambdatest.com"
                  >
                    {" "}
                    Lambdatest
                  </a>
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
                <div className="text">
                  <h3>Developing test strategies</h3>
                  Well-written tests require proper planning <br />I specialize
                  in comprehensive software testing planning and crafting
                  practical testing concepts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoContentArea;
