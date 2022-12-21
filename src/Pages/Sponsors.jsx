import React, { useContext, useState, useEffect } from "react";
import gsap from "gsap";
import SponsorCard from "../Components/SponsorCard";
import ThemeContext from "../Contexts/ThemeContext";
import "../styles/sponsors.css";
// 2021 sponsors
const Hero = "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1671617307/Elan%20and%20NVision%202023/assets/SponsorImages/Sponsor2021/Static_Perimeter_Board_15_x_3ft-01_qassni.png";

const Nisarga = "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1671617305/Elan%20and%20NVision%202023/assets/SponsorImages/Sponsor2021/Nisarga_Logo_cujflh.png";
import {
  Sponsor2022,
  Sponsor2020,
  Sponsor2021,
} from "../Components/SponsorData";
// 2020 sponsors

// background images
const BG1 = "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1671617380/Elan%20and%20NVision%202023/assets/SponsorBackground/2_576_axuuoo.svg";
const BG2 = "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1671617351/Elan%20and%20NVision%202023/assets/SponsorBackground/5_1_i7aeuc.svg";
const BG3 = "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1671617350/Elan%20and%20NVision%202023/assets/SponsorBackground/5_2_na0ntz.svg";
const BG4 = "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1671617382/Elan%20and%20NVision%202023/assets/SponsorBackground/2_577_wytpl3.svg";
const BG5 = "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1671617383/Elan%20and%20NVision%202023/assets/SponsorBackground/2_578_smvfsy.svg";
const BG6 = "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1671617349/Elan%20and%20NVision%202023/assets/SponsorBackground/5_3_xpteb0.svg";

function Sponsors() {
  useEffect(() => {
    const ctx = gsap.context(() => {

    })
    gsap.set(
      document.querySelector("header"),
      { opacity: 1, }
    );

    return () => { ctx.revert(); }
  }, [])

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
        <h1 className="text-center text-[#fed395] text-[1.5rem] font-bold mt-4">Previous Year Sponsors - 2022</h1>
          <h1 className="heading1">TITLE SPONSOR</h1>
          <img
            src={Hero}
            className=" m-[auto] w-[50vw] bg-[#fff]"
          />
          <img src={BG1} className="BG top-[20%]" />
          <img src={BG2} className="BG right-0 top-[22%]" />
          <img src={BG3} className="BG top-[60%]" />
          <img src={BG4} className="BG top-[58%] right-0" />
          <img src={BG5} className="BG top-[161rem]" />
          <img src={BG6} className="BG top-[165rem] right-0" />
          <h3 className="heading1">CO-TITLE SPONSOR</h3>
          <img
              src={Nisarga}
              className="m-[auto] w-[50vw] bg-[#fff]"
            />
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
