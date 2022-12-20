import React, { useRef, useState } from "react";
const lorebg =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671455011/ecell/Valenrow/Lore%20section/section2_background_lwyrvn.jpg";
const leftBushes =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671455029/ecell/Valenrow/Lore%20section/left_bushes_and_flowers_lhavrb.png";
const pillars =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671455014/ecell/Valenrow/Lore%20section/pillars_q7gtkj.png";
const castle =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671457027/ecell/Valenrow/Lore%20section/castle_u0xg0k.png";

function Lore() {
  const [storyHidden, setStoryHidden] = useState(true)
  const storyBox = useRef(null)

  function toggleStory(){
    setStoryHidden(currState => (currState === false ? true : false)) 

    gsap.from(storyBox.current, {height: 0, ease: 'power3.inOut', duration: 1.6})
  }

  return (
    <section className="lore-section w-full min-h-screen relative" onClick={toggleStory}>
      <img
        src={lorebg}
        alt="Valenrow"
        className="valenrow object-cover h-full w-full absolute object-right-bottom md:object-right-bottom v-tree-relative:relative"
        // onClick={removeStory}
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

      {/* lore icon */}
      <span
        className="group bg-white animate-pulse hover:animate-none rounded-[50%] cursor-pointer w-[2.5rem]  h-[2.5rem] lg:w-[4rem] lg:h-[4rem] absolute top-[30%] lg:top-[25%] translate-x-[-50%] left-[48%] lg:left-[60%] z-20"
        style={{opacity: storyHidden ? 1 : 0, visibility: storyHidden ? 'visible' : 'hidden'}}
      >
        <span className="top-[-3rem] lg:top-[-3.2rem] translate-x-[-50%] left-[100%] lg:left-[-30%] w-max relative px-2 lg:px-4 rounded-lg block group-hover:block text-white font-cinzel font-bold text-4xl lg:text-5xl">
          Lore
        </span>
      </span>

      {/* story box */}
      <div ref={storyBox} className="absolute my-20 mx-10 md:mx-32 md:top-[50%] md:translate-y-[-70%] md:h-[60%] p-5 h-[80vh] overflow-y-auto bg-[#ffffffb3] z-30 transition ease-in-out duration-[1.5]" style={{opacity: storyHidden ? 0 : 1, visibility: storyHidden ? 'hidden' : 'visible'}}>
        <p>
          The mainland of Mysthaven was once a hub of progress, a melting pot of peoples from all over the world who came to learn, to make a name for themselves. At the forefront of magery, Mysthaven’s researchers advanced the boundaries of the arcane arts rapidly. Within a few short decades, the surrounding regions went from wild, uncultivated land to vast farms and factories. A bastion of knowledge, Mysthaven was led by idealists from the four major Covens. They pursued the study of magic as a noble ideal, never considering how the advances they made could potentially be corrupted by minds more wicked than theirs. They pushed too far, and where anyone who has encountered the dark side of the human mind would warn them that what they sought could bring about mass destruction, they were instead goaded on by fellow idealists. Isolated, coddled by decades of rapid progress, they didn’t even consider the violence that could be wrought by their discoveries. No one considered how efficiently luxonite could be used to sear open wounds, despite its frequent use in cauterizing them. No one could even imagine corrupting the minds of the enchanted companions, the beasts of the Bestia Clan, using their immense strength and speed to harm one’s fellow witches and warlocks. No one was prepared when the Ostium Coven stepped over the bounds of simply deriving energy from spirits, and instead began stitching them back into flesh. No one was prepared when they announced their military might to the rest of the mainland, an army of undead minions, souls trapped inside corrupted, rotting flesh. <br />________ <br />When they finally began melding thousands of souls together, constructing weapons of immense magical output, the other covens knew that war was imminent. The Claritas and Botanica could not bring themselves to harness their powers for violence, and so chose to leave. The Bestia Clan could not bring themselves to leave their companions at the mercy of the Ostium coven, and so chose to stay and fight. The Claritas and Botanica fled, deep into the enchanted wood that took root in the far corner of the continent. They hid themselves well, crafting layers upon layers of spells and enchantments, sorcery so profound that in the process of writing it they unlocked discoveries the likes of which would have otherwise taken them centuries. They cut themselves off from the rest of the world, dedicating themselves instead to the protection of their own, and the pursuit of the highest reaches of their craft. And so the years have passed. The wisest of the two clans came together to form the Council of Valens, naming their town Valenrow. They keep the peace, making sure that what they study can never be used to harm their fellow beings. They know very little of the state of the outside world. The strength of the enchantments changed how their town is tethered to the flow of linear time, and as such they cannot know if the war is over or not without removing, even only for a short period, the scripts that have protected them for generations. A risk the Council will not take. A small, but flourishing, civilization has cropped up, in the heart of the forest. A symbol of what could have been, had human wickedness not had its way. Every year, they open themselves up to other worlds, letting visitors in for a small time to show them the ways of sorcery, to instill in them the lessons they have learned through great loss.
        </p>
      </div>
    </section>
  );
}

export default Lore;
