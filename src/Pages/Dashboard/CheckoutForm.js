import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ purchaseItem }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [successMassage, setSuccessMassage] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const { _id, totalCost, displayName, email } = purchaseItem;

  useEffect(() => {
    fetch(
      "https://mysterious-mountain-06411.herokuapp.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ totalCost }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [totalCost]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
      setSuccessMassage("");
    } else {
      setCardError("");
      setProcessing(true);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: displayName,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      setSuccessMassage("");
      setProcessing(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setSuccessMassage("Your Pament is done");
      setTransactionId(paymentIntent.id);

      //   update payment in database

      const payment = {
        purchaseItem: _id,
        transactionId: paymentIntent.id,
      };

      fetch(`https://mysterious-mountain-06411.herokuapp.com/purchase/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ payment }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProcessing(false);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-success mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {successMassage && (
        <div>
          <p className="text-green-500">{successMassage}</p>
          <p className="text-green-500">
            Your Transaction Id is :
            <br />
            {transactionId}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
