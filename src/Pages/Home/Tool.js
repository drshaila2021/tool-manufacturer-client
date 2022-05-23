import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={tool.picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tool.name}</h2>
        <p>Order Quantity {tool.minOrderQuantity}</p>
        <p>Order Available {tool.availableQuantity}</p>
        <p>Price $ {tool.unitPrice} / qty</p>
        <p>{tool.description}</p>
        <div className="card-actions justify-end">
          <Link to="/purchase">
            {" "}
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
