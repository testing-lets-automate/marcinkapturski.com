import React from "react";
import Heading from "components/atoms/Heading/Heading";
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
          <blockquote className="q-big">
            My over 16 years of experience in various companies across diverse
            business areas, cultures, geographies have prepared me to be an
            effective team player.
          </blockquote>
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
                <i className="icon_genius id-color-2"></i>
                <div className="text">
                  <h3>
                    WEB & API automation tests run on different environments
                  </h3>
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
                <i className="icon_tools id-color-2"></i>
                <div className="text">
                  <h3>
                    Mobile automation tests with Appium & Wdio iOS & Android
                  </h3>
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
                <i className="icon_camera_alt id-color-2"></i>
                <div className="text">
                  <h3>
                    Developing test strategies on all levels of Software
                    Development
                  </h3>
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
