import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import ThemeContext from "../Contexts/ThemeContext";
import elanLogo from "../assets/logo_white.png";
import caPortalIcon from "../assets/ca_portal_icon.svg";
import valenrowIcon from "../assets/valenrow_icon.svg";
import sec1BottomGraphics from "../assets/moon_line_rings.svg";
import book from "../assets/book.svg";
import aboutLeft from "../assets/about_left.svg";
import aboutRight from "../assets/about_right.svg";
import valenrowLogo from "../assets/valenrow_logo.svg";
import sec1DecorLeft from "../assets/sec1_decor_left.svg";
import sec1BottomGraphicsLarge from "../assets/moon_line_rings_large.svg";
import aboutTop from "../assets/about_top.svg";
import aboutBtmR from "../assets/about_bottom_right.svg";
import aboutBtmC from "../assets/about_bottom_center.svg";
import aboutBtmL from "../assets/about_bottom_left.svg";
import aboutBtmLMob from "../assets/about_bottom_left_mobile.svg";
import aboutBtmRMob from "../assets/about_bottom_right_mobile.svg";
import timelineJug from "../assets/timeline_jug.svg";
import timelineBtm from "../assets/timeline_btm.svg";
import exploreBg from "../assets/explore.svg";
import galleryBg from "../assets/gallery.svg";
import galleryBtmBg from "../assets/gallery_btm.svg";
import statsBg from "../assets/stats.svg";
import Header from "../Components/Header";
import inviteText from "../assets/invite_text.svg";
import fullMoon from "../assets/moon_full.svg";
import cresentRight from "../assets/cresent_right.svg";
import halfMoon from "../assets/moon_half.svg";
import cresentLeft from "../assets/cresent_left.svg";
import topLine from "../assets/top_line.svg";
import sampleVid from "../assets/video.mp4";
import Card from "../Components/ExploreCard";

function HomePage() {
  const timelineImgs = [
    "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
    "https://media.istockphoto.com/id/490736905/photo/meenakshi-hindu-temple-in-madurai-tamil-nadu-south-india.jpg?s=612x612&w=0&k=20&c=OlOLvdryIdkdyKcY9gRPsM1RZa5HiP6QBr2JVAIvPb0=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcB9pt3Tasegrjl6637LB1iJqCND1jp2oLA&usqp=CAU",
    "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
    "https://bd.gaadicdn.com/processedimages/royal-enfield/classic350/source/classic350612f277880878.jpg",
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
    "https://wallup.net/wp-content/uploads/2016/01/288160-space-universe-stars-Milky_Way.jpg",
    "https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?b=1&s=170667a&w=0&k=20&c=qha_PaU54cu9QCu1UTlORP4-sW0MqLGERkdFKmC06lI=",
    "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
  ];

  const exploreBtnRef = useRef(null);
  const timelineRef = useRef(null);
  const timelineParentRef = useRef(null);
  const exploreRef = useRef(null);
  const section1 = useRef(null);
  const pt1Ref = useRef(null);
  const pt2Ref = useRef(null);
  const pt3Ref = useRef(null);
  const pt4Ref = useRef(null);
  const pt5Ref = useRef(null);
  const pt6Ref = useRef(null);
  const highlightedCircleRef = useRef(null);
  const scrollDivRef = useRef(null);
  // timeline scrollable div sections
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);
  const sec4Ref = useRef(null);
  const sec5Ref = useRef(null);
  const sec6Ref = useRef(null);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const ctx = gsap.context(() => {
      // master timeline
      const masterTl = gsap.timeline({
        onComplete: () => (document.body.style.overflowY = "scroll"),
      });

      // constant rotation animation
      const rotationTl = gsap.timeline({
        defaults: {
          rotation: 360,
          repeat: Infinity,
          repeatDelay: 0,
          ease: "none",
        },
      });
      rotationTl.to(".moon3", { duration: 4 });
      rotationTl.to(".moon2", { duration: 2 }, "-=3");
      rotationTl.to(".moon4", { duration: 2 }, "-=2");

      // moons moving to right timeline
      function moonsTl() {
        const movementTl = gsap.timeline({
          default: { ease: "power3.out" },
          autoRemoveChildren: true,
          delay: 2,
          onComplete: () => rotationTl.pause(),
        });

        movementTl.to(".moon1", {
          right: "-7%",
          duration: 1.75,
        });
        movementTl.to(
          ".moon5",
          {
            right: "-7%",
            duration: 2.25,
          },
          "-=1.5"
        );
        movementTl.to(
          ".moon2",
          {
            right: "-7%",
            duration: 2.25,
          },
          "-=2"
        );
        movementTl.to(
          ".moon4",
          {
            right: "-7%",
            duration: 2.25,
          },
          "-=2.5"
        );
        movementTl.to(
          ".moon3",
          {
            right: "-10%",
            duration: 1.25,
            delay: 0.2,
          },
          "-=1.75"
        );
        movementTl.timeScale(1.8);

        return movementTl;
      }

      masterTl.add(moonsTl());

      function logoTl() {
        const tl = gsap.timeline({ defaults: {} });

        tl.to(".invite-text", { top: "55%", height: "18vh", duration: 1 });
        tl.to(".elan-logo", { height: "13vh", top: "38%", duration: 1 }, "<");
        tl.to(".left-decor", { height: "65vh", top: "4%" }, "<");
        tl.to(".top-line", { right: "-100%", duration: 2 }, "<");
        tl.fromTo(
          document.querySelector("header"),
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "<"
        );
        tl.to(".invite-text", { opacity: 0, duration: 1 });
        tl.to(".valenrow-logo", { opacity: 1, duration: 1 }, "<+0.8");
        tl.to(".buttons>*", { opacity: 1, stagger: 0.5 }).to(section1.current, {
          background: "rgb(8, 15, 36, 0.1)",
          duration: 6,
          ease: "power2.inOut",
        });

        return tl;
      }
      masterTl.add(logoTl());

      // scroll animation for timeline section
      gsap.to(".scroll-div", {
        scrollTrigger: {
          trigger: ".timeline-div",
          // markers: true,
          start: "33% 50%",
          scrub: true,
          pin: ".giant-div",
        },
        scrollTo: "max",
      });
    });

    return () => {
      ctx.revert();
      document.body.style.overflowY = "scroll";
    }; // cleanup!
  }, []);

  const [highlightedCircleYPos, sethighlightedCircleYPos] = useState(20);

  // set scrollable div's scroll position in sync with the highlighted circle
  // doing two things in here: 1. on clicking a point, highlighted circle moves to that point
  // 2. scrollable div's scroll position moves to corresponding image
  function ptClickHandler(e) {
    const pointNum = Number(e.target.getAttribute("pointnum"));

    switch (pointNum) {
      case 1:
        scrollDivRef.current.scrollTop = sec1Ref.current.offsetTop;
        sethighlightedCircleYPos(pt1Ref.current.cy.baseVal.value);
        break;
      case 2:
        scrollDivRef.current.scrollTop = sec2Ref.current.offsetTop;
        sethighlightedCircleYPos(pt2Ref.current.cy.baseVal.value);
        break;
      case 3:
        scrollDivRef.current.scrollTop = sec3Ref.current.offsetTop;
        sethighlightedCircleYPos(pt3Ref.current.cy.baseVal.value);
        break;
      case 4:
        scrollDivRef.current.scrollTop = sec4Ref.current.offsetTop;
        sethighlightedCircleYPos(pt4Ref.current.cy.baseVal.value);
        break;
      case 5:
        scrollDivRef.current.scrollTop = sec5Ref.current.offsetTop;
        sethighlightedCircleYPos(pt5Ref.current.cy.baseVal.value);
        break;
      case 6:
        scrollDivRef.current.scrollTop = sec6Ref.current.offsetTop;
        sethighlightedCircleYPos(pt6Ref.current.cy.baseVal.value);
        break;
    }
  }

  // set circle position in sync with the scrollable div's scroll distance
  function scrollHandler(e) {
    const scrollTopVal = e.target.scrollTop;
    const scrollDivHeight = e.target.offsetHeight;
    const heightFraction = 0.3;
    const removedHeight = heightFraction * scrollDivHeight;

    if (scrollTopVal <= sec2Ref.current.offsetTop - removedHeight)
      sethighlightedCircleYPos(pt1Ref.current.cy.baseVal.value);
    else if (
      scrollTopVal > sec2Ref.current.offsetTop - removedHeight &&
      scrollTopVal <= sec3Ref.current.offsetTop - removedHeight
    )
      sethighlightedCircleYPos(pt2Ref.current.cy.baseVal.value);
    else if (
      scrollTopVal > sec3Ref.current.offsetTop - removedHeight &&
      scrollTopVal <= sec4Ref.current.offsetTop - removedHeight
    )
      sethighlightedCircleYPos(pt3Ref.current.cy.baseVal.value);
    else if (
      scrollTopVal > sec4Ref.current.offsetTop - removedHeight &&
      scrollTopVal <= sec5Ref.current.offsetTop - removedHeight
    )
      sethighlightedCircleYPos(pt4Ref.current.cy.baseVal.value);
    else if (
      scrollTopVal > sec5Ref.current.offsetTop - removedHeight &&
      scrollTopVal <= sec6Ref.current.offsetTop - removedHeight
    )
      sethighlightedCircleYPos(pt5Ref.current.cy.baseVal.value);
    else if (scrollTopVal > sec6Ref.current.offsetTop - removedHeight)
      sethighlightedCircleYPos(pt6Ref.current.cy.baseVal.value);
  }

  return (
    <div>
      <div className="giant-div">
        {/* Intro section */}
        <div
          ref={section1}
          className="bg-black text-white font-cinzel font-bold h-[40vh] sm:h-[90vh] relative"
        >
          {/* top decor line */}
          <div className="top-line absolute top-0 right-[7%] w-[68vw]">
            <img className="h-[40%]" alt="decor" src={topLine}></img>
          </div>

          {/* left decoration */}
          <div className="left-decor hidden sm:block absolute h-[50vh] lg:h-[75vh] left-3.5 top-0">
            <img className="h-full" src={sec1DecorLeft} />
          </div>

          {/* right animating moon */}
          <div className="moon1 absolute h-[3vh] md:h-[4vh] lg:h-[4vh] right-[8%] top-[-10%] md:top-[10%] lg:top-[10%]">
            <img className="h-full" src={fullMoon}></img>
          </div>

          <div className="moon2 absolute h-[5vh] md:h-[7vh] lg:h-[8vh] right-[7%] top-[8%] md:top-[23%] lg:top-[20%]">
            <img className="h-full" src={cresentRight}></img>
          </div>

          <div className="moon3 absolute h-[9vh] md:h-[11vh] lg:h-[14vh] right-[5.5%] top-[30%] md:top-[39%] lg:top-[37%]">
            <img className="h-full" src={halfMoon}></img>
          </div>

          <div className="moon4 absolute h-[5vh] md:h-[7vh] lg:h-[8vh] right-[7%] top-[65%] md:top-[62%] lg:top-[63%]">
            <img className="h-full" src={cresentLeft}></img>
          </div>

          <div className="moon5 absolute h-[3vh] md:h-[4vh] lg:h-[4vh] right-[8%] top-[85%] lg:top-[80%]">
            <img className="h-full" src={fullMoon}></img>
          </div>

          {/* elan and valenrow logos */}
          <div className="elan-logo pb-5 h-[10vh] md:h-[14vh] lg:h-[16vh] absolute right-0 left-0 flex justify-center top-[10%] md:top-[20%] lg:top-[18%]">
            <img className="h-full" alt="elan_logo" src={elanLogo} />
          </div>

          <div className="invite-text h-[7vh] md:h-[17vh] lg:h-[22vh] absolute right-0 left-0 flex justify-center top-[37%]">
            <img className="h-full" alt="elan_text" src={inviteText}></img>
          </div>

          <div className="valenrow-logo opacity-0 py-3 lg:py-6 sm:px-8 sm:h-[26vh] absolute right-0 left-0 flex justify-center top-[50%]">
            <img className="h-full" alt="valenrow_logo" src={valenrowLogo} />
          </div>

          {/* buttons div */}
          <div className="buttons flex flex-col items-center text-[2.6vh] lg:text-[3.7vh] lg:absolute right-28 top-20">
            <button className="opacity-0 flex items-center justify-center bg-[#AD002A] text-golden py-4 lg:py-9 px-8 lg:px-12 rounded-lg my-4 lg:h-[10vh] w-[52vw] md:w-[38vw] lg:w-[15.5vw]">
              <a href="/">
                <div>Merch</div>
              </a>
            </button>

            <button className="opacity-0 bg-green px-1 rounded-lg my-4 w-[52vw] md:w-[38vw] lg:w-[15.5vw] h-[8vh] lg:h-[10vh]">
              <a
                className="flex items-center justify-evenly"
                href="https://ca.elan.org.in"
                target="_blank"
              >
                <img src={caPortalIcon} className="w-1/6" alt="icon" />
                <div className="lg:text-xl">CA Portal</div>
              </a>
            </button>

            <button className="opacity-0 flex items-center justify-evenly text-center bg-yellow p-3 rounded-[40px] h-[10vh] lg:h-[11vh] w-[55vw] md:w-[38vw] lg:w-[16vw] my-4 relative">
              <div className="h-[22vh] md:h-[25vh] lg:h-[26vh] pt-3 md:pt-4 lg:pt-3">
                <img src={valenrowIcon} className="h-full" alt="icon" />
              </div>

              <div
                className="text-xl md:text-3xl lg:text-lg"
                ref={exploreBtnRef}
              >
                Explore Valenrow
              </div>
            </button>
          </div>

          {/* bottom graphic */}
          <div className="sm:hidden flex items-center justify-center absolute bottom-[5%] left-0 right-0">
            <img src={sec1BottomGraphics} alt="graphic" />
          </div>

          {/* large moon line graphics */}
          <div className="hidden sm:flex items-center justify-center w-[100vw] absolute bottom-[1%] h-24 px-20  lg:pb-14">
            <img className="w-full" src={sec1BottomGraphicsLarge} />
          </div>

          <video
            autoPlay
            loop
            muted
            className="w-full h-full absolute -z-10 object-cover top-0"
          >
            <source src={sampleVid} type="video/mp4" />
          </video>
        </div>

        {/* About Us */}
        <div className="text-golden py-8 lg:pt-20 border-y-2 border-golden relative">
          <div className="flex justify-evenly sm:justify-around sm:px-20">
            <img className="w-[12vw]" alt="graphic" src={aboutLeft} />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-cinzel font-bold z-10">
              About Us
            </h1>
            <img className="w-[12vw]" alt="graphic" src={aboutRight} />
          </div>

          <div className="flex p-6 md:pl-10 lg:p-20 pb-0 items-center text-base md:text-2xl">
            <div>
              <p>
                Elan and ηVision is the annual techno-cultural fest of IIT
                Hyderabad and is one of the largest fests in South India. It is
                entirely organized by IITH students.
              </p>
              {/* 2nd para for desktops */}
              <p className="hidden lg:block relative z-10">
                Elan refers to the cultural part and ηVision cites the
                technological part of the fest. This festival features several
                professional and semi-professional crowd-pulling events and
                promises to be a grand event showcasing the best of cultural
                performances, technical solutions, and student community
                advances 2022
              </p>
            </div>
            <img
              className="h-[12vh] lg:h-[26vh] pl-5 lg:pl-20 lg:pr-28 md:mb-10"
              alt="book"
              src={book}
            />
          </div>
          {/* 2nd para for mobiles */}
          <p className="px-6 pt-0 md:pl-10 md:text-2xl lg:hidden relative z-10">
            Elan refers to the cultural part and ηVision cites the technological
            part of the fest.This festival features several professional and
            semi-professional crowd-pulling events and promises to be a grand
            event showcasing the best of cultural performances, technical
            solutions, and student community advances 2022
          </p>

          {/* bg graphics */}
          {/* desktop */}
          <div className="hidden lg:block absolute top-0 left-[22%] h-[28%]">
            <img src={aboutTop} className="h-full"></img>
          </div>
          <div className="hidden lg:block absolute bottom-0 left-[1%] h-[30%]">
            <img src={aboutBtmL} className="h-full"></img>
          </div>
          <div className="hidden lg:block absolute bottom-0 left-[36%] h-[25%]">
            <img src={aboutBtmC} className="h-full"></img>
          </div>
          <div className="hidden lg:block absolute bottom-0 right-[1%] h-[33%]">
            <img src={aboutBtmR} className="h-full"></img>
          </div>
          {/* mobile */}
          <div className="lg:hidden absolute -bottom-[10%] left-0 h-[45%]">
            <img src={aboutBtmLMob} className="h-full"></img>
          </div>
          <div className="lg:hidden absolute -bottom-[10%] right-0 h-[45%]">
            <img src={aboutBtmRMob} className="h-full"></img>
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={timelineParentRef}
          className="text-golden py-10 lg:px-16 lg:text-xl relative"
        >
          {/* background imgs */}
          <div className="absolute h-[40%] top-0 right-0">
            <img className="h-full relative" src={timelineJug}></img>
          </div>
          <div className="absolute h-[75%] left-0 -bottom-[40%]">
            <img className="h-full" src={timelineBtm}></img>
          </div>
          <h1 className="font-berkshire text-5xl lg:text-8xl px-10 lg:px-0 relative z-20">
            Timeline
          </h1>

          <div
            ref={timelineRef}
            className="timeline-div flex pt-11 items-center justify-evenly relative z-20"
          >
            <div className="">
              <svg width="100" height="250">
                <line
                  x1={29}
                  y1={20}
                  x2={29}
                  y2={220}
                  stroke="#FED395"
                  strokeWidth={1}
                />
                {/* circles and corresponding years  */}
                <circle
                  className="cursor-pointer"
                  ref={pt1Ref}
                  pointnum={1}
                  onClick={ptClickHandler}
                  cx={29}
                  cy={20}
                  r="0.8vh"
                  fill="white"
                  stroke="#FED395"
                />
                <text x={55} y={25} fill="#FED395">
                  2017
                </text>

                <circle
                  className="cursor-pointer"
                  ref={pt2Ref}
                  pointnum={2}
                  onClick={ptClickHandler}
                  cx={29}
                  cy={60}
                  r="0.8vh"
                  fill="white"
                  stroke="#FED395"
                />
                <text x={55} y={65} fill="#FED395">
                  2018
                </text>

                <circle
                  className="cursor-pointer"
                  ref={pt3Ref}
                  pointnum={3}
                  onClick={ptClickHandler}
                  cx={29}
                  cy={100}
                  r="0.8vh"
                  fill="white"
                  stroke="#FED395"
                />
                <text x={55} y={105} fill="#FED395">
                  2019
                </text>

                <circle
                  className="cursor-pointer"
                  ref={pt4Ref}
                  pointnum={4}
                  onClick={ptClickHandler}
                  cx={29}
                  cy={140}
                  r="0.8vh"
                  fill="white"
                  stroke="#FED395"
                />
                <text x={55} y={145} fill="#FED395">
                  2020
                </text>

                <circle
                  className="cursor-pointer"
                  ref={pt5Ref}
                  pointnum={5}
                  onClick={ptClickHandler}
                  cx={29}
                  cy={180}
                  r="0.8vh"
                  fill="white"
                  stroke="#FED395"
                />
                <text x={55} y={185} fill="#FED395">
                  2021
                </text>

                <circle
                  className="cursor-pointer"
                  ref={pt6Ref}
                  pointnum={6}
                  onClick={ptClickHandler}
                  cx={29}
                  cy={220}
                  r="0.8vh"
                  fill="white"
                  stroke="#FED395"
                />
                <text x={55} y={225} fill="#FED395">
                  2022
                </text>

                {/* highlighted circle */}
                <circle
                  ref={highlightedCircleRef}
                  cx={29}
                  cy={highlightedCircleYPos}
                  r="0.8vh"
                  fill="#FED395"
                />
              </svg>
            </div>

            <div
              onScroll={scrollHandler}
              ref={scrollDivRef}
              className="scroll-div bg-white h-[40vh] lg:h-[60vh] w-[50vw] lg:w-[40vw] overflow-y-auto relative flex flex-wrap justify-center"
            >
              {timelineImgs.map((img, ind) => {
                let currRef;
                switch (ind / 4) {
                  case 0:
                    currRef = sec1Ref;
                    break;
                  case 1:
                    currRef = sec2Ref;
                    break;
                  case 2:
                    currRef = sec3Ref;
                    break;
                  case 3:
                    currRef = sec4Ref;
                    break;
                  case 4:
                    currRef = sec5Ref;
                    break;
                  case 5:
                    currRef = sec6Ref;
                    break;
                }
                return (
                  <div
                    key={ind}
                    ref={currRef}
                    className="p-3 flex justify-center h-1/2 lg:w-1/2"
                  >
                    <img className="h-full" src={img} />
                  </div>
                );
              })}

              {/* <div ref={firstImgRef} className='p-3 flex justify-center h-1/2 w-1/2'><img className='h-full' src='https://bd.gaadicdn.com/processedimages/royal-enfield/classic350/source/classic350612f277880878.jpg' /></div>

              <div ref={secondImgRef} className='p-3 flex justify-center h-1/2 w-1/2'><img className='h-full' src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg' /></div>

              <div ref={thirdImgRef} className='p-3 flex justify-center  h-1/2 w-1/2'><img className='h-full' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' /></div>

              <div ref={fourthImgRef} className='p-3 flex justify-center  h-1/2 w-1/2'><img className='h-full' src='https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg' /></div>

              <div ref={fifthImgRef} className='p-3 flex justify-center  h-1/2 w-1/2'><img className='h-full' src='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg' /></div>

              <div ref={sixthImgRef} className='p-3 flex justify-center  h-1/2 w-1/2'><img className='h-full' src='https://wallup.net/wp-content/uploads/2016/01/288160-space-universe-stars-Milky_Way.jpg' /></div>

              <div ref={firstImgRef} className='p-3 flex justify-center  h-1/2 w-1/2'><img className='h-full' src='https://bd.gaadicdn.com/processedimages/royal-enfield/classic350/source/classic350612f277880878.jpg' /></div>
         */}
            </div>
          </div>
        </div>

        {/* Explore */}
        <div
          ref={exploreRef}
          className="text-golden py-10 lg:px-16 box-content h-[30vh] lg:h-[60vh] relative"
        >
          {/* bg images */}
          <div className="absolute h-[55%] right-0 bottom-[10%]">
            <img className="h-full" src={exploreBg}></img>
          </div>

          <h1 className="font-berkshire text-5xl lg:text-8xl px-10 lg:px-0 relative">
            Explore
          </h1>
          <div className="flex">
            <Card title="Example" />
          </div>
        </div>

        {/* Gallery */}
        <div className="text-golden py-10 lg:px-16 box-content relative h-[40vh] lg:h-[80vh]">
          {/* bg images */}
          <div className="absolute h-[85%] left-0 top-[10%]">
            <img className="h-full" src={galleryBg}></img>
          </div>
          <div className="absolute h-[70%] right-0 -bottom-[20%]">
            <img className="h-full" src={galleryBtmBg}></img>
          </div>

          <h1 className="font-berkshire text-5xl lg:text-8xl px-10 lg:px-0 relative">
            Gallery
          </h1>
        </div>

        {/* Stats */}
        <div className="text-golden py-10 lg:px-16 box-content relative h-[30vh] lg:h-[70vh]">
          {/* bg images */}
          <div className="absolute h-[85%] left-0 top-[5%]">
            <img className="h-full" src={statsBg}></img>
          </div>

          <h1 className="font-berkshire text-5xl lg:text-8xl px-10 lg:px-0 relative">
            Stats
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
