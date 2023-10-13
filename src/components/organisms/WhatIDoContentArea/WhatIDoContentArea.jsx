import React from "react";
import Heading from "components/atoms/Heading/Heading";
import AOS from "aos";
import Image from "components/atoms/Image/Image";
import uiapiautomation from "../../../assets/ui_api.png";
import mobileautomation from "../../../assets/mobile.png";
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
            I ensure the technology meets high-quality standards. <br />
            Let's talk about the solutions and benefits that I can provide
          </blockquote>
          <div className="spacer-double"></div>
          <div className="spacer-double"></div>
        </div>

        <div className="row">
          <div
            className="col-lg-4 text-center m-auto"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className="de_2d-box">
              <div className="d-inner">
                <div className="text">
                  <div className="d-inner">
                    <div className="spacer-double"></div>
                    <div className="card-image-1">
                      <Image
                        src={uiapiautomation}
                        className={" "}
                        alt={"gallery"}
                      />
                    </div>
                    <div className="spacer-double"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 text-left m-auto"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className="de_2d-box">
              <div className="d-inner">
                <div className="text">
                  I'll assist you with: <br />
                  <h2>Writing UI & API Automation</h2>
                  <p>Implementing automation tests for any WEB application.</p>
                  <div className="start-panel">
                    <b>Parallel Execution</b> Running tests concurrently to
                    minimize test execution time.
                  </div>
                  <div className="start-panel">
                    <b>Multi-environment Support</b> Executing the same tests
                    across various environments.
                  </div>
                  <div className="start-panel">
                    <b>Multi-User Functionality</b> Utilizing a diverse set of
                    user profiles with unrestricted data access.
                  </div>
                  <div className="start-panel">
                    <b>
                      BDD (Behavior-Driven Development) with Cucumber(Gherkin)
                    </b>{" "}
                    Assisting Product Owners by creating test scenarios in a
                    human-readable language.
                  </div>
                  <div className="start-panel">
                    <b>Presenting Results on a Dashboard</b> Access to my custom
                    application, provided to you free of charge.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer-double"></div>

        <div className="row">
          <div
            className="col-lg-4 text-left m-auto"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className="de_2d-box">
              <div className="d-inner">
                <div className="text">
                  <div className="d-inner">
                    <div className="text">
                      I'll assist you with: <br />
                      <h2>iOS & Android Mobile Automation</h2>
                      <p>
                        Implementing automation tests for iOS and Android apps,
                        utilizing real devices provided by<b> BrowserStack</b>{" "}
                        or
                        <b> LambdaTest</b>.
                      </p>
                      <div className="start-panel">
                        <b>Cucumber(Gherkin) or Mocka tests </b> You have the
                        flexibility to select the format, whether it's
                        traditional or with support for non-technical team
                        members.
                      </div>
                      <div className="start-panel">
                        <b>Flexible Test Execution</b> Run the tests in various
                        modes, including on pull-request, on-demand, or
                        typically during regression.
                      </div>
                      <div className="start-panel">
                        <b>Seamless App Center Integration</b> Directly access
                        apps from App Center.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 text-left m-auto"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className="de_2d-box">
              <div className="d-inner">
                <div className="spacer-double"></div>
                <div className="card-image-1">
                  <Image
                    src={mobileautomation}
                    className={" "}
                    alt={"gallery"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer-double"></div>
        <div className="spacer-double"></div>

        <div className="row">
          <div
            className="col-lg-4 text-left m-auto"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className="de_2d-box">
              <div className="d-inner">
                <div className="text">
                  <div className="d-inner">
                    <div className="spacer-double"></div>
                    <ul className="d_timeline">
                      <li className="d_timeline-item">
                        <h3 className="d_timeline-title">
                          Planning Test Processes:
                        </h3>
                        <p className="d_timeline-text">
                          I help you plan your test processes, ensuring the use
                          of the right tools and testing models
                        </p>
                      </li>
                      <li className="d_timeline-item">
                        <h3 className="d_timeline-title">
                          Defining Test Scenarios
                        </h3>
                        <p className="d_timeline-text">
                          I define test scenarios and group them for specific
                          activities and testing sessions. This includes
                          comprehensive testing types such as Regression,
                          End-to-End (E2E), and Smoke Tests.
                        </p>
                      </li>
                      <li className="d_timeline-item">
                        <h3 className="d_timeline-title">
                          Documenting and Executing
                        </h3>
                        <p className="d_timeline-text">
                          Documentation on how the tests will be executed,
                          Re-running and adaptation are integral parts of the
                          process
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 text-left m-auto"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className="de_2d-box">
              <div className="d-inner">
                <div className="spacer-double"></div>
                <div className="text">
                  I'll assist you with: <br />
                  <h2>Test planning, developing test strategies</h2>
                  <p>
                    <b>Well-written tests require proper planning</b> <br />I
                    specialize in comprehensive software testing planning for
                    both web and mobile software development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer-double"></div>
        <div className="spacer-double"></div>
      </div>
    </section>
  );
};

export default WhatIDoContentArea;
