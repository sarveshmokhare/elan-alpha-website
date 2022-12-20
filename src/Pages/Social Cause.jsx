import React, {useEffect} from "react";
import gsap from "gsap";
import "../styles/SocialCause.css";
import { useState, Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SC1 from "../assets/Social Cause Images/social_cause1.jpeg";
import SC2 from "../assets/Social Cause Images/social_cause2.jpeg";
import SC3 from "../assets/Social Cause Images/social_cause3.jpeg";
function SocialCause() {
  useEffect(() => {
    const ctx = gsap.context(() => {

    })
    gsap.set(
      document.querySelector("header"),
      { opacity: 1, }
    );

    return () => { ctx.revert(); }
  }, [])

  const [year, setIsYear] = useState(true);

  return (
    <div className="mt-[76px] lg:mt-0 bg-[#080f24] flex flex-col SocialCause ">
      <h1 className="main-heading1 sm-text-3xl m-4">Social Cause</h1>

      <div className="button">
        <button
          onClick={() => setIsYear(true)}
          className={year ? "years active" : "years"}
        >
          2023
        </button>
        <button
          onClick={() => setIsYear(false)}
          className={!year ? "years active" : "years"}
        >
          2022
        </button>
      </div>

      {year && (
        <div className="m-8">
          <h1 className="text-golden font-cinzel text-center text-xl vs:text-3xl xs:text-4xl font-bold">
            {" "}
            Stay Tuned for Updates
          </h1>
          <h2 className="text-white text-xl text-center">
            Follow our Social Media Handles to never miss updates
          </h2>
        </div>
      )}
      {!year && (
        <>
        <h1 className="font-berkshire text-center text-5xl text-golden m-2 ">HAUSLA</h1>
        <h2 className="text-3xl text-center text-golden m-2">Believe in Yourselves</h2>
        <div className="flex flex-wrap flex-row m-6">
          <div className="md:w-[30%] m-2 sm:w-[100%]">
            <Carousel>
              <img src={SC1} />
              <img src={SC2} />
              <img src={SC3} />
            </Carousel>
          </div>
          <div className="md:w-[60%] m-2 sm:w-[100%] ">
            <p className="text-white text-xl text-left">
              Flipping through the pages of a newspaper on a sunny Monday
              morning, an appalling word that makes it to the headlines everyday
              without fail is "Harassment". A whopping 400 thousand harassment
              cases are reported every year in India, while thousands of cases
              go unregistered. These enormous numbers are enough to send a chill
              down the spine. Unfortunately, the efforts put into breaking the
              back of this issue still fall short. To drain out this viciousness
              that's dissolved in our society, “Elan and nVision” presents the
              social cause theme "Hausla".
              <br />
              <br/> Through this portal, we aim to combat
              harassment by providing a safe and non-judgmental space to all
              those who have such traumatic experiences to share. Be it
              cyber-bullying, racism, physical or sexual harassment. We also
              assure 100% confidentiality and anonymity. Together, Let's fight
              against this evil with all guns blazing.
            </p>
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default SocialCause;
