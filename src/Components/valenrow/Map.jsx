import React from "react";
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
      <div className="relative">
        <img src={map} alt="map of Valenrow" className="w-full" />
        <Ping location={"Gem of Valiant"} x={"30%"} y={"10%"} />
      </div>
    </section>
  );
}

export default Map;
