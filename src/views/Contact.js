import React from "react";
// import AOS from "aos";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

import Preloader from "components/organisms/Preloader/Preloader";
import HeaderPost from "components/organisms/HeaderPost/HeaderPost";
import Footer from "components/organisms/Footer/Footer";
import SocialIcons from "components/atoms/SocialIcons/SocialIcons";
import ScrollToTop from "components/organisms/ScrollToTop/ScrollToTop";
import Text from "components/atoms/Text/Text";
import Input from "components/atoms/Input/Input";
import Textarea from "components/atoms/Textarea/Textarea";
import ButtonSubmit from "components/atoms/Buttons/ButtonSubmit/ButtonSubmit";

const ContactPage = () => {
  function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("send_message");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          success.classList.add("show");
          window.location.reload();
          button.classList.add("show");
          failed.classList.remove("show");
        },
        (error) => {
          console.log(error.text);
          failed.classList.add("show");
        }
      );
  }

  return (
    <section>
      <>
        <Helmet>
          <title>Contact Form | Freelance Test Automation Engineer</title>
          <meta
            name="description"
            content="Contact Form | Get Free Consultation"
          />
        </Helmet>
        <div className="home">
          <Preloader />
          <HeaderPost />
          <div className="spacer-double"></div>
          <div className="container">
            <div className="row g-14">
              <div className="col-lg-14">
                <div className="spacer-double"></div>
                <hr />
                <div className="spacer-single"></div>
                <div>
                  <div className="row">
                    <div
                      className="col-lg-4 text-left m-auto"
                      data-aos="fade"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                    >
                      <div className="de_2d-box">
                        <div className="d-inner">
                          <div className="text">
                            <div className="d-inner">
                              <div className="text">
                                <p>
                                  <b>Feel free to ask me anything!</b> <br />
                                  You'll be impressed by my expertise in
                                  software testing and development.
                                </p>
                                <p>
                                  <b>
                                    Share some insights into the technologies
                                    you use, your toolkit, and your expectations
                                    for test planning and automation.
                                  </b>
                                </p>
                                <div className="text">
                                  <div className="skill-box">
                                    19 years of profesional experience
                                  </div>
                                  <div className="skill-box">
                                    640 automation tests from this year
                                  </div>
                                  <div className="skill-box">
                                    26 successful projects
                                  </div>
                                  <div className="skill-box">
                                    12 worldwide clients
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 text-left m-auto"
                      data-aos="fade"
                      data-aos-delay="400"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                    >
                      <div className="de_2d-box">
                        <div className="d-inner">
                          <div
                            className="col-lg-10 offset-lg-2"
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                          >
                            <div className="contact_form_wrapper">
                              <div className="form_wrapper">
                                <form
                                  name="contactForm"
                                  id="contact_form"
                                  className="form-border"
                                  onSubmit={sendEmail}
                                >
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className="field-set">
                                        <Input
                                          name="Name"
                                          id="name"
                                          placeholder="Introduce yourself, please!"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="field-set">
                                        <Input
                                          name="Email"
                                          id="email"
                                          placeholder="Your e-mail"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="field-set">
                                        <Input
                                          name="Phone"
                                          id="phone"
                                          placeholder="Your mobile"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <div className="field-set">
                                      <Textarea
                                        placeholder="Provide some context about the
                                    technologies you're using, the tools in your
                                    toolkit, and your requirements for test
                                    planning and automation."
                                      />
                                    </div>
                                  </div>

                                  <div className="text-center">
                                    <Text
                                      id="success"
                                      text="Your message has been sent..."
                                    />
                                    <Text
                                      id="failed"
                                      text="Sending failed..."
                                    />

                                    <ButtonSubmit
                                      type={"submit"}
                                      id="send_message"
                                      className="btn-main"
                                      text={"Send message"}
                                    />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="spacer-single"></div>
                  <hr />
                  <div className="spacer-double"></div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <SocialIcons text="Follow Me" />
        </div>
        <ScrollToTop />
      </>
    </section>
  );
};

export default ContactPage;
