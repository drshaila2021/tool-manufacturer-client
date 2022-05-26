import React from "react";
import banner from "../../../src/images/banner-3.jpg";

const Banner = () => {
  return (
    <div className="flex justify-center">
      <img className="shadow-xl w-full" src={banner} alt="toolPicture" />
    </div>
  );
};

export default Banner;
