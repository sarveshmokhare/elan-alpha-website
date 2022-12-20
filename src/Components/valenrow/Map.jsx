import React from "react";
import { FaAngleDoubleDown } from 'react-icons/fa'

const map =
  "https://res.cloudinary.com/dwsverefw/image/upload/v1671462802/ecell/Valenrow/map_yvfbhs.jpg";

function Map({ Ping }) {
  return (
    <section className="bg-white relative z-20">
      <div>
        {" "}
        <h2 className="text-center text-4xl font-cinzel font-bold text-[#005445] py-5 lg:text-[5rem] lg:py-[4rem]">
          MiniMap
        </h2>
      </div>
      <div className="lg:h-[100vh] overflow-y-scroll">
        <div className="relative">
          <img src={map} alt="map of Valenrow" className="w-full" />
          <div className="hidden lg:block">
            <span
              className={`group text-[#000] text-4xl animate-pulse hover:animate-none rounded-3xl cursor-pointer absolute flex flex-col items-center`}
              style={{ right: "2%", top: "15.5%" }}
            >
              <FaAngleDoubleDown />
              <p className="font-berkshire font-bold">Scroll Below</p>
            </span>
          </div>

          <Ping location={"Gem of Valiant"} x={"30%"} y={"10%"} />
          <Ping location={"Botanica Clan"} x={"12%"} y={"7%"} />
          <Ping location={"Council of Valens"} x={"35%"} y={"4%"} />
          <Ping location={"Claritas Coven"} x={"52%"} y={"8%"} />
          <Ping location={"Enchanted Forest"} x={"20%"} y={"15%"} />
          {/* <Ping location={"Fiery Trail"} x={"35%"} y={"19%"} /> */}
          <Ping location={"The Uncharted Forest"} x={"76%"} y={"26%"} />
          <Ping location={"Faven Lane"} x={"78.5%"} y={"15%"} />
          <Ping location={"Aedlark: The Great Tree"} x={"60%"} y={"32.75%"} />
          <Ping location={"Tavern Lane"} x={"54.5%"} y={"45%"} />
          <Ping location={"Vandrar: Residents"} x={"78%"} y={"50%"} />
          <Ping location={"Crafts Foundry"} x={"18%"} y={"58%"} />
          <Ping location={"Ol’ Tavern"} x={"32%"} y={"61%"} />
          <Ping location={"The Pastry Sheet"} x={"31%"} y={"65.5%"} />
          <Ping location={"Cypress Street"} x={"60%"} y={"71%"} />
          <Ping location={"Town Square Emporium"} x={"48%"} y={"87%"} />
        </div>
      </div>

    </section>
  );
}

export default Map;
