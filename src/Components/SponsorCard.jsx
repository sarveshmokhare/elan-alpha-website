import React, { useEffect } from "react";
import {
  BsInstagram,
  BsYoutube,
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsGlobe,
} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/sponsors.css";
import ThemeContext from "../Contexts/ThemeContext";
import { Container } from "postcss";

function SponsorCard({
  Role,
  Description,
  Image,
  Website,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="content">
          <div className="contentOverlay"></div>
          <img alt="img" className="contentImage" src={Image} />
          <div className="fadeInTop contentDetails">
            <p className="font-text text-xs">{Description}</p>
            <div className="flex justify-around pt-4 px-6">
              {Website && (
                <a href={Website} target="_blank" rel="noreferrer">
                  <BsGlobe
                    icon={BsGlobe}
                    className="text-white text-xl hoveraction cursor-pointer"
                  />
                </a>
              )}
              {Facebook && (
                <a href={Facebook} target="_blank" rel="noreferrer">
                  <BsFacebook
                    icon={BsFacebook}
                    className="text-white text-xl hoveraction cursor-pointer"
                  />
                </a>
              )}
              {Instagram && (
                <a href={Instagram} target="_blank" rel="noreferrer">
                  <BsInstagram
                    icon={BsInstagram}
                    className="text-white text-xl hoveraction cursor-pointer"
                  />
                </a>
              )}
              {Twitter && (
                <a href={Twitter} target="_blank" rel="noreferrer">
                  <BsTwitter
                    icon={BsTwitter}
                    className="text-white text-xl hoveraction cursor-pointer"
                  />
                </a>
              )}
              {Linkedin && (
                <a href={Linkedin} target="_blank" rel="noreferrer">
                  <BsLinkedin
                    icon={BsLinkedin}
                    className="text-white text-xl hoveraction cursor-pointer"
                  />
                </a>
              )}
            </div>
          </div>
          <h3 className="font-heading text-lg text-center text-white">
            {Role}
          </h3>
        </div>
      </div>
    </>
  );
}

export default SponsorCard;
