import React from "react";
import { Parallax } from "react-parallax";
import background from "../../../assets/background.jpg";
import Heading from "components/atoms/Heading/Heading";
import AOS from "aos";
AOS.init();

const Contact = () => {
  return (
    <section id="contact" className="pb-0">
      <div className="container">
        <Heading text="Contact Me" />
      </div>
      <div className="map-container">
        <iframe
          title="gooogle-map"
          name="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842516.8534501768!2d16.17663697033042!3d51.97113199825855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!5e0!3m2!1sen!2spl!4v1673602291919!5m2!1sen!2spl"
          width="100%"
          height="400px"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="section bg-top bg-bottom py-0">
        <Parallax className="py-5" bgImage={background} strength={300}>
          <div className="py-5 position-relative">
            <div className="container">
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
                    <h4>My e-mail</h4>
                    <p>
                      <a href="mailto:sample@sample.com">sample@sample.com</a>
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
                    <h4>My mob.</h4>
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
                    <h4>LinkedIn</h4>
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

export default Contact;
