import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faStarOfDavid,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

const Summary = () => {
  const element1 = <FontAwesomeIcon icon={faSackDollar} />;
  const element2 = <FontAwesomeIcon icon={faStarOfDavid} />;
  const element3 = <FontAwesomeIcon icon={faBuildingColumns} />;
  return (
    <div className="my-24 ">
      <h1 className="text-3xl font-bold my-24"> WE MAKE DEFERANCES</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center my-24">
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10 text-4xl ">{element1}</figure>
            <div class="card-body items-center text-center">
              <h2 className="text-4xl font-bold">110M+ </h2>
              <p className="font-bold">Annual reneview</p>
            </div>
          </div>
        </div>

        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10 text-4xl">{element2}</figure>
            <div class="card-body items-center text-center">
              <h2 className="text-4xl font-bold">33K+ </h2>
              <p className="font-bold">Reviews</p>
            </div>
          </div>
        </div>

        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10 text-4xl">{element3}</figure>
            <div class="card-body items-center text-center">
              <h2 className="text-4xl font-bold">100+ </h2>
              <p className="font-bold">Company trust us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
