import React from "react";

const CancelOrder = ({ handleCancelPurchaseOrder, order }) => {
  const { _id, name } = order;
  console.log(_id, name);

  return (
    <div>
      <label
        htmlFor="my-modal"
        className="btn modal-button"
        onClick={() => handleCancelPurchaseOrder(order._id)}
      >
        Cancel
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-center">
            Are Your Sure to Cancel Order For
          </h3>
          <form
            onSubmit={() => handleCancelPurchaseOrder(order._id)}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              name="orderId"
              disabled
              value={order?._id || ""}
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              name="name"
              disabled
              value={order?.name || ""}
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              value="Submit"
              className="btn w-full max-w-xs btn-primary"
            />
          </form>
          <div className="divider w-full max-w-xs mx-16 pl-2">AND / OR</div>
          <div className="modal-action flex justify-center ">
            <label htmlFor="my-modal" className="btn px-5 w-full max-w-xs">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrder;
