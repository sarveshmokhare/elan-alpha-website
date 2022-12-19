import React from "react";
const lorebg =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671455011/ecell/Valenrow/Lore%20section/section2_background_lwyrvn.jpg";
const leftBushes =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671455029/ecell/Valenrow/Lore%20section/left_bushes_and_flowers_lhavrb.png";
const pillars =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671455014/ecell/Valenrow/Lore%20section/pillars_q7gtkj.png";
const castle =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671457027/ecell/Valenrow/Lore%20section/castle_u0xg0k.png";

function Lore() {
  return (
    <section className="w-full min-h-screen relative">
      <img
        src={lorebg}
        alt="Valenrow"
        className="valenrow object-cover h-full w-full absolute object-right-bottom md:object-right-bottom v-tree-relative:relative"
      />
      <img
        src={leftBushes}
        alt="bushes"
        className="z-[3] h-full absolute bottom-[-2rem] left-[-5rem] lg:left-0 "
      />
      <img
        src={castle}
        alt=""
        className="castle absolute h-[20rem] right-[21rem] bottom-[38%] z-0"
      />
      <img
        src={pillars}
        alt="pillars"
        className="pillars z-[2] absolute h-[39rem] bottom-[24%] right-[13rem]"
      />
    </section>
  );
}

export default Lore;
