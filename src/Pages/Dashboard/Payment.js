import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L19loCKCCKomdcIm6Zh0nnD94xxZodgnL0m6gZ2NQmFE02o8YK0Z1tfK7R1TLnqYBVSxu4PTE0VUQ1r7aAPA7Xp00H9e8NRnN"
);
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
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">{purchaseItem?.displayName}</p>
          <p className="text-success font-bold">{purchaseItem?.email}</p>
          <h2 className="card-title">
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
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm purchaseItem={purchaseItem} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
