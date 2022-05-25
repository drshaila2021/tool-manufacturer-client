import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    // console.log("inside useToken", user);
    const email = user?.user.email;
    const currentuser = { email: email };

    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json ",
        },
        body: JSON.stringify(currentuser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("inside useToken", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return token;
};

export default useToken;
