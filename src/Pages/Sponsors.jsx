import React, { useContext, useState } from "react";
import SponsorCard from "../Components/SponsorCard";
import ThemeContext from "../Contexts/ThemeContext";
import "../styles/sponsors.css";
// 2021 sponsors
import Hero from "../assets/SponsorImages/Sponsor2021/Static Perimeter Board_15 x 3ft-01.png";
import Honeywell from "../assets/SponsorImages/Sponsor2021/Honeywell-Logo.png";
import Nisarga from "../assets/SponsorImages/Sponsor2021/Nisarga Logo.png";
import {
  Sponsor2022,
  Sponsor2020,
  Sponsor2021,
} from "../Components/SponsorData";
// 2020 sponsors
import LandT from "../assets/SponsorImages/Sponsor2020/L&T.png";
// background images
import BG1 from "../assets/SponsorBackground/2 576.svg";
import BG2 from "../assets/SponsorBackground/5 1.svg";
import BG3 from "../assets/SponsorBackground/5 2.svg";
import BG4 from "../assets/SponsorBackground/2 577.svg";
import BG5 from "../assets/SponsorBackground/2 578.svg";
import BG6 from "../assets/SponsorBackground/5 3.svg";

function Sponsors() {
  const context = useContext(ThemeContext);

  const [year, setyear] = useState("2022");
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  return (
    <div className="mt-[76px] lg:mt-0 bg-[#080f24] flex flex-col sponsorDiv">
      <div className="relative bg-[#fed395] md:h-[7.5rem] sm:h-[3rem]">
      
        <h1 className=" main-heading ">
          Sponsors
        </h1>
      </div>
      <div style={{ zIndex: "1" }}>
        <div>
        <h1 className="text-center text-[#fed395] text-[1.75rem] font-bold mt-4">2022</h1>
          <h1 className="heading1">TITLE SPONSOR</h1>
          <img
            src={Hero}
            className=" m-[auto] w-[50vw] bg-[#fff]"
          />
          <img src={BG1} className="BG top-[20%]" />
          <img src={BG2} className="BG right-0 top-[22%]" />
          <img src={BG3} className="BG top-[60%]" />
          <img src={BG4} className="BG top-[58%] right-0" />
          <img src={BG5} className="BG top-[172rem]" />
          <img src={BG6} className="BG top-[175rem] right-0" />
          <h3 className="heading1">CO-TITLE SPONSOR</h3>
          <div className="columns-1 my-[20px] w-1/2 m-[auto] sm:columns-2">
            <img
              src={Nisarga}
              className=" md:my-[40px] sm:mb-[25px]"
            />
            <img
              src={Honeywell}
              // style={{
              //   width: "30vw",
              //   height: "150px",
              //   margin: "auto",
              //   border: "2px solid #FED395 ",
              // }}
              className=" my-[20px]"
            />
          </div>
          <h4 className="heading1">SPONSORS</h4>
          <div className="SponCards">
            {Sponsor2021.map((item,index) => (
              <SponsorCard
                className={(index === 24) ? "bg-[#fff]" : ""}
                // style={{
                //   width: "35vw",
                // }}
                Role={item.Role ? item.Role : "Partner"}
                Description={item.Description}
                Image={item.Image}
                Website={item.Website}
                Facebook={item.Facebook}
                Instagram={item.Instagram}
                Twitter={item.Twitter}
                Linkedin={item.Linkedin}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="button">
        <button
          onClick={() => {
            setyear("2022");
            setIsActive1(true);
            setIsActive2(false);
            setIsActive3(false);
          }}
          className={isActive1 ? 'years active' : 'years'}
        >
          2022
        </button>
        <button
          onClick={() => {
            setyear("2021");
            setIsActive1(false);
            setIsActive2(true);
            setIsActive3(false);
          }}
          className={isActive2 ? 'years active' : 'years'}
        >
          2021
        </button>
        <button
          onClick={() => {
            setyear("2020");
            setIsActive1(false);
            setIsActive2(false);
            setIsActive3(true);
          }}
          className={isActive3 ? 'years active' : 'years'}
        >
          2020
        </button>
      </div>

      {year === "2022" ? (
        <>
          <h2 className="heading1">TITLE SPONSOR 2022</h2>
        </>
      ) : year === "2021" ? (
        <div style={{ zIndex: "1" }}>
          <div>
            <h1 className="heading1">TITLE SPONSOR 2021</h1>
            <img
              src={Hero}
              className="border-solid border-2 border-[#FED395] m-[auto] w-[50vw]"
            />
            <img
              src={BG1}
              className="BG top-[20%]"
            />
            <img
              src={BG2}
              className="BG right-0 top-[22%]"
            />
            <img
              src={BG3}
              className="BG top-[60%]"
            />
            <img
            src={BG4}
              className="BG top-[58%] right-0"
            />
            <img
            src={BG5}
              className="BG top-[175rem]"
            />
            <img
            src={BG6}
              className="BG top-[185rem] right-0"
            />
            <h3 className="heading1">CO-SPONSOR</h3>
            <div className="columns-1 my-[20px] w-1/2 m-[auto] sm:columns-2">
              <img
                src={Nisarga}
                className="border-solid border-2 border-[#FED395] my-[45px]"
              />
              <img
                src={Honeywell}
                // style={{
                //   width: "30vw",
                //   height: "150px",
                //   margin: "auto",
                //   border: "2px solid #FED395 ",
                // }}
                className="border-solid border-2 border-[#FED395] my-[20px]"
              />
            </div>
            <h4 className="heading1">SPONSORS</h4>
            <div className="SponCards">
              {Sponsor2021.map((item) => (
                <SponsorCard
                  style={{
                    width: "35vw",
                  }}
                  Role={item.Role ? item.Role : "Partner"}
                  Description={item.Description}
                  Image={item.Image}
                  Website={item.Website}
                  Facebook={item.Facebook}
                  Instagram={item.Instagram}
                  Twitter={item.Twitter}
                  Linkedin={item.Linkedin}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div style={{ zIndex: "1" }}>
          <div>
            <h1 className="heading1">TITLE SPONSOR 2020</h1>
            <img
              src={LandT}
              className="border-solid border-2 border-[#FED395] m-[auto] w-[50vw]"
            />
            <img
              src={BG1}
              className="BG top-[20%]"
            />
            <img
              src={BG2}
              className="BG right-0 top-[22%]"
            />
            <img
              src={BG3}
              className="BG top-[70%]"
            />
            <img
            src={BG4}
              className="BG top-[75%] right-0"
            />
            <img
            src={BG5}
              className="BG top-[190rem]"
            />
            <img
            src={BG6}
              className="BG top-[185rem] right-0"
            />
            
            <h4 className="heading1">SPONSORS</h4>
            <div className="SponCards">
              {Sponsor2020.map((item) => (
                <SponsorCard
                  style={{
                    width: "35vw",
                  }}
                  Role={item.Role ? item.Role : "Partner"}
                  Description={item.Description}
                  Image={item.Image}
                  Website={item.Website}
                  Facebook={item.Facebook}
                  Instagram={item.Instagram}
                  Twitter={item.Twitter}
                  Linkedin={item.Linkedin}
                />
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Sponsors;
