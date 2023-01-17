import React, { useEffect, useState } from "react";
import Burgermenu from "components/atoms/Buttons/Burgermenu/Burgermenu";
import Logo from "components/molecules/Logo/Logo";
import NavigationItem from "components/molecules/NavigationItem/NavigationItem";
import NavigationItemMobile from "components/molecules/NavigationItemMobile/NavigationItemMobile";

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
              <NavigationItem url="hero-area" name="Start" />
              <NavigationItem url="whatido" name="What I Do" />
              <NavigationItem url="workwithme" name="Work with me" />
              <NavigationItem url="contact" name="Contact" />
            </ul>
          </div>
          {showmenu && (
            <div className="mobilemenu">
              <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                <NavigationItemMobile url="hero-area" name="Start" />
                <NavigationItemMobile url="whatido" name="What I Do" />
                <NavigationItemMobile url="workwithme" name="About me" />
                <NavigationItemMobile url="contact" name="Contact" />
              </ul>
            </div>
          )}
          <Burgermenu btn_icon={btn_icon} showmenu={showmenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
