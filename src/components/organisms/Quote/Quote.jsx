import React from "react";
import { Parallax } from "react-parallax";
import background from "../../../assets/background.jpg";
import AOS from "aos";
AOS.init();

const Quote = () => {
  return (
    <section id="about" className="pb-0">
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
              <div className="row align-items-center">
                <div className="col-md-10 offset-md-1">
                  <div className="spacer-double"></div>
                  <blockquote className="q-big">
                    <i className="d-big icon_quotations"></i>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset.
                    <span className="d-quote-by">Lorem Ipsum</span>
                  </blockquote>
                  <div className="spacer-double"></div>
                  <div className="spacer-double"></div>
                  <div className="spacer-single"></div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Quote;
