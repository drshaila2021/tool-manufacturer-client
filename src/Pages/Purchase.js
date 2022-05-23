import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../firebae.init";

const Purchase = () => {
  const { toolId } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user, loading] = useAuthState(auth);

  const [tool, setTool] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/tool/${toolId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setTool(result);
      });
  }, [toolId]);

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.unitPrice);

    const orderedQuantity = parseInt(data.orderedQuantity);
    const availableQuantity = parseInt(data.availableQuantity);
    const unitPrice = parseInt(data.unitPrice);
    console.log(typeof unitPrice);
    const totalCost = orderedQuantity * unitPrice;

    const newData = Object.assign({}, data, {
      orderedQuantity: orderedQuantity,
      availableQuantity: availableQuantity,
      unitPrice: unitPrice,
      totalCost: totalCost,
    });
    console.log(newData);
    //   posting one purchased item with user
    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Purchase Detail</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">User Information </span>
              </label>

              <label className="input-group mt-1">
                <span>Name</span>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={user?.displayName}
                  {...register("displayName")}
                />
              </label>

              <label className="input-group mt-1">
                <span>Email</span>
                <input
                  type="email"
                  className="input input-bordered w-full max-w-xs"
                  value={user?.email}
                  {...register("email")}
                />
              </label>

              <label className="input-group mt-1 mb-6">
                <span>Address</span>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="address"
                  {...register("address")}
                />
              </label>

              <label className="label">
                <span className="label-text">Item Information </span>
              </label>

              <label className="input-group mt-1">
                <span>Id</span>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={tool?._id}
                  {...register("id")}
                />
              </label>
              <label className="input-group mt-1">
                <span>Tool</span>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={tool?.name}
                  {...register("name")}
                />
              </label>

              <label className="input-group mt-1">
                <span>Price</span>
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  value={tool.unitPrice}
                  {...register("unitPrice")}
                />
              </label>

              <label className="input-group mt-1">
                <span>Available</span>
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  value={tool.availableQuantity}
                  {...register("availableQuantity")}
                />
              </label>

              <label className="input-group mt-1">
                <span>Order</span>
                <input
                  type="number"
                  className="input input-bordered w-full max-w-xs"
                  placeholder={`min order quantity ${tool.minOrderQuantity}`}
                  {...register("orderedQuantity")}
                />
              </label>
            </div>
            <input
              className="btn w-full max-w-xs text-white mt-2"
              type="submit"
              value="Submit Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
