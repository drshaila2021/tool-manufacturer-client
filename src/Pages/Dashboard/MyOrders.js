import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebae.init";
import Loading from "../Shared/Loading";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["myOrders", user], () =>
    fetch(
      `https://mysterious-mountain-06411.herokuapp.com/purchase?user=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 403 || res.status === 401) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  const handleCancelPurchaseOrder = (orderId) => {
    if (orderId) {
      const url = `https://mysterious-mountain-06411.herokuapp.com/purchase/${orderId}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast("Order Canceled !");
            refetch();
          }
        });
    }
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold text-center mb-8">My Orders</h2>
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
            <tr>
              <th>{index + 1}</th>
              <td>{order?.displayName}</td>
              <td>{order?.email}</td>
              <td>{order?.name}</td>
              <td>{order?.orderedQuantity}</td>
              <td>{order?.unitPrice}</td>
              <td>{order?.totalCost}</td>
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
                        <br /> Are you sure to cancle the order?
                      </h3>

                      <div className="modal-action">
                        <label
                          htmlFor="my-modal-6"
                          className="btn"
                          onClick={() => handleCancelPurchaseOrder(order._id)}
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
  );
};

export default MyOrders;
