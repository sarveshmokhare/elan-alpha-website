import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
} from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import AnimationContext from "../Contexts/AnimationContext";
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
import timeline2k171 from "../assets/timeline_images/2017/1.jpg";
import timeline2k172 from "../assets/timeline_images/2017/2.jpg";
import timeline2k173 from "../assets/timeline_images/2017/3.jpg";
import timeline2k174 from "../assets/timeline_images/2017/4.jpg";

import timeline2k181 from "../assets/timeline_images/2018/1.jpg";
import timeline2k182 from "../assets/timeline_images/2018/2.jpg";
import timeline2k183 from "../assets/timeline_images/2018/3.jpg";
import timeline2k184 from "../assets/timeline_images/2018/4.jpg";

import timeline2k191 from "../assets/timeline_images/2019/1.jpg";
import timeline2k192 from "../assets/timeline_images/2019/2.jpg";
import timeline2k193 from "../assets/timeline_images/2019/3.jpg";
import timeline2k194 from "../assets/timeline_images/2019/4.jpg";

import timeline2k201 from "../assets/timeline_images/2020/1.jpg";
import timeline2k202 from "../assets/timeline_images/2020/2.jpg";
import timeline2k203 from "../assets/timeline_images/2020/3.jpg";
import timeline2k204 from "../assets/timeline_images/2020/4.jpg";

import timeline2k211 from "../assets/timeline_images/2021/1.png";
import timeline2k212 from "../assets/timeline_images/2021/2.png";
import timeline2k213 from "../assets/timeline_images/2021/3.png";
import timeline2k214 from "../assets/timeline_images/2021/4.png";

import timeline2k221 from "../assets/timeline_images/2022/1.jpg";
import timeline2k222 from "../assets/timeline_images/2022/2.jpg";
import timeline2k223 from "../assets/timeline_images/2022/3.jpg";
import timeline2k224 from "../assets/timeline_images/2022/4.jpg";

import mobileDecorTop from "../assets/mobile_decor_top.svg";
import mobileDecorBottom from "../assets/mobile_decor_bottom.svg";
import moon from "../assets/moon.svg";
import btmLine from "../assets/bottom_line.svg";
import ringMoon from "../assets/ring_moon.svg";
import inviteTextMob from "../assets/invite_text_mobile.svg";
import audience from "../assets/audience.svg";
import hat from "../assets/hat.png";
import calender from "../assets/calender.png";
import insta from "../assets/insta.png";
import likes from "../assets/likes.png";
import threePeeps from "../assets/three_peeps.png";
import tweets from "../assets/tweets.svg";
import views from "../assets/views.svg";

import ExploreSlider from "../Components/ExploreSlider";
import GallerySlider from "../Components/GallerySlider";
import galImg1 from "../assets/gallery/1.png";
import galImg2 from "../assets/gallery/2.png";
import galImg4 from "../assets/gallery/4.jpg";
import galImg6 from "../assets/gallery/6.jpg";
import galImg7 from "../assets/gallery/7.jpg";
import galImg12 from "../assets/gallery/12.jpg";
import galImg13 from "../assets/gallery/13.jpg";
import galImg14 from "../assets/gallery/14.jpg";
import galImg15 from "../assets/gallery/15.jpg";
import galImg16 from "../assets/gallery/16.jpg";
import galImg17 from "../assets/gallery/17.jpg";
import galImg18 from "../assets/gallery/18.jpg";
import galImg19 from "../assets/gallery/19.jpg";
import galImg20 from "../assets/gallery/20.jpg";
import galImg21 from "../assets/gallery/21.jpg";
import galImg22 from "../assets/gallery/22.png";
import galImg23 from "../assets/gallery/23.jpg";
import explore1 from "../assets/explore_section/breakfree.webp";
import explore2 from "../assets/explore_section/glitz.webp";
import explore3 from "../assets/explore_section/pronites_1.jpg";
import explore4 from "../assets/explore_section/deepn.webp";
import explore5 from "../assets/explore_section/proshows.jpeg";
import explore6 from "../assets/explore_section/shipwreck.png";
import explore7 from "../assets/explore_section/campusidol.webp";

function HomePage() {
  const timelineImgs = [
    timeline2k171,
    timeline2k172,
    timeline2k173,
    timeline2k174,
    timeline2k181,
    timeline2k182,
    timeline2k183,
    timeline2k184,
    timeline2k191,
    timeline2k192,
    timeline2k193,
    timeline2k194,
    timeline2k201,
    timeline2k202,
    timeline2k203,
    timeline2k204,
    timeline2k211,
    timeline2k212,
    timeline2k213,
    timeline2k214,
    timeline2k221,
    timeline2k222,
    timeline2k223,
    timeline2k224,
  ];

  const gal1 = [
    galImg14,
    galImg15,
    galImg16,
    galImg17,
    galImg18,
    galImg19,
    galImg20,
    galImg21,
    galImg22,
    galImg23,
  ];
  const gal2 = [
    galImg1,
    galImg2,
    galImg4,
    galImg6,
    galImg7,
    galImg12,
    galImg13,
  ];
  // const exploreImgs = [explore1,explore2,explore3,explore4]
  const exploreImgs = [
    {
      title: "Breakfree",
      imgUrl: explore1,
      href: "/competitions",
    },
    {
      title: "Glitz & Glamour",
      imgUrl: explore2,
      href: "/competitions",
    },
    {
      title: "Pronites",
      imgUrl: explore3,
      href: "/events",
    },
    {
      title: "Deepn",
      imgUrl: explore4,
      href: "/competitions",
    },
    {
      title: "Proshows",
      imgUrl: explore5,
      href: "/events",
    },
    {
      title: "Shipwreck",
      imgUrl: explore6,
      href: "/litfest",
    },
    {
      title: "Campus Idol",
      imgUrl: explore7,
      href: "/competitions",
    },
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

  const context = useContext(AnimationContext);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // desktop opening animation
      mm.add("(min-width: 1024px)", () => {
        // master timeline
        function finishAnimation() {
          document.body.style.overflowY = "scroll";
          context.setAnimationComplete(true);
        }

        const masterTl = gsap.timeline({
          onStart: () => {
            document.body.style.overflowY = "hidden";
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          },
          onComplete: finishAnimation,
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

        if (context.animationComplete) {
          masterTl.pause();
          rotationTl.pause();

          gsap.set(".moon1", { right: "-7%" });
          gsap.set(".moon2", { right: "-7%" });
          gsap.set(".moon3", { right: "-10%" });
          gsap.set(".moon4", { right: "-7%" });
          gsap.set(".moon5", { right: "-7%" });

          gsap.set(".invite-text", { top: "55%", height: "18vh", opacity: 0 });
          gsap.set(".elan-logo", { height: "13vh", top: "21%" });
          gsap.set(".left-decor", { height: "65vh", top: "4%" });
          gsap.set(".top-line", { right: "-100%" });
          gsap.set(document.querySelector("header"), { opacity: 1 });
          gsap.set(".valenrow-logo", { opacity: 1 });
          gsap.set(".buttons>*", { opacity: 1 });
          gsap.set(section1.current, {
            background: "#0000008c",
          });
        }

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

        function logoTl() {
          const tl = gsap.timeline({ defaults: {} });

          tl.to(".invite-text", { top: "55%", height: "18vh", duration: 1 });
          tl.to(".elan-logo", { height: "13vh", top: "21%", duration: 1 }, "<");
          tl.to(".left-decor", { height: "65vh", top: "4%" }, "<");
          tl.to(".top-line", { right: "-100%", duration: 2 }, "<");
          tl.to(
            document.querySelector("header"),
            { opacity: 1, duration: 1 },
            "<"
          );
          tl.to(".invite-text", { opacity: 0 });
          tl.to(".valenrow-logo", {
            opacity: 1,
            duration: 1.5,
            ease: "power2.in",
          });
          tl.to(".buttons>*", { opacity: 1, stagger: 0.5 }).to(
            section1.current,
            {
              background: "#0000008c",
              duration: 6,
              ease: "power2.inOut",
            }
          );

          return tl;
        }

        masterTl.add(moonsTl());
        masterTl.add(logoTl());
      });

      function finishAnimation() {
        document.body.style.overflowY = "scroll";
        context.setAnimationComplete(true);
      }

      //mobile opening animation
      mm.add("(max-width: 550px)", () => {
        const tl = gsap.timeline({
          onStart: () => {
            document.body.style.overflowY = "hidden";
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          },
          onComplete: finishAnimation,
        });

        if (context.animationComplete) {
          tl.pause();

          gsap.set(".mob-top-decor", {
            opacity: 0,
          });
          gsap.set(".mob-bottom-decor", {
            opacity: 0,
            left: "-12%",
          });
          gsap.set(".mob-invite-text", { opacity: 0 });
          gsap.set(".elan-logo", {
            top: "6%",
            height: "8vh",
          });
          gsap.set(".valenrow-logo", { top: "6%", opacity: 1 });
          gsap.set(section1.current, { height: "80vh" });
          gsap.set(".buttons>*", { opacity: 1 });
          gsap.set(".moon-ring", {
            bottom: "4%",
            scale: 1.2,
            right: "8%",
            opacity: 1,
          });
          gsap.set(".moon", {
            bottom: "4%",
            height: "5vh",
            left: "8%",
          });
        }
        gsap.set(document.querySelector("header"), { opacity: 1 });

        tl.to(".mob-top-decor", {
          opacity: 0,
          duration: 1.5,
          ease: "power2.in",
        });
        tl.to(".mob-bottom-decor", {
          opacity: 0,
          left: "-12%",
          duration: 1.5,
          ease: "power2.in",
        });

        tl.to(".mob-invite-text", { opacity: 0 });
        tl.to(".valenrow-logo", {
          opacity: 1,
          ease: "power2.in",
          duration: 1.5,
        });
        tl.to(".elan-logo", {
          top: "6%",
          height: "8vh",
          duration: 1.5,
          delay: 0.8,
        });
        tl.to(".valenrow-logo", { top: "6%", duration: 1.5 }, "<");
        tl.to(
          ".moon-ring",
          {
            bottom: "4%",
            scale: 1.2,
            opacity: 1,
            right: "8%",
            rotation: 0,
            duration: 3,
            ease: "power3.out",
          },
          "<"
        );
        tl.to(
          section1.current,
          { height: "80vh", ease: "power2.out", duration: 1.5 },
          "<"
        );
        tl.to(".buttons>*", { opacity: 1, stagger: 0.5 }, "<+0.9");
        tl.to(".moon", {
          // rotation: 18,
          height: "5vh",
          left: "8%",
          duration: 1.4,
          ease: "power2.out",
        });
      });

      // scroll animation for timeline section
      const mm2 = gsap.matchMedia();

      mm2.add("(min-width: 1025px)", () => {
        gsap.to(".scroll-div", {
          scrollTrigger: {
            trigger: ".timeline-div",
            // markers: true,
            start: "center center",
            end: "bottom+=60%",
            scrub: true,
            pin: ".giant-div",
          },
          scrollTo: "max",
        });
      });
    });

    return () => {
      ctx.revert();
    }; // cleanup!
  }, []);

  const yrsProps = {
    r: "7px",
    cx: 29,
    cys: [10, 60, 110, 160, 210, 260],
    yrYs: [18, 70, 120, 170, 220, 267],
    yrX: 55,
  };

  const [highlightedCircleYPos, sethighlightedCircleYPos] = useState(
    yrsProps.cys[0]
  );

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

  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div className="mt-20 lg:mt-0">
      <div className="giant-div">
        {/* Intro section */}
        <div
          ref={section1}
          className="bg-black text-white font-cinzel font-bold h-[90vh] sm:h-[90vh] relative"
        >
          {/* <div className="absolute inset-0 bg-[#0000001a]"></div> */}
          {/* top decor line */}
          <div className="top-line hidden lg:block   absolute top-0 right-[7%] w-[68vw]">
            <img className="h-[40%]" alt="decor" src={topLine}></img>
          </div>

          {/* left decoration */}
          <div className="left-decor hidden lg:block absolute h-[50vh] lg:h-[75vh] left-3.5 top-0">
            <img className="h-full" src={sec1DecorLeft} />
          </div>

          {/* right animating moon */}
          <div className="moon1 hidden lg:block absolute h-[3vh] md:h-[4vh] lg:h-[4vh] right-[8%] top-[-10%] md:top-[10%] lg:top-[10%]">
            <img className="h-full" src={fullMoon}></img>
          </div>

          <div className="moon2 hidden lg:block absolute h-[5vh] md:h-[7vh] lg:h-[8vh] right-[7%] top-[8%] md:top-[23%] lg:top-[20%]">
            <img className="h-full" src={cresentRight}></img>
          </div>

          <div className="moon3 hidden lg:block absolute h-[9vh] md:h-[11vh] lg:h-[14vh] right-[5.5%] top-[30%] md:top-[39%] lg:top-[37%]">
            <img className="h-full" src={halfMoon}></img>
          </div>

          <div className="moon4 hidden lg:block absolute h-[5vh] md:h-[7vh] lg:h-[8vh] right-[7%] top-[65%] md:top-[62%] lg:top-[63%]">
            <img className="h-full" src={cresentLeft}></img>
          </div>

          <div className="moon5 hidden lg:block absolute h-[3vh] md:h-[4vh] lg:h-[4vh] right-[8%] top-[85%] lg:top-[80%]">
            <img className="h-full" src={fullMoon}></img>
          </div>

          {/* elan logo */}
          <div className="elan-logo h-[10vh] absolute right-0 left-0 flex justify-center top-[20%] md:top-[20%] lg:top-[23%]">
            <img className="h-full" alt="elan_logo" src={elanLogo} />
          </div>

          {/* desktop invite text */}
          <div className="hidden lg:flex invite-text w-[60vw] absolute m-auto right-0 left-0 justify-center top-[37%]">
            <img className="h-full" alt="elan_text" src={inviteText}></img>
          </div>
          {/* mobile invite text */}
          <div className="mob-invite-text lg:hidden absolute top-[32%] h-[17vh] left-0 right-0 flex justify-center ">
            <img className="h-full" src={inviteTextMob}></img>
          </div>

          {/* valenrow logo */}
          <div className="valenrow-logo opacity-0 py-3 lg:py-6 sm:px-8 h-[38vh] lg:h-[85vh] absolute left-0 right-0 lg:left-[-10%] flex justify-center top-[19%] lg:top-[14%]">
            <img className="h-full" alt="valenrow_logo" src={valenrowLogo} />
          </div>

          {/* buttons div */}
          <div className="buttons flex flex-col items-center text-[2.6vh] lg:text-[3.7vh] absolute right-0 left-0 top-[42%] lg:-right-[65%] lg:top-20">
            <button className="opacity-0 md:opacity-100 lg:opacity-0 flex items-center justify-center bg-[#AD002A] text-golden py-4 lg:py-9 px-8 lg:px-12 rounded-lg my-4 lg:h-[10vh] w-[38vw] md:w-[38vw] lg:w-[15.5vw]">
              <Link to="/litfest">
                <div>Litfest</div>
              </Link>
            </button>

            <button className="opacity-0 md:opacity-100 lg:opacity-0 bg-green px-1 rounded-lg my-4 w-[46vw] md:w-[38vw] lg:w-[15.5vw] h-[8vh] lg:h-[10vh]">
              <a
                className="flex items-center justify-evenly"
                href="https://ca.elan.org.in"
                target="_blank"
              >
                <img src={caPortalIcon} className="w-1/6" alt="icon" />
                <div className="text-[90%] lg:text-[80%]">CA Portal</div>
              </a>
            </button>

            <Link
              className="opacity-0 md:opacity-100 lg:opacity-0 text-center bg-yellow rounded-[40px] h-[8.5vh] w-[50vw] lg:h-[9vh]  md:w-[38vw] lg:w-[16vw] my-4 relative"
              to="/valenrow"
            >
              <div className="absolute top-[-25%] lg:top-[-38%] left-[8%] lg:left-[8%] h-[150%] lg:h-[170%] pt-3 md:pt-4 lg:pt-3">
                <img src={valenrowIcon} className="h-full" alt="icon" />
              </div>

              <div
                className="absolute right-[2%] top-[12%] lg:top-[8%] w-[70%] text-[80%] lg:text-[65%] text-"
                ref={exploreBtnRef}
              >
                Explore Valenrow
              </div>
            </Link>
          </div>

          {/* mobile graphics */}
          <div className="mob-top-decor lg:hidden absolute top-[3%] h-[19vh] left-[4%]">
            <img className="h-full" src={mobileDecorTop}></img>
          </div>
          <div className="mob-bottom-decor lg:hidden absolute left-[5%] h-[24vh] bottom-[16%]">
            <img className="h-full" src={mobileDecorBottom}></img>
          </div>
          {/* height: "8vh",
          left: "3%", */}
          <div className="moon lg:hidden absolute bottom-[4%] h-[8vh] left-[3%]">
            <img className="h-full" src={moon}></img>
          </div>
          <div className="lg:hidden absolute bottom-[6%] right-[0%] flex justify-center w-[100vw]">
            <img className="w-[52%]" src={btmLine}></img>
          </div>
          {/*initial properties for ringMoon: bottom-[40%] scale-[10] opacity-[25%] right-[25%] */}
          {/*final properties for ringMoon: bottom-[4%] scale-[1.2] opacity-[100%] right-[8%] */}
          <div className="moon-ring lg:hidden absolute bottom-[40%] scale-[10] md:scale-[1.5] opacity-[25%] right-[25%] md:right-[10%]">
            <img className="h-full" src={ringMoon}></img>
          </div>
          {/* <div className='sm:hidden flex items-center justify-center absolute bottom-[5%] left-0 right-0'>
            <img src={sec1BottomGraphics} alt='graphic' />
          </div> */}

          {/* desktop moon line graphics */}
          <div className="hidden lg:flex items-center justify-center w-[100vw] absolute bottom-[4%] h-24 px-20  lg:pb-14">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold z-10">
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
          <h1 className="font-berkshire text-6xl lg:text-8xl px-10 lg:px-0 relative z-20">
            Timeline
          </h1>

          <div
            ref={timelineRef}
            className="timeline-div flex pt-11 items-center justify-evenly relative z-20 text-2xl"
          >
            <div className="">
              <svg width="120" height="300">
                <line
                  x1={yrsProps.cx}
                  y1={yrsProps.cys[0] + 7}
                  x2={yrsProps.cx}
                  y2={yrsProps.cys[1] - 7}
                  stroke="#FED395"
                  strokeWidth={1}
                />
                <line
                  x1={yrsProps.cx}
                  y1={yrsProps.cys[1] + 7}
                  x2={yrsProps.cx}
                  y2={yrsProps.cys[2] - 7}
                  stroke="#FED395"
                  strokeWidth={1}
                />
                <line
                  x1={yrsProps.cx}
                  y1={yrsProps.cys[2] + 7}
                  x2={yrsProps.cx}
                  y2={yrsProps.cys[3] - 7}
                  stroke="#FED395"
                  strokeWidth={1}
                />
                <line
                  x1={yrsProps.cx}
                  y1={yrsProps.cys[3] + 7}
                  x2={yrsProps.cx}
                  y2={yrsProps.cys[4] - 7}
                  stroke="#FED395"
                  strokeWidth={1}
                />
                <line
                  x1={yrsProps.cx}
                  y1={yrsProps.cys[4] + 7}
                  x2={yrsProps.cx}
                  y2={yrsProps.cys[5] - 7}
                  stroke="#FED395"
                  strokeWidth={1}
                />

                {/* circles and corresponding years  */}
                <circle
                  className="cursor-pointer"
                  ref={pt1Ref}
                  pointnum={1}
                  onClick={ptClickHandler}
                  cx={yrsProps.cx}
                  cy={yrsProps.cys[0]}
                  r={yrsProps.r}
                  fill="#ffffff4a"
                  stroke="#FED395"
                />
                <text x={yrsProps.yrX} y={yrsProps.yrYs[0]} fill="#FED395">
                  2017
                </text>

                <circle
                  className="cursor-pointer"
                  ref={pt2Ref}
                  pointnum={2}
                  onClick={ptClickHandler}
                  cx={yrsProps.cx}
                  cy={yrsProps.cys[1]}
                  r={yrsProps.r}
                  fill="#ffffff4a"
                  stroke="#FED395"
                />
                <text x={yrsProps.yrX} y={yrsProps.yrYs[1]} fill="#FED395">
                  2018
                </text>

                <circle
                  className="cursor-pointer"
                  ref={pt3Ref}
                  pointnum={3}
                  onClick={ptClickHandler}
                  cx={yrsProps.cx}
                  cy={yrsProps.cys[2]}
                  r={yrsProps.r}
                  fill="#ffffff4a"
                  stroke="#FED395"
                />
                <text x={yrsProps.yrX} y={yrsProps.yrYs[2]} fill="#FED395">
                  2019
                </text>

                <circle
                  className="cursor-pointer"
                  ref={pt4Ref}
                  pointnum={4}
                  onClick={ptClickHandler}
                  cx={yrsProps.cx}
                  cy={yrsProps.cys[3]}
                  r={yrsProps.r}
                  fill="#ffffff4a"
                  stroke="#FED395"
                />
                <text x={yrsProps.yrX} y={yrsProps.yrYs[3]} fill="#FED395">
                  2020
                </text>

                <circle
                  className="cursor-pointer"
                  ref={pt5Ref}
                  pointnum={5}
                  onClick={ptClickHandler}
                  cx={yrsProps.cx}
                  cy={yrsProps.cys[4]}
                  r={yrsProps.r}
                  fill="#ffffff4a"
                  stroke="#FED395"
                />
                <text x={yrsProps.yrX} y={yrsProps.yrYs[4]} fill="#FED395">
                  2021
                </text>

                <circle
                  className="cursor-pointer"
                  ref={pt6Ref}
                  pointnum={6}
                  onClick={ptClickHandler}
                  cx={yrsProps.cx}
                  cy={yrsProps.cys[5]}
                  r={yrsProps.r}
                  fill="#ffffff4a"
                  stroke="#FED395"
                />
                <text x={yrsProps.yrX} y={yrsProps.yrYs[5]} fill="#FED395">
                  2022
                </text>

                {/* highlighted circle */}
                <circle
                  ref={highlightedCircleRef}
                  cx={yrsProps.cx}
                  cy={highlightedCircleYPos}
                  r={yrsProps.r}
                  fill="#FED395"
                />
              </svg>
            </div>

            <div
              onScroll={scrollHandler}
              ref={scrollDivRef}
              className="scroll-div bg- h-[40vh] lg:h-[60vh] w-[50vw] lg:w-[40vw] overflow-y-auto relative flex flex-wrap justify-center"
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
            </div>
          </div>
        </div>

        {/* Explore */}
        <div
          ref={exploreRef}
          className="text-golden pt-10 lg:px-16 box-content relative"
        >
          <h1 className="font-berkshire text-6xl lg:text-8xl px-10 lg:px-0 relative">
            Explore
          </h1>

          <ExploreSlider imagesList={exploreImgs} size={width >= 850 ? 4 : 2} />

          {/* bg images */}
          <div className="absolute h-[55%] right-0 bottom-[10%]">
            <img className="h-full" src={exploreBg}></img>
          </div>
        </div>

        {/* Gallery */}
        <div className="text-golden py-10 lg:px-16 box-content relative">
          <h1 className="font-berkshire text-6xl lg:text-8xl px-10 lg:px-0 relative z-20">
            Gallery
          </h1>

          <GallerySlider imagesList={gal1} size={width >= 850 ? 4 : 2} />

          <GallerySlider imagesList={gal2} size={width >= 850 ? 4 : 2} />

          {/* bg images */}
          <div className="absolute h-[85%] left-0 top-0">
            <img className="h-full" src={galleryBg}></img>
          </div>
          <div className="absolute h-[70%] right-0 -bottom-[20%]">
            <img className="h-full" src={galleryBtmBg}></img>
          </div>
        </div>

        {/* Stats */}
        <div className="text-golden py-10 lg:px-16 box-content relative">
          <h1 className="font-berkshire text-6xl lg:text-8xl px-10 lg:px-0 relative z-10">
            Stats
          </h1>

          <div className="flex flex-wrap w-full justify-around px-[8%] lg:px-[5%] xl:px-[20%] pt-14 lg:pb-5 z-10 relative">
            <div className="flex flex-col items-center justify-center my-4">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={audience}></img>
              </div>
              <p>60+ events</p>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={hat}></img>
              </div>
              <p>400+ colleges</p>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={calender}></img>
              </div>
              <p>3 days</p>
            </div>
            <div className="flex flex-col items-center justify-center my-4 mx-2">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={threePeeps}></img>
              </div>
              <p>10k+ audience</p>
            </div>
            <div className="flex flex-col items-center justify-center my-4 mx-2">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={insta}></img>
              </div>
              <p>3.7k+ followers</p>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={likes}></img>
              </div>
              <p>42k+ likes</p>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={views}></img>
              </div>
              <p>82k+ views</p>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={tweets}></img>
              </div>
              <p>1.1k+ followers</p>
            </div>
          </div>

          <div className="flex flex-wrap w-full justify-around px-10 pb-5 z-10 relative">
            {/* <div className="flex flex-col items-center justify-center my-4 mx-2">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={insta}></img>
              </div>
              <p>3.7k+ followers</p>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={likes}></img>
              </div>
              <p>42k+ likes</p>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={views}></img>
              </div>
              <p>82k+ views</p>
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <div className="h-10 mb-2 lg:mb-4 lg:h-16 mx-8 md:mx-20">
                <img className="h-full" src={tweets}></img>
              </div>
              <p>1.1k+ followers</p>
            </div> */}
          </div>

          {/* bg images */}
          <div className="absolute h-[60%] left-0 top-[-10%] lg:top-0">
            <img className="h-full" src={statsBg}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
