import React from "react";
import { Parallax } from "react-parallax";
import Heading from "components/atoms/Heading/Heading";
import background from "../../../assets/background.jpg";
import AOS from "aos";
AOS.init();

const ContactContentArea = () => {
  return (
    <section id="contact" className="pb-0">
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
              <div className="spacer-double"></div>
              <div className="spacer-double"></div>
              <Heading text="Contact" />
              <div className="row align-items-center">
                <div className="col-md-10 offset-md-1">
                  <div className="spacer-double"></div>
                  <blockquote className="q-big">
                    If you need to test your software in order to meet the
                    highest quality standards, contact me
                    <br />
                    Let's talk about the solutions and benefits that my work can
                    provide
                  </blockquote>
                </div>
              </div>
              <div className="spacer-double"></div>
              <div className="spacer-double"></div>
              <div
                className="col-lg-8 offset-lg-2"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease"
              >
                <div className="row text-center">
                  <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  >
                    <div className="wm-1"></div>
                    <h6>My e-mail</h6>
                    <p>
                      <a href="mailto:contact@marcinkapturski.com">
                        contact@marcinkapturski.com
                      </a>
                    </p>
                  </div>
                  <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  >
                    <div className="wm-1"></div>
                    <h6>My mob.</h6>
                    <p>
                      <a href="tel:48 531 230 588">+48 531 230 588</a>
                    </p>
                  </div>
                  <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  >
                    <div className="wm-1"></div>
                    <h6>LinkedIn</h6>
                    <p>
                      <a href="https://www.linkedin.com/in/marcin-kapturski/">
                        Marcin Kapturski
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default ContactContentArea;
