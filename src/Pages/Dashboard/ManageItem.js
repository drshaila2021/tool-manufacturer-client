import React, { useEffect, useState } from "react";

const ManageItem = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-mountain-06411.herokuapp.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl my-8 font-bold">All Items</h2>

      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Min Order</th>
              <th>Quantity</th>
              <th>unit Price</th>
              <th>Description</th>
              <th> Add Item</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool._id}>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={tool.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{tool.name}</td>
                <td>{tool.minOrderQuantity}</td>
                <td>{tool.availableQuantity}</td>
                <td>{tool.unitPrice}</td>
                <td>{tool.description}</td>
                <th>
                  <button class="btn btn-ghost btn-xs">Add Item</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
