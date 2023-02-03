import React from "react";
import { Link } from "react-scroll";
import Image from "components/atoms/Image/Image";
import face from "../../../assets/banner_image.png";
import Typed from "react-typed";
import AOS from "aos";

AOS.init({
  offset: 200,
  duration: 800,
  easing: "ease-in-out-sine",
  delay: 200,
  mirror: true,
});

const Hero = () => {
  return (
    <div className="v-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="spacer-20"></div>
            <div className="h1_big">
              Tests automation &amp; tests strategies
            </div>
            <div
              className="h1_big"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            ></div>
            <ul
              className="list_location"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <li>
                <span>WEB & API automation</span>
              </li>
              <li>
                <span>Mobile automation for Android & iOS mobile devices</span>
              </li>
            </ul>
            <button className="btn-main mt-3">
              <Link to="workwithme">
                <Typed
                  strings={["How to start cooperation with me"]}
                  typeSpeed={30}
                  className="hero-button"
                />
              </Link>
            </button>
          </div>

          <div className="col-md-6">
            <Image
              src={face}
              className="img-fluid"
              alt="hero image"
              datatestid="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
