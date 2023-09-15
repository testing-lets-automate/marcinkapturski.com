import React from "react";
import { Helmet } from "react-helmet";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import Preloader from "components/organisms/Preloader/Preloader";
import HeaderPost from "components/organisms/HeaderPost/HeaderPost";
import Footer from "components/organisms/Footer/Footer";
import SocialIcons from "components/atoms/SocialIcons/SocialIcons";
import ScrollToTop from "components/organisms/ScrollToTop/ScrollToTop";
import HeadingPost from "components/atoms/HeadingPost/HeadingPost";

const ServiceMobileAutomationPage = () => {
  return (
    <section>
      <>
        <Helmet>
          <title>Service | Mobile Automation</title>
          <meta name="description" content="Service | Mobile Automation" />
        </Helmet>
        <div className="home">
          <Preloader />
          <HeaderPost />
          <div className="spacer-double"></div>
          <div className="spacer-double"></div>
          <div className="container">
            <div className="row g-14">
              <div className="col-lg-14">
                <HeadingPost text="Mobile Automation" />
                <div className="spacer-double"></div>
                <hr />
                <div className="spacer-single"></div>
                <div>
                  <div className="row">
                    <div
                      className="col-lg-6"
                      data-aos="fade"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                    >
                      <div className="de_2d-box">
                        <div className="d-inner">
                          <div className="text">
                            <h3>Developing Various of Automation Tests</h3>
                            Your Toolkit for Diverse Testing Needs
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6"
                      data-aos="fade"
                      data-aos-delay="500"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                    >
                      <div className="de_2d-box">
                        <div className="d-inner">
                          <div className="text">
                            These tests make sure your project is strong and
                            works well at every stage of development.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="spacer-double"></div>
                  <hr />
                  <div className="spacer-double"></div>
                  <div className="spacer-double"></div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <SocialIcons text="GitHub" />
        </div>
        <ScrollToTop />
      </>
    </section>
  );
};

export default ServiceMobileAutomationPage;
