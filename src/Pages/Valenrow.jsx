import React from "react";
import MobileCard from "../Components/valenrow/MobileCard";
import Ping from "../Components/valenrow/Ping";

const landingPageBg =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671448596/ecell/Valenrow/landing_page_bg_mwzh1i.jpg";
const house =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671448631/ecell/Valenrow/house_msw5kg.png";
const butterfly =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671448645/ecell/Valenrow/butterfly_q5tqo6.png";

const covens = [
  {
    title: "Claritas",
    type: "COVEN",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1671452070/ecell/Valenrow/covens/claritas_coven_symbil_no_bg_jfaubo.png",
    bgColor: "[#0D1838]",
    accentColor: "[#FED395]",
  },
  {
    title: "Botanica",
    type: "CLAN",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1671452070/ecell/Valenrow/covens/botanica_clan_symbol_dtkm9t.png",
    bgColor: "v-green",
    accentColor: "lightGreen",
  },
  {
    title: "Bestia",
    type: "CLAN",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1671452070/ecell/Valenrow/covens/beast_arcani_symbol_sbmm8j.png",
    bgColor: "[#AD002A]",
    accentColor: "[#FED395]",
  },
  {
    title: "Ostium",
    type: "COVEN",
    imgUrl:
      "https://res.cloudinary.com/dwsverefw/image/upload/v1671452069/ecell/Valenrow/covens/spirit_coven_symbol_vdrtmc.png",
    bgColor: "darkAsh",
    accentColor: "ash",
  },
];

const lorebg =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671455011/ecell/Valenrow/Lore%20section/section2_background_lwyrvn.jpg";

const leftBushes =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671455029/ecell/Valenrow/Lore%20section/left_bushes_and_flowers_lhavrb.png";
const pillars =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671455014/ecell/Valenrow/Lore%20section/pillars_q7gtkj.png";
const castle =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671457027/ecell/Valenrow/Lore%20section/castle_u0xg0k.png";

const map =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671462802/ecell/Valenrow/map_yvfbhs.jpg";

function Valenrow() {
  console.log("hey");
  return (
    <>
      <div className="h-[100vh] w-[100vw] text-white relative">
        <img
          src={landingPageBg}
          alt="enchanted forrest"
          className="h-full w-full object-cover top-0 absolute object-top-right"
        />
        <div className="absolute w-full">
          <h2 className="font-cinzel font-bold text-center text-5xl my-[5rem]">
            Valenrow
          </h2>
          <div className="text-lg  mx-6">
            <p>
              Nestled in the depths of an enchanted wood, isolated from the
              mainland of Mysthaven, lies the sleepy town of Valenrow. Protected
              by ancient magic woven into the bark and branches, and boundaries
              drawn into the undergrowth, this town is home to two of the most
              important covens in all the land, the Claritas and the Botanica.
              <br /> <br />
              The covens came together in the heart of the enchanted forest to
              form the Council of Valens, witches and warlocks whose duty it is
              to maintain peace within the forest. They enforce rules on the
              peaceful use of luxonite and the marvels of the woods, making sure
              that the town is protected and governed fairly.
            </p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          voluptate veritatis consequuntur? Officiis veritatis in reiciendis.
          Ad, repellendus. Deserunt vero laudantium perferendis totam aperiam.
          Minus tenetur repellat aliquam saepe qui?
        </p>
      </div>
      <section className="bg-white">
        <div className="py-5 px-4">
          <h2 className="text-center text-4xl font-cinzel font-bold text-[#005445]">
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
      </section>
      <section className="w-full min-h-screen relative">
        <img
          src={lorebg}
          alt="Valenrow"
          className="object-cover h-full w-full absolute object-right-bottom md:object-right-bottom v-tree-relative:relative"
        />
        <img
          src={leftBushes}
          alt="bushes"
          className="z-[3] h-full absolute bottom-[-2rem] left-[-5rem] lg:left-0 "
        />
        <img
          src={castle}
          alt=""
          className="absolute h-[20rem] right-[21rem] bottom-[38%] v-tree-relative:bottom-[38vw] v-tree-relative:h-[40vw] v-tree-relative:right-[36vw] z-0"
        />
        <img
          src={pillars}
          alt="pillars"
          className="z-[2] absolute h-[37rem] bottom-[24%] right-[13rem] v-tree-relative:h-[68vw] v-tree-relative:bottom-[24vw] v-tree-relative:right-[23vw]"
        />
      </section>
      <section className="bg-white relative z-20">
        <div>
          {" "}
          <h2 className="text-center text-4xl font-cinzel font-bold text-[#005445] py-5">
            MiniMap
          </h2>
        </div>
        <div className="relative">
          <img src={map} alt="map of Valenrow" />
          <Ping location={"Gem of Valiant"} x={"30%"} y={"10%"} />
        </div>
      </section>
    </>
  );
}

export default Valenrow;
