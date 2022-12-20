import React from "react";
import { Link } from "react-router-dom";

function Card({
  title,
  imgUrl = "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg",
  href,
}) {
  return (
    <Link to={href}>
      <div className="lg:w-[22rem] lg:h-[12rem] w-[14.594rem] h-[9.156rem] bg-white relative m-4 hover:scale-105 transition ease-out duration-75">
        <img
          src={imgUrl}
          alt=""
          className="absolute h-full w-full object-cover"
        />
        <div className="bottom-0 h-[100%] w-full absolute bg-gradient-to-t from-[rgba(4,0,15,0.9)] via-[rgba(11,4,33,0.35)] to-transparent"></div>
        <h2 className="bottom-0 absolute p-4 lg:p-7 lg:text-3xl text-2xl">{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
