import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const covens = [
  {
    title: "Claritas",
    type: "COVEN",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1671452070/ecell/Valenrow/covens/claritas_coven_symbil_no_bg_jfaubo.png",
    bgColor: "[#0D1838]",
    accentColor: "[#FED395]",
    desc: "Those of the Claritas coven wield light, bending it to their will, performing miracles the likes of which legends are written. They are proficient healers, and can borrow the power of light from the Sun to converse with the dead and predict the future. They capture the light in crystals of Luxonite and store it, using it later for their alchemy.",
  },
  {
    title: "Botanica",
    type: "CLAN",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1671452070/ecell/Valenrow/covens/botanica_clan_symbol_dtkm9t.png",
    bgColor: "v-green",
    accentColor: "lightGreen",
    desc: "the keepers of the forest, and they derive their power from the sorcery coursing through the veins of the plants, and the enchantments pulsing from within the earth. Their vast, intimate knowledge of the wood allows them to provide for the citizens of Valenrow by way of their excellent potions.",
  },
  {
    title: "Bestia",
    type: "CLAN",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1671452070/ecell/Valenrow/covens/beast_arcani_symbol_sbmm8j.png",
    bgColor: "[#AD002A]",
    accentColor: "[#FED395]",
    desc: "The Bestia Clan beloved by all manner of magical creatures, the Beast Clan have an innate affinity for wildlife. They form deep bonds with their companions, and are often seen as a single unit. They contribute to society by harnessing the power of their beasts to plow vast stretches of land, to terraform mountains into habitable spaces, and to transport massive numbers of people across the mainland.",
  },
  {
    title: "Ostium",
    type: "COVEN",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1671452069/ecell/Valenrow/covens/spirit_coven_symbol_vdrtmc.png",
    bgColor: "darkAsh",
    accentColor: "ash",
    desc: "Those of the Ositum Coven have a portion of their soul already residing in the afterlife. As such, they can commune with the spirits of the dead, bringing them peace and letting their souls fully move on to take their rightful place in the World After. They offer their services to those who are grieving a deceased loved one, allowing one last exchange before they are ushered to the afterlife. ",
  },
];

function DesktopCard({
  covenImg,
  title,
  type,
  bgColor,
  accentColor,
  index,
  desc,
}) {
  const even = index % 2 === 0;

  return (
    <div
      className={`w-[90%] bg-${bgColor} relative ${
        even ? "self-end" : "self-start"
      } coven-${index} mb-[4rem] grid grid-cols-3  items-center `}
    >
      <div
        className={`h-full ${
          even ? "col-start-2 col-end-4" : "col-start-1 col-end-3"
        } justify-center ml-12 z-[1] `}
      >
        <div className="translate-y-6 titles">
          {" "}
          <h2 className="text-[6.125rem] text-white font-cinzel font-bold overflow-hidden">
            {title}
          </h2>
          <h3
            className={`text-[3.25rem] font-bold text-${accentColor} font-cinzel -translate-y-9 overflow-hidden`}
          >
            {type}
          </h3>
        </div>
        <div className="text-white text-[1.375rem] pb-[3rem]">
          <p className="w-[92%]">{desc}</p>
        </div>
      </div>
      <div
        className={`bg-${bgColor} h-full w-full clip-${index} absolute z-[0]`}
      ></div>
      <div
        className={`h-[25rem] w-[25rem] relative ${
          even
            ? "cols-span-1 col-start-1 row-start-1"
            : "cols-span-1 col-start-3 row-start-1"
        }`}
      >
        <img
          src={covenImg}
          alt="coven"
          className="covenimage object-contain absolute right-1"
        />
      </div>
    </div>
  );
}

function Covens({ MobileCard }) {
  const covensRef = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl1 = gsap.timeline();
      tl1.from(".coven-0 > .clip-0", {
        x: "90%",
        autoAlpha: 1,
        duration: 1.8,
        ease: "power4.out",
      });
      tl1.from(
        ".coven-0  .titles>*",
        {
          autoAlpha: 0,
          stagger: 0.3,
          y: "5px",
          duration: 1.4,
          ease: "power4.inOut",
        },
        ">-2"
      );

      ScrollTrigger.create({
        trigger: ".coven-0",
        animation: tl1,
        start: "top 68%",
      });
    }, covensRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="bg-white" ref={covensRef}>
      <div className="py-5 px-4">
        <h2 className="text-center text-4xl font-cinzel font-bold text-[#005445] lg:text-7xl my-[3rem]">
          The 4 Major Covens
        </h2>
      </div>
      <div className="bg-white pb-[1rem] lg:hidden">
        {covens.map((coven) => (
          <MobileCard
            key={coven.title}
            covenImg={coven.imgUrl}
            title={coven.title}
            type={coven.type}
            bgColor={coven.bgColor}
            accentColor={coven.accentColor}
          />
        ))}
      </div>
      <div className="bg-white hidden lg:flex flex-col">
        {covens.map((coven, index) => (
          <DesktopCard
            index={index}
            key={coven.title}
            covenImg={coven.imgUrl}
            title={coven.title}
            type={coven.type}
            bgColor={coven.bgColor}
            accentColor={coven.accentColor}
            desc={coven.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Covens;
