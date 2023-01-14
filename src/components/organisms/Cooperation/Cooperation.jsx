import React from "react";
import Heading from "components/atoms/Heading/Heading";
import AOS from "aos";
AOS.init();

const Cooperation = () => {
  return (
    <section id="resume" className="pb-0">
      <div className="container">
        <Heading text="How to start cooperation with me" />
        <div className="row gh-5">
          <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
            <div className="p-4">
              <h3 className="s_border">First steps</h3>
              <ul className="d_timeline">
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">1 Lorem ipsum</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Respond to ...</span>
                    <span className="d_company">Contact</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi tempora perferendis vero officia enim impedit
                    voluptatem dignissimos, veniam ratione est alias rerum
                    aperiam, nam aliquam reprehenderit iste dolor.
                  </p>
                </li>
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">2 Lorem ipsum</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Respond to ...</span>
                    <span className="d_company">Contact</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi tempora perferendis vero officia enim impedit
                    voluptatem dignissimos, veniam ratione est alias rerum
                    aperiam, nam aliquam reprehenderit iste dolor.
                  </p>
                </li>
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">3 Lorem ipsum</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Respond to ...</span>
                    <span className="d_company">Contact</span>Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Animi tempora
                    perferendis vero officia enim impedit voluptatem
                    dignissimos, veniam ratione est alias rerum aperiam, nam
                    aliquam reprehenderit iste dolor.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
            <div className="p-4">
              <h3 className="s_border">Once we started</h3>
              <ul className="d_timeline">
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">4 Lorem ipsum</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Respond to ...</span>
                    <span className="d_company">Contact</span>Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Animi tempora
                    perferendis vero officia enim impedit voluptatem
                    dignissimos, veniam ratione est alias rerum aperiam, nam
                    aliquam reprehenderit iste dolor.
                  </p>
                </li>
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">5 Lorem ipsum</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Respond to ...</span>
                    <span className="d_company">Contact</span>Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Animi tempora
                    perferendis vero officia enim impedit voluptatem
                    dignissimos, veniam ratione est alias rerum aperiam, nam
                    aliquam reprehenderit iste dolor.
                  </p>
                </li>
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">6 Lorem ipsum</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Respond to ...</span>
                    <span className="d_company">Contact</span>Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Animi tempora
                    perferendis vero officia enim impedit voluptatem
                    dignissimos, veniam ratione est alias rerum aperiam, nam
                    aliquam reprehenderit iste dolor.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="spacer-double"></div>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
