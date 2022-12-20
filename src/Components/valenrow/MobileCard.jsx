import React from "react";

function mobileCard({ covenImg, title, type, bgColor, accentColor }) {
  return (
    <div
      className={`w-full bg-${bgColor} relative mb-[4rem] grid grid-cols-3  items-center`}
    >
      <div className="h-full col-span-2 flex flex-col justify-center ml-12">
        <h2 className="text-4xl text-white font-cinzel font-bold">{title}</h2>
        <h3 className={`text-2xl font-bold text-${accentColor} font-cinzel`}>
          {type}
        </h3>
      </div>
      <div className="h-[7.5rem] w-[8.5rem] relative cols-span-1">
        <img
          src={covenImg}
          alt="coven"
          className="object-contain absolute -bottom-[50%] right-1"
        />
      </div>
    </div>
  );
}

export default mobileCard;
