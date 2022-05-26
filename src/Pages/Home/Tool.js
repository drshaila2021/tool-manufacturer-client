import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    name,
    picture,
    minOrderQuantity,
    availableQuantity,
    unitPrice,
    description,
  } = tool;
  const navigate = useNavigate();

  const handleNavigatePurchase = (toolId) => {
    navigate(`/purchase/${toolId}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p className="text-left mt-2">Order Quantity {minOrderQuantity}</p>
        <p className="text-left">Order Available {availableQuantity}</p>
        <p className="text-left">Price $ {unitPrice} / qty</p>
        <p className="text-left">{description}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => handleNavigatePurchase(_id)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
