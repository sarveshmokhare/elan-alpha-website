import React, {useEffect} from "react";
import gsap from "gsap";
import MobileCard from "../Components/valenrow/MobileCard";
import Ping from "../Components/valenrow/Ping";

import Landing from "../Components/valenrow/Landing";
import Covens from "../Components/valenrow/Covens";
import Lore from "../Components/valenrow/Lore";
import Map from "../Components/valenrow/Map";
import "../styles/valenrow.css";

function Valenrow() {
  useEffect(() => {
    const ctx = gsap.context(() => {

    })
    gsap.set(
      document.querySelector("header"),
      { opacity: 1, }
    );

    return () => { ctx.revert(); }
  }, [])

  console.log("hey");
  return (
    <div className="bg-white box-border lg:pb-24">
      <Landing></Landing>
      <Covens MobileCard={MobileCard} />
      <Lore />
      <Map Ping={Ping} />
    </div>
  );
}

export default Valenrow;
