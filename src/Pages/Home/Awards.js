import React from "react";
import award1 from "../../images/award1.png";
import award2 from "../../images/award2.png";
import award3 from "../../images/award3.webp";

const Awards = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-16 mb-20">Our Awards</h2>
      <div className="grid shadow-xl mx-12 rounded-xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div>
          {" "}
          <img src={award1} alt="" />
        </div>
        <div>
          {" "}
          <img src={award2} alt="" />
        </div>
        <div className="my-12">
          {" "}
          <img src={award3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
