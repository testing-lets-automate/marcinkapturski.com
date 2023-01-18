import React from "react";
import { Parallax } from "react-parallax";
import Heading from "components/atoms/Heading/Heading";
import background from "../../../assets/background.jpg";
import AOS from "aos";
AOS.init();

const WorkWithMe = () => {
  return (
    <section id="workwithme" className="pb-0">
      <div className="section bg-top bg-bottom py-0">
        <Parallax className="pb-5" bgImage={background} strength={300}>
          <div
            className="py-5 position-relative"
            data-aos="fade"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <div className="container">
              <Heading text="Work with me" />
              <div className="row align-items-center">
                <div className="col-md-10 offset-md-1">
                  <div className="spacer-double"></div>
                  <blockquote className="q-big">
                    If you’re looking for a freelancer to help you test your
                    software in order to meet the highest quality standards,
                    work with me. <br />
                    <br />
                    Fill out the form below or contact me directly
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default WorkWithMe;
