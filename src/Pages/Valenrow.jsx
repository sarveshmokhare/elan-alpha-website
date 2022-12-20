import React from "react";
import MobileCard from "../Components/valenrow/MobileCard";
import Ping from "../Components/valenrow/Ping";

import Landing from "../Components/valenrow/Landing";
import Covens from "../Components/valenrow/Covens";
import Lore from "../Components/valenrow/Lore";
import Map from "../Components/valenrow/Map";
import "../styles/valenrow.css";

function Valenrow() {
  console.log("hey");
  return (
    <>
      <Landing></Landing>
      <Covens MobileCard={MobileCard} />
      <Lore />
      <Map Ping={Ping} />
    </>
  );
}

export default Valenrow;
