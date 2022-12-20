import React from "react";

function Ping({ className, location, x, y }) {
  return (
    <>
      <span
        className={`group bg-white animate-pulse hover:animate-none rounded-3xl cursor-pointer w-[1.1rem]  h-[1.1rem] lg:w-[1.4rem] lg:h-[1.4rem] absolute ${className}`}
        style={{ left: x, top: y }}
      >
        <span className="top-[-1.7rem] lg:top-[-2.5rem] translate-x-[-50%] left-[50%] w-max bg-slate-50 relative px-2 lg:px-4 rounded-lg py- block lg:hidden group-hover:block text-sm lg:text-2xl">
          {location}
        </span>
      </span>
    </>
  );
}

export default Ping;
