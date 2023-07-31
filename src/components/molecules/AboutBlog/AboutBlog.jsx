import React from "react";
import Heading from "components/atoms/Heading/Heading";
import webautomation from "../../../assets/web-automation.png";
import mobileautomation from "../../../assets/mobile-automation.png";
import teststrategies from "../../../assets/test-strategies.png";
import AOS from "aos";
AOS.init();

const WhatIDoTypes = () => {
  return (
    <section id="whatido">
      <div className="container">
        <div className="spacer-single"></div>
        <div className="spacer-double"></div>
        <div className="spacer-double"></div>
        <Heading text="About this blog" />
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
            This blog is a kind of collection of solutions for challenges I had
            the pleasure to face. Gathered in one place, from projects in which
            I participated. They may be useful when they occur again.
          </blockquote>
          <div className="spacer-double"></div>
          <div className="spacer-double"></div>
        </div>
      </div>
      <div className="spacer-double"></div>
    </section>
  );
};

export default WhatIDoTypes;
