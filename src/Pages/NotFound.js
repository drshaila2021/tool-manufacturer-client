import React from "react";
import page404 from "../../src/images/page-404.jpg";

const NotFound = () => {
  return (
    <div className="flex justify-center h-screen">
      <img className="shadow-lg " src={page404} alt="" />
      <h4 className="text-center text-3xl">Sorry page not found ! 404 !!</h4>
    </div>
  );
};

export default NotFound;
