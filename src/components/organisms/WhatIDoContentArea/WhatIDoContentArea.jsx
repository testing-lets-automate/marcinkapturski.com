import React from "react";
import Heading from "components/atoms/Heading/Heading";
import AOS from "aos";
import Image from "components/atoms/Image/Image";
import uiapiautomation from "../../../assets/blank_img.png";
import mobileautomation from "../../../assets/blank_img.png";
import testplanning from "../../../assets/blank_img.png";

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
                    <div className="card-image-1">
                      <Image
                        src={uiapiautomation}
                        className={" "}
                        alt={"gallery"}
                      />
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
                <div className="text">
                  I'll assist you with: <br />
                  <h2>Writing UI & API Automation</h2>
                  <p>Implementing automation tests for any WEB application.</p>
                  <p>
                    <b>Parallel Execution</b> - Running tests concurrently to
                    minimize test execution time.
                  </p>
                  <p>
                    <b>Multi-environment Support</b> - Executing the same tests
                    across various environments.
                  </p>
                  <p>
                    <b>Multi-User Functionality</b> - Utilizing a diverse set of
                    user profiles with unrestricted data access.
                  </p>
                  <p>
                    <b>
                      BDD (Behavior-Driven Development) with Cucumber(Gherkin)
                    </b>{" "}
                    - Assisting Product Owners by creating test scenarios in a
                    human-readable language.
                  </p>
                  <p>
                    <b>Presenting Results on a Dashboard</b> - Access to my
                    custom application, provided to you free of charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer-double"></div>
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
                    <div className="text">
                      I'll assist you with: <br />
                      <h2>iOS & Android Mobile Automation</h2>
                      <p>
                        Implementing automation tests for iOS and Android apps,
                        utilizing real devices provided by<b> BrowserStack</b>{" "}
                        or
                        <b> LambdaTest</b>.
                      </p>
                      <p>
                        <b>Cucumber(Gherkin) or Mocka tests </b> - You have the
                        flexibility to select the format, whether it's
                        traditional or with support for non-technical team
                        members.
                      </p>
                      <p>
                        <b>Flexible Test Execution</b> - Run the tests in
                        various modes, including on pull-request, on-demand, or
                        typically during regression.
                      </p>
                      <p>
                        <b>Seamless App Center Integration</b> - Directly access
                        apps from Microsoft's App Center.
                      </p>
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
        <div className="spacer-double"></div>

        <div className="row">
          <div
            className="col-lg-6"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className="de_3d-box">
              <div className="d-inner">
                <div className="card-image-1">
                  <Image src={testplanning} className={" "} alt={"gallery"} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 text-right m-auto"
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
                  <h2>Test planning, developing test strategies</h2>
                  <p>
                    <b>Well-written tests require proper planning</b> - I
                    specialize in comprehensive software testing planning for
                    both web and mobile software development
                  </p>
                  <p>
                    This includes{" "}
                    <ul>
                      <li>
                        <b>
                          functionality review aligned with defined requirements
                        </b>
                      </li>
                      <li>
                        <b>A deep dive into business processes</b>
                      </li>
                      <li>
                        <b>Analysis of project risks</b>
                      </li>
                    </ul>
                  </p>
                  <p>
                    The result is a meticulously designed plan executed in the
                    form of
                    <br />
                    <b> Regression Tests </b> - Ensuring comprehensive test
                    coverage
                    <br />
                    <b>End-to-End (E2E) Tests </b> - Verifying functionalities
                    from start to finish.
                    <br />
                    <b>Smoke Tests </b> - Assessing the core system functions.
                    <br />
                    <b>Integration Tests </b> - Validating interactions between
                    components or applications.
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
