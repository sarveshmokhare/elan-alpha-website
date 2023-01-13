import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/SocialCause.css";
import { useState, Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const SC1 =
  "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1671617294/Elan%20and%20NVision%202023/assets/Social%20Cause%20Images/social_cause1_vapbqv.jpg";
const SC2 =
  "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1671617294/Elan%20and%20NVision%202023/assets/Social%20Cause%20Images/social_cause2_kp7ftf.jpg";
const SC3 =
  "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1671617295/Elan%20and%20NVision%202023/assets/Social%20Cause%20Images/social_cause3_ykl5on.jpg";
const BG1 =
  "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1672836496/Elan%20and%20NVision%202023/assets/Social%20Cause%20Images/Group_199_bzq3q7.png";
const BG2 =
  "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1672830928/Elan%20and%20NVision%202023/assets/Social%20Cause%20Images/BG2_ynkz1o.svg";
const BG3 =
  "https://res.cloudinary.com/dq2ygjqtw/image/upload/v1672830857/Elan%20and%20NVision%202023/assets/Social%20Cause%20Images/BG3_u6s9re.svg";
function SocialCause() {
  useEffect(() => {
    const ctx = gsap.context(() => {});
    gsap.set(document.querySelector("header"), { opacity: 1 });

    return () => {
      ctx.revert();
    };
  }, []);

  const [year, setIsYear] = useState(true);

  return (
    <div className="mt-[76px] lg:mt-0 bg-[#080f24] flex flex-col SocialCause ">
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-1/2 sm:w-full ml-4">
          <h1 className="main-heading1">Social Cause</h1>
        </div>

        <div className="button lg:w-1/2 sm:w-full ">
          <button
            onClick={() => setIsYear(true)}
            className={year ? "years active rounded-lg" : "years rounded-lg"}
          >
            <h3 className="px-16 py-2">2023</h3>
          </button>
          <button
            onClick={() => setIsYear(false)}
            className={!year ? "years active rounded-lg" : "years rounded-lg"}
          >
            <h3 className="px-16 py-2">2022</h3>
          </button>
        </div>
      </div>

      {year && (
        <div className="" >
          <h1 className="back relative font-berkshire text-white text-5xl lg:text-9xl md:text-7xl text-left ml-[9%] mt-4">
            Animal Welfare
          </h1>
          <div  className="flex justify-center mt-[-8%]">
          <img src={BG1} className="Bg" />
          </div>
          <img src={BG2} className="absolute lg:mt-[-27%] Bg" />
          <img src={BG3} className="absolute lg:mt-[-60%] Bg right-0 " />
          
          <div className="bg-white font-century mb-4 mx-8 p-6 text-xl md:text-3xl back relative">
            <p className="text-black first-letter:text-5xl">
            In Anatole France's words, “Until one has loved an animal, a part of one's soul remains unawakened.” Animals play an essential role in human life and planet earth. They are the planet's most vulnerable inhabitants, so they deserve our most robust support and the right to enjoy life and liberty. The term “Ikshana” means caring for or looking after and can be applied to any living creature. 


              <br/>
              <br/>
              The shocking number of animal cruelty cases reported daily is just the tip of the iceberg—most cases are never reported. Unlike violent crimes against people, cases of animal abuse are not compiled, making it difficult to calculate just how common they are.
<br/>
              <br/> As a considerably evolved species, our job is to protect what is essential and maintain the world's balance. This year Elan & nVision aims to increase awareness about animal welfare among the people through Ikshana-Love animals. Stay tuned for further updates.
            </p>
            <p className="text-center text-3xl md:text-5xl p-2 md:p-8 font-semibold">
            They deserve our <span className="text-[#009329]">strongest support</span> and are <br/> entitled for the <span className="text-[#009329]" >right to enjoy life</span> and <span className="text-[#009329]">liberty.</span>
            </p>
          </div>
          
        </div>
      )}
      {!year && (
        <>
          <h1 className="font-berkshire text-center text-5xl text-golden m-2 ">
            HAUSLA
          </h1>
          <h2 className="text-3xl text-center text-golden m-2">
            Believe in Yourselves
          </h2>
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
                morning, an appalling word that makes it to the headlines
                everyday without fail is "Harassment". A whopping 400 thousand
                harassment cases are reported every year in India, while
                thousands of cases go unregistered. These enormous numbers are
                enough to send a chill down the spine. Unfortunately, the
                efforts put into breaking the back of this issue still fall
                short. To drain out this viciousness that's dissolved in our
                society, “Elan and nVision” presents the social cause theme
                "Hausla".
                <br />
                <br /> Through this portal, we aim to combat harassment by
                providing a safe and non-judgmental space to all those who have
                such traumatic experiences to share. Be it cyber-bullying,
                racism, physical or sexual harassment. We also assure 100%
                confidentiality and anonymity. Together, Let's fight against
                this evil with all guns blazing.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SocialCause;
