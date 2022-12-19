import React from "react";

function Ping({ className, location, x, y }) {
  return (
    <>
      <span
        className={`group bg-white animate-pulse hover:animate-none rounded-3xl cursor-pointer w-[1.4rem]  h-[1.4rem] absolute ${className}`}
        style={{ left: x, top: y }}
      >
        <span className="top-[-2.6rem] translate-x-[-50%] left-[50%] w-max bg-slate-50 relative px-5 rounded-lg py-1 block lg:hidden group-hover:block">
          {location}
        </span>
      </span>
    </>
  );
}

export default Ping;
