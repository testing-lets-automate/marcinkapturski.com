import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Heading from "components/atoms/Heading/Heading";
import "react-circular-progressbar/dist/styles.css";
import StatisticsBarProvider from "../../../utils/StatisticsBarProvider";

import AOS from "aos";
AOS.init();

const StatisticsBar = () => {
  return (
    <section id="about" className="pb-0">
      <div className="v-center">
        <div className="container">
          <Heading text="Technology I love" />
          <div className="row">
            <div
              className="col-lg-3 p-5 text-center"
              data-aos="fade"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <StatisticsBarProvider valueStart={0} valueEnd={90}>
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={value}
                      strokeWidth={3}
                      text={`${roundedValue}.0%`}
                      styles={buildStyles({
                        pathTransition: "none",
                        textColor: "white",
                        textSize: "8px",
                        pathColor: "#cf1f1f",
                        trailColor: "#2f3134",
                      })}
                    />
                  );
                }}
              </StatisticsBarProvider>
              <h4 className="mt-2">HTML</h4>
            </div>
            <div
              className="col-lg-3 p-5 text-center"
              data-aos="fade"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <StatisticsBarProvider valueStart={0} valueEnd={85}>
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={value}
                      strokeWidth={3}
                      text={`${roundedValue}.0%`}
                      styles={buildStyles({
                        pathTransition: "none",
                        textColor: "white",
                        textSize: "8px",
                        pathColor: "#cf1f1f",
                        trailColor: "#2f3134",
                      })}
                    />
                  );
                }}
              </StatisticsBarProvider>
              <h4 className="mt-2">CSS</h4>
            </div>
            <div
              className="col-lg-3 p-5 text-center"
              data-aos="fade"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <StatisticsBarProvider valueStart={0} valueEnd={80}>
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={value}
                      strokeWidth={3}
                      text={`${roundedValue}.0%`}
                      styles={buildStyles({
                        pathTransition: "none",
                        textColor: "white",
                        textSize: "8px",
                        pathColor: "#cf1f1f",
                        trailColor: "#2f3134",
                      })}
                    />
                  );
                }}
              </StatisticsBarProvider>
              <h4 className="mt-2">PHP</h4>
            </div>
            <div
              className="col-lg-3 p-5 text-center"
              data-aos="fade"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <StatisticsBarProvider valueStart={0} valueEnd={75}>
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={value}
                      strokeWidth={3}
                      text={`${roundedValue}.0%`}
                      styles={buildStyles({
                        pathTransition: "none",
                        textColor: "white",
                        textSize: "8px",
                        pathColor: "#cf1f1f",
                        trailColor: "#2f3134",
                      })}
                    />
                  );
                }}
              </StatisticsBarProvider>
              <h4 className="mt-2">Javascript</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsBar;
