import React from "react";

const Footer = () => {
  return (
    <section id="contact" className="pb-0">
      <div className="spacer-double"></div>
      <div className="spacer-double"></div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="footer-text">
                &copy; Copyright 2023 - Marcin Kapturski
              </span>
            </div>
            <div className="col-md-6">
              <p className="footer-text">
                This website is built by <b>React</b>, tested by <b> Cypress</b>{" "}
                / Read more on
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/marcinkapturski"
                >
                  <b className="footer-link">GitHub</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
