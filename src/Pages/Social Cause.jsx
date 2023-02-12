import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/SocialCause.css";
import { useState, Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SC1 from "../assets/Social Cause/social_cause1_vapbqv.jpg";
import SC2 from "../assets/Social Cause/social_cause2_kp7ftf.jpg";
import SC3 from "../assets/Social Cause/social_cause3_ykl5on.jpg";
import BG1 from "../assets/Social Cause/Group_199_bzq3q7.png";
import BG2 from "../assets/Social Cause/BG2_ynkz1o.svg";
import BG3 from "../assets/Social Cause/BG3_u6s9re.svg";
import BG from "../assets/Social Cause/IMG_6140.jpg";
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
        <div className="">
          <h1 className="back relative font-berkshire text-white text-5xl lg:text-9xl md:text-7xl text-left ml-[9%] mt-4">
            Animal Welfare
          </h1>
          <div className="flex justify-center mt-[-8%]">
            <img src={BG1} className="Bg" />
          </div>
          <img src={BG2} className="absolute lg:mt-[-27%] Bg" />
          <img src={BG3} className="absolute lg:mt-[-60%] Bg right-0 " />

          <div className="bg-white font-century mb-4 mx-8 p-6 text-xl md:text-3xl back relative">
            <p className="text-black first-letter:text-5xl">
              In Anatole France's words, “Until one has loved an animal, a part
              of one's soul remains unawakened.” Animals play an essential role
              in human life and planet earth. They are the planet's most
              vulnerable inhabitants, so they deserve our most robust support
              and the right to enjoy life and liberty. The term “Ikshana” means
              caring for or looking after and can be applied to any living
              creature.
              <br />
              <br />
              The shocking number of animal cruelty cases reported daily is just
              the tip of the iceberg—most cases are never reported. Unlike
              violent crimes against people, cases of animal abuse are not
              compiled, making it difficult to calculate just how common they
              are.
              <br />
              <br /> As a considerably evolved species, our job is to protect
              what is essential and maintain the world's balance. This year Elan
              & nVision aims to increase awareness about animal welfare among
              the people through Ikshana-Love animals. Stay tuned for further
              updates.
            </p>
            <p className="text-center text-3xl md:text-5xl p-2 md:p-8 font-semibold">
              They deserve our{" "}
              <span className="text-[#009329]">strongest support</span> and are{" "}
              <br /> entitled for the{" "}
              <span className="text-[#009329]">right to enjoy life</span> and{" "}
              <span className="text-[#009329]">liberty.</span>
            </p>
          </div>
          <h1 className="back relative font-berkshire text-white text-4xl md:text-5xl text-center ">SPEAKER</h1>
          <div className="flex flex-wrap flex-row m-6">
            <img src={BG} className=" md:m-4  rounded-lg w-full md:w-1/5" />
            <div className="  m-2 bg-white font-century mb-4  p-6 text-xl md:text-4xl w-auto md:w-3/4">
            <br/>
              <h2 className="font-bold text-5xl">
                The 'ABC' of caring for Streeties
              </h2>
              
              <br />
              <h3 className="italic">
                Blue Cross-Hyderabad chairperson Amala Akkineni speaks to CE
                about her latest initiative on Animal Birth Control Programme
                (ABC) and rabies prevention, how societies can control the
                'street dog menace' and her connection with nature.
              </h3>

              <br />
            </div>
            <div className="  m-2 bg-white font-century mb-4  p-6 text-lg md:text-2xl w-auto">
              <p className="text-black first-letter:text-5xl">
                For most of us, the dogs on the street are strays, pariahs and
                sometimes even a menace. But, for Amala Akkineni they are
                community animals. Her connection with nature goes back to when
                she was a child.
                <br /> "Some of us are born like that. We wake up with a very
                special moment that connects us with animals and nature. Some of
                my earliest memories I have are of animal friends that I had
                as a child. I never realised that I could actually help them
                until I saw a dog suffering. I did not know what to do, I just
                picked it up and took it home. Lucky for me, I had a mother who
                did not object. She simply rolled her eyes and took a deep
                breath. She realised that she has got a daughter, who has got
                this connection with animals," says Amala. <br />
                Today, as the chairperson of Blue Cross, Hyderabad, she is
                taking her affection towards animals a step further by backing
                an Animal Birth Control (ABC) Programme and rabies prevention
                rally. In collaboration with India Project for Animals and
                Nature (IPAN), a registered charity based in the Nilgiris, Tamil
                Nadu, Blue Cross will train local veterinari- ans and make the
                people aware about rabies control and humane dog population
                management. It will also host a vehicle rally and event on
                Saturday for this. The initiative is backed with state-of-
                the-art technology - a Mercedes Zetros truck, to be flagged off
                on Saturday from Jubilee Hills Road No. 35, will travel across
                the country. It will Blue Cross will implement it too. That
                would have a better reach than just promoting something. I have
                nothing against social media. But you need to do your bit
                physically, too, for the community," she says. Speaking about
                why she refers to strays as community animals, she says, most
                dogs on the street are because of the garbage strewn around, an
                eatery located in the vicinity or there's someone feeding them -
                they have a constant food source. "In most cities, you'll find
                these docile dogs sitting by a street or the steps of a bank.
                People will pet them, sometimes feed them. This is the dog I
                grew up with. When I walk my dogs, there are three community
                dogs who tag along. They know who's their friend, they chase off
                other dogs train local vets and make people aware about rabies
                control & dog population management be staffed by In- dian-led
                teams of vets and paravets, who will travel to cities to spread
                the word and work at the grassroots level. The initiative is
                also being supported by Asia For Animals. <br />
                While, Amala can't wait for this initiative to come to fruition,
                she wishes that more people step out of their homes and work
                towards providing a safer and healthier environment for
                animals. "Whatever you say on social media, you need to go out
                on the streets and and escort us back home. That's the dog we
                are referring to when we say community animals," she says.
                Amala makes sure that when she vaccinates her pets, their
                community friends gets their annual shots too. She says that's
                a brilliant way to address the so-called 'menace'.
              </p>
            </div>
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
