import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ThemeContext from "../Contexts/ThemeContext";
import Menu from "./Menu";

const logo = "https://ik.imagekit.io/sarvesh/Elan/more_assets/logo_white_pq9fjb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672124336849";
const menuIcon = "https://ik.imagekit.io/sarvesh/Elan/more_assets/menu_icon_vzj0yx.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1672123652534";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen((currState) => (currState === false ? true : false));
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".header-div", {
        scrollTrigger: {
          trigger: "header",
          start: "50% top",
          toggleAttribute: "play none reverse none",
          // markers: true,
          scrub: true,
        },
        backgroundColor: "rgb(8, 15, 36, 0.85)",
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (menuOpen === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [menuOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".header-div", {
        scrollTrigger: {
          trigger: "header",
          start: "50% top",
          toggleAttribute: "play none reverse none",
          // markers: true,
          scrub: true,
        },
        backgroundColor: "rgb(8, 15, 36, 0.85)",
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <header className="fixed lg:sticky w-full top-0 z-40 opacity-0">
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <div className="header-div backdrop-blur-sm bg-black w-full h-20 border-b border-golden flex items-center justify-between px-4 text-white">
        <Link className="h-[100%] flex items-center" to="/">
          <div className="h-[68%]">
            <img src={logo} alt="logo" className="h-full" />
          </div>
        </Link>

        <div
          className="flex flex-col items-center justify-center cursor-pointer h-full pr-[1%]"
          onClick={toggleMenu}
        >
          <div className="h-[46%]">
            <img className="h-full" src={menuIcon} alt="menu"></img>
          </div>
          <h1 className="text-sm">Menu</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
