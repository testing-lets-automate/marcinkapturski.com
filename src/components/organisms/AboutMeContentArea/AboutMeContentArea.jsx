import React from "react";
import Heading from "components/atoms/Heading/Heading";
import AOS from "aos";
AOS.init();

const AboutMeContentArea = () => {
  return (
    <section id="aboutme">
      <div className="container">
        <div className="spacer-double"></div>
        <div className="spacer-double"></div>
        <Heading text="About me" />
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
            19 years of profesional experience in Software Testing. Working with
            various companies across diverse business areas, cultures,
            geographies.
            <br />
          </blockquote>
          {/* <div className="row">
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
                    <h3>LinkedIn</h3>
                    Here is my profile
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
                    <h3>LinkedIn</h3>
                    Here is my profile
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
                    <h3>LinkedIn</h3>
                    Here is my profile
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="spacer-double"></div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMeContentArea;
