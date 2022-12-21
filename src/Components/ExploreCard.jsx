import React from "react";
import { Link } from "react-router-dom";

function Card({
  title,
  imgUrl = "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg",
  href,
}) {
  return (
    <Link to={href}>
      <>
        <img
          src={imgUrl}
          alt=""
          className="absolute h-full w-full object-cover"
        />
        <div className="bottom-0 h-[100%] w-full absolute bg-gradient-to-t from-[rgba(4,0,15,0.9)] via-[rgba(11,4,33,0.35)] to-transparent"></div>
        <h2 className="absolute bottom-0 p-3 lg:p-3.5  lg:p-7 text-xl lg:text-2xl ">{title}</h2>
      </>
    </Link>
  );
}

export default Card;
