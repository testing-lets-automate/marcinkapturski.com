import React, { useEffect, useState } from "react";
import Burgermenu from "components/atoms/Buttons/Burgermenu/Burgermenu";
import Logo from "components/molecules/Logo/Logo";
import Typed from "react-typed";
import { Link } from "react-scroll";
import NavigationItem from "components/molecules/NavigationItem/NavigationItem";

const Header = function () {
  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const flytext = document.getElementById("fly");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
        flytext.classList.add("hide");
      } else {
        header.classList.remove("sticky");
        flytext.classList.remove("hide");
        totop.classList.remove("show");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <header id="header-wrap">
      <nav className="navbar transition">
        <div className="container">
          <Logo />
          <div className="dekstopmenu">
            <ul className="navbar-nav" data-testid="navigation-panel">
              <NavigationItem name="Start" section="hero-area" />
              <NavigationItem name="About Me" section="aboutme" />
              <NavigationItem name="What I do" section="whatido" />
              {/* <NavigationItem name="Blog" section="blog" /> */}
              <NavigationItem name="Contact" section="contact" />
            </ul>
            <button className="btn-main mt-3">
              <a href="#/contact">
                <Typed
                  strings={["Get Free Consultation"]}
                  typeSpeed={10}
                  className="hero-button"
                />
              </a>
            </button>
          </div>
          {showmenu && (
            <div className="mobilemenu">
              <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                <NavigationItem name="Start" section="hero-area" />
                <NavigationItem name="About Me" section="aboutme" />
                <NavigationItem name="What I do" section="whatido" />
                {/* <NavigationItem name="Blog" section="blog" /> */}
                <NavigationItem name="Contact" section="contact" />
              </ul>
              <button className="btn-main mt-3">
                <a href="#/contact">
                  <Typed
                    strings={["Get Free Consultation"]}
                    typeSpeed={10}
                    className="hero-button"
                  />
                </a>
              </button>
            </div>
          )}
          <Burgermenu btn_icon={btn_icon} showmenu={showmenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
