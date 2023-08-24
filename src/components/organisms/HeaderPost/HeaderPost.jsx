import React, { useEffect, useState } from "react";
import Burgermenu from "components/atoms/Buttons/Burgermenu/Burgermenu";
import Logo from "components/molecules/Logo/Logo";
import NavigationItemPost from "components/molecules/NavigationItemPost/NavigationItemPost";

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
      } else {
        header.classList.remove("sticky");
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
              <NavigationItemPost name="Home page" url="/" />
            </ul>
          </div>
          {showmenu && (
            <div className="mobilemenu">
              <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                <NavigationItemPost name="Home page" url="/" />
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
