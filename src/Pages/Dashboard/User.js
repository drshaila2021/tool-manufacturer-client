import { isAdmin } from "@firebase/util";
import React from "react";
import { toast } from "react-toastify";

const User = ({ user, refetch, index }) => {
  const { email, role } = user;

  const handleMakeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast("Admin made successfully");
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={handleMakeAdmin} className="btn btn-sm">
            Make Admin
          </button>
        )}
        {role === "admin" && <span>Admin</span>}
      </td>
      <td>
        <button className="btn btn-sm">Remove User</button>
      </td>
    </tr>
  );
};

export default User;
