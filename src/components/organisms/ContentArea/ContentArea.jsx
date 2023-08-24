import React from "react";
import Heading from "components/atoms/Heading/Heading";
import WhatIDoTypes from "components/organisms/WhatIDoTypes/WhatIDoContentArea";
import AOS from "aos";
AOS.init();

const ProblemsISolve = () => {
  return (
    <section id="whatido">
      <div className="container">
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
          <p>
            I am driven by developing life-changing, innovative and
            highly-advanced software solutions. I consider creativity and growth
            mindset as the main factors of success even over my 20 years of
            experience
          </p>
        </div>
        <WhatIDoTypes />
      </div>
    </section>
  );
};

export default ProblemsISolve;
