import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/purchase/${id}`;
  const { data: purchaseItem, isLoading } = useQuery(["myItems", id], () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">{purchaseItem?.displayName}</p>
          <p className="text-success font-bold">{purchaseItem?.email}</p>
          <h2 class="card-title">
            Please Pay for your order of : {purchaseItem?.name}
          </h2>
          <p>
            Quantity :
            <span className="text-orange-700">
              {purchaseItem.orderedQuantity}
            </span>
          </p>
          <p>Your Total is : ${purchaseItem.totalCost}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body"></div>
      </div>
    </div>
  );
};

export default Payment;
