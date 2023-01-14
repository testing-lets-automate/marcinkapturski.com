import React from "react";

const Footer = () => {
  return (
    <section id="contact" className="pb-0">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="copy">
                &copy; Copyright 2023 - Marcin Kapturski
              </span>
            </div>
            <div className="col-md-6">
              <p>
                This website was built with <b>React</b>, tested by{" "}
                <b> Cypress,</b> described by Feature files
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/marcinkapturski/marcinkapturski.com/tree/master/cypress/e2e"
                >
                  <b className="footer-link">BDD(Cucumber),</b>
                </a>
                run on
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/marcinkapturski/marcinkapturski.com/actions"
                >
                  <b className="footer-link">GitHub Actions</b>
                </a>{" "}
                / read more
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/marcinkapturski/marcinkapturski.com/blob/master/README.md"
                >
                  <b className="footer-link">here</b>
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
