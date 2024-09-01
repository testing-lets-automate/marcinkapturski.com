import React from "react";

const Footer = () => {
  return (
    <section id="contact" className="pb-0">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="footer-text-copyright">
                &copy; Copyright 2024 - Marcin Kapturski
              </span>
            </div>
            <div className="col-md-6">
              <p className="footer-text">
                This website is built by <b>React</b>, tested by <b> Cypress</b>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
