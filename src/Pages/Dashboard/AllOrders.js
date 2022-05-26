import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";

const AllOrders = () => {
  const { data: orders, isLoading } = useQuery("allOrders", () =>
    fetch("http://localhost:5000/purchases", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(orders);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl my-8 font-bold">All orders</h2>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Item Name</th>
              <th>Ordered Qty</th>
              <th>Unit Price</th>
              <th>Total Cost</th>
              <th>Cancel Order</th>
              <th>Payment Status</th>
              <th>Payment Id</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.displayName}</td>
                <td>{order.email}</td>
                <td>{order?.name}</td>
                <td>{order.orderedQuantity}</td>
                <td>{order.unitPrice}</td>
                <td>{order.totalCost}</td>
                <td>
                  <div>
                    <label
                      htmlFor="my-modal-6"
                      className="btn modal-button"
                      disabled={order.paid}
                    >
                      Cancel
                    </label>

                    <input
                      type="checkbox"
                      id="my-modal-6"
                      className="modal-toggle"
                    />
                    <div className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <div className="modal-action">
                          <label
                            htmlFor="my-modal-6"
                            className="btn btn-sm btn-circle absolute right-6 top-2"
                          >
                            ✕
                          </label>
                        </div>

                        <h3 className="font-bold text-lg">
                          {order?.displayName} , <br /> Are you sure to cancle
                          the order?
                        </h3>
                        <p className="py-4">
                          {order?._id} : {order?.name}
                        </p>

                        <div className="modal-action">
                          <label
                            htmlFor="my-modal-6"
                            className="btn"
                            //   onClick={() => handleCancelPurchaseOrder(order._id)}
                          >
                            YES
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {" "}
                  {order.totalCost && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {order.totalCost && order.paid && (
                    <span className="text-success">paid</span>
                  )}
                </td>
                <td>
                  {order.transactionId && (
                    <span className="text-success">{order.transactionId}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
