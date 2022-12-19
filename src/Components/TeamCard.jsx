import React, { useEffect } from "react";
import "../styles/team.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bg1 from "../assets/Team/CardBG/BG1.svg";
import bg2 from "../assets/Team/CardBG/BG2.svg";
import bg3 from "../assets/Team/CardBG/BG3.svg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function HeadCard({ Name, Image, Role, Phone, Instagram, Twitter, Linkedin }) {
  useEffect(() => {
<<<<<<< Updated upstream
    AOS.init({
      disable: window.innerWidth > 900,
    });
=======
    AOS.init();
>>>>>>> Stashed changes
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        className="card bg-[#E3AA57] py-4 px-2 rounded-tl-[30px] rounded-br-[30px]"
      >
        <img
          className="absolute h-[170px] mt-[-16px] ml-[-8px] z-0 rounded-tl-[30px]"
          src={bg1}
        />
        <img
          className="absolute h-[170px] z-0 mt-[-16px] ml-[85px]"
          src={bg2}
        />
        {/* <img className="absolute z-0"  src={bg3}/> */}
        <div className="box overflow-hidden justify-center mx-auto relative  ">
          <LazyLoadImage
            src={Image}
            className="object-cover w-[100%] h-[100%]"
            alt="Image"
          />
        </div>

        <div className=" ml-2 text-left font-cinzel text-xl mt-4 text-[#0D1838] font-bold ">
          {Name}
        </div>
        <div className=" ml-2 text-left font-[700] text-lg  text-[#5F3800]">
          {Role}
        </div>
        <div className=" ml-2 text-left font-[700] text-base  text-[#5F3800]">
          {Phone}
        </div>
        <div className="text-left flex flex-wrap mt-2 ml-2 ">
          {Instagram && (
            <a href={Instagram} target="_blank" rel="noreferrer">
              <BsInstagram
                icon={BsInstagram}
                className="text-white text-xl hoveraction cursor-pointer mx-1"
              />
            </a>
          )}
          {Twitter && (
            <a href={Twitter} target="_blank" rel="noreferrer">
              <BsTwitter
                icon={BsTwitter}
                className="text-white text-xl hoveraction cursor-pointer mx-1"
              />
            </a>
          )}
          {Linkedin && (
            <a href={Linkedin} target="_blank" rel="noreferrer">
              <BsLinkedin
                icon={BsLinkedin}
                className="text-white text-xl hoveraction cursor-pointer mx-1"
              />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

function CoordCard({ Name, Image, Role, Phone }) {
  useEffect(() => {
    AOS.init(
      // {disable:window.innerWidth <1000  } 
    );
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="card bg-[#0D1838] py-4 px-2 rounded-tl-[30px] rounded-br-[30px]"
      >
        <img
          className="absolute h-[170px] mt-[-16px] ml-[-8px] z-0 rounded-tl-[30px]"
          src={bg1}
        />
        <img
          className="absolute h-[170px] z-0 mt-[-16px] ml-[85px]"
          src={bg2}
        />
        {/* <img className="absolute z-0"  src={bg3}/> */}
        <div className="box overflow-hidden justify-center mx-auto relative  ">
          <img
            src={Image}
            className="object-cover w-[100%] h-[100%]"
            alt="Image"
          />
        </div>

        <div className=" ml-1 text-left font-cinzel font-[700] text-xl mt-4 text-[#FFFFFF] font-bold ">
          {Name}
        </div>
        <div className=" ml-1 text-left font-[700] text-lg  text-[#FED395]">
          {Role}
        </div>
        <div className=" ml-1 text-left font-[700] text-base  text-[#FED395]">
          {Phone}
        </div>
      </div>
    </>
  );
}

function OCCard({ Name, Image, Role, Phone, Instagram, Twitter, Linkedin }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
      data-aos="zoom-in"
        data-aos-duration="1000"
       className="card bg-[#AD002A] py-4 px-2 rounded-tl-[30px] rounded-br-[30px]">
        <img
          className="absolute h-[170px] mt-[-16px] ml-[-8px] z-0 rounded-tl-[30px]"
          src={bg1}
        />
        <img
          className="absolute h-[170px] z-0 mt-[-16px] ml-[85px]"
          src={bg2}
        />
        <img
          className="absolute h-[85px] z-0 mt-[150px] ml-[148px] rounded-br-[30px]"
          src={bg3}
        />
        <div className="box overflow-hidden justify-center mx-auto relative  ">
          <LazyLoadImage
            src={Image}
            className="object-cover w-[100%] h-[100%]"
            alt="Image"
          />
        </div>

        <div className=" text-center font-cinzel font-[700] text-xl mt-4 text-[#FFFFFF] font-bold ">
          {Name}
        </div>
        <div className=" text-center font-century font-[700] text-l  text-[#FED395]">
          {Role}
        </div>
        <div className="text-center font-[700] text-l  text-[#FED395]">
          {Phone}
        </div>
        <div className="justify-center flex flex-wrap mt-2 ml-2 ">
          {Instagram && (
            <a href={Instagram} target="_blank" rel="noreferrer">
              <BsInstagram
                icon={BsInstagram}
                className="text-white text-xl hoveraction cursor-pointer mx-1"
              />
            </a>
          )}
          {Twitter && (
            <a href={Twitter} target="_blank" rel="noreferrer">
              <BsTwitter
                icon={BsTwitter}
                className="text-white text-xl hoveraction cursor-pointer mx-1"
              />
            </a>
          )}
          {Linkedin && (
            <a href={Linkedin} target="_blank" rel="noreferrer">
              <BsLinkedin
                icon={BsLinkedin}
                className="text-white text-xl hoveraction cursor-pointer mx-1"
              />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export { HeadCard, CoordCard, OCCard };
