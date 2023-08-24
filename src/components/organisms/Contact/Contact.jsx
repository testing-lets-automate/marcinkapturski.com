import emailjs from "emailjs-com";
import { Parallax } from "react-parallax";

import background from "../../../assets/background.jpg";
import Heading from "components/atoms/Heading/Heading";
import Text from "components/atoms/Text/Text";
import Input from "components/atoms/Input/Input";
import Textarea from "components/atoms/Textarea/Textarea";
import ButtonSubmit from "components/atoms/Buttons/ButtonSubmit/ButtonSubmit";
import AOS from "aos";
AOS.init();

const EMAIL_JI_SERVICE = process.env.DATOCMS_API_TOKEN;
const EMAIL_JI_TEMPLATE = process.env.DATOCMS_API_TOKEN;
const EMAIL_JI_PASSWORD = process.env.DATOCMS_API_TOKEN;

const Contact = () => {
  function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("send_message");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aspqawq",
        "template_31g0b3c",
        e.target,
        "tfGmpkL9Lhkl-cmnY"
      )
      .then(
        (result) => {
          console.log(result.text);
          success.classList.add("show");
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
    <section id="contact" className="pb-0">
      <div className="section bg-top bg-bottom py-0">
        <Parallax className="py-5" bgImage={background} strength={300}>
          <div className="py-5 position-relative">
            <div className="container">
              <div
                className="col-lg-8 offset-lg-2"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease"
              >
                <div className="row text-center">
                  <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  >
                    <div className="wm-1"></div>
                    <h6>My e-mail</h6>
                    <p>
                      <a href="/">marcin.kapturski.m@gmail.com</a>
                    </p>
                  </div>
                  <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  >
                    <div className="wm-1"></div>
                    <h6>My mob.</h6>
                    <p>
                      <a href="tel:48 531 230 588">+48 531 230 588</a>
                    </p>
                  </div>
                  <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                  >
                    <div className="wm-1"></div>
                    <h6>LinkedIn</h6>
                    <p>
                      <a href="https://www.linkedin.com/in/marcin-kapturski/">
                        Marcin Kapturski
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Contact;
