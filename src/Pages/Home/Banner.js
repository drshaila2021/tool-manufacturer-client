import React from "react";
import banner from "../../../src/images/banner-3.jpg";

const Banner = () => {
  return (
    <div className="flex justify-center">
      <img
        className="shadow-lg w-full"
        src={banner}
        alt="toolPicture"
        srcSet=""
      />
    </div>
  );
};

export default Banner;
