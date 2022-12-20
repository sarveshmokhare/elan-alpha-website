import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const landingPageBg =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671448596/ecell/Valenrow/landing_page_bg_mwzh1i.jpg";
const house =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671448631/ecell/Valenrow/house_msw5kg.png";
const butterfly =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671448645/ecell/Valenrow/butterfly_q5tqo6.png";

function Landing() {
  const landingRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline();

      tl.from("i", {
        y: "100%",
        stagger: 0.08,
        ease: "power2.inOut",
        duration: 1,
      });
      tl.from(
        "p > i",
        {
          autoAlpha: 0,
          duration: 1,
          x: -20,
          stagger: 0.3,
          ease: "power3.inOut",
        },
        "<+1.1"
      );
    }, landingRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="h-[100vh] w-[100vw] text-white relative lg:h-max"
      ref={landingRef}
    >
      <img
        src={landingPageBg}
        alt="enchanted forrest"
        className="h-full w-full object-cover top-0 absolute object-top-right lg:w-full lg:relative"
      />
      <div className="absolute w-full lg:top-0 flex flex-col justify-center ">
        <h2 className="overflow-y-hidden font-cinzel font-bold text-center text-5xl mt-[7rem] mb-[1rem] lg:my-[5rem] lg:text-[10vw] lg:text-left lg:m-[5rem]">
          <i>V</i>
          <i>a</i>
          <i>l</i>
          <i>e</i>
          <i>n</i>
          <i>r</i>
          <i>o</i>
          <i>w</i>
        </h2>
        <div className="text-md mx-14 lg:mx-[11rem] lg:text-[1.75rem]">
          <p className="lg:leading-8 text-justify ">
            <i>
              Nestled in the depths of an enchanted wood, isolated from the
              mainland of Mysthaven, lies the sleepy town of Valenrow. Protected
              by ancient magic woven into the bark and branches, and boundaries
              drawn into the undergrowth, this town is home to two of the most
              important covens in all the land, the Claritas and the Botanica.
            </i>
            <br /> <br />
            <i>
              The covens came together in the heart of the enchanted forest to
              form the Council of Valens, witches and warlocks whose duty it is
              to maintain peace within the forest. They enforce rules on the
              peaceful use of luxonite and the marvels of the woods, making sure
              that the town is protected and governed fairly.
            </i>
          </p>
        </div>

        {/* <div className="flex items-center justify-center pt-12 text-center h-80">
          <iframe className="h-[100%]" src="https://www.youtube.com/embed/h5JdmiBrzs0" title="Theme Reveal and Date Reveal - Elan & ηVision 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> */}

      </div>
    </div>
  );
}

export default Landing;
