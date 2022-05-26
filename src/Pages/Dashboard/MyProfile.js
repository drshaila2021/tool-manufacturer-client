import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebae.init";
import Loading from "../Shared/Loading";
import MyProfileUpdate from "./MyProfileUpdate";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  const email = user?.email;
  const displayName = user?.displayName;
  const {
    data: profile,
    isLoading,
    refetch,
  } = useQuery(["myProfile", email], () =>
    fetch(`https://mysterious-mountain-06411.herokuapp.com/user/${email}`).then(
      (res) => res.json()
    )
  );
  console.log(profile);
  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  const handleInfoUpdate = (event) => {
    event.preventDefault();

    const profileData = {
      email: email,
      displayName: displayName,
      phone: event.target.phone.value,
      address: event.target.address.value,
      education: event.target.education.value,
      socialProfile: event.target.social.value,
    };

    fetch(`https://mysterious-mountain-06411.herokuapp.com/profile/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(`Information Update ! May close the modal, Thank you.`);
        } else {
          toast.error(
            `Sorry, something went wrong, close the modal and try later...`
          );
        }
        refetch();
        event.target.reset();
      });
  };

  let cellData = (
    <MyProfileUpdate
      handleInfoUpdate={handleInfoUpdate}
      profile={profile}
    ></MyProfileUpdate>
  );
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-4 mb-8">My Profile</h2>
      <div className="overflow-x-auto mx-2">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="py-10"></th>
              <th>Info Type</th>
              <th>Info Detail</th>
              <th>Update Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Email</td>
              <td>{profile?.email}</td>
              <td>
                <div>
                  <button className="btn btn-disabled">Update</button>
                </div>
              </td>
            </tr>

            <tr>
              <th>2</th>
              <td>Name</td>
              <td>{profile?.displayName}</td>
              <td>{cellData}</td>
            </tr>

            <tr>
              <th>3</th>
              <td>Phone</td>
              <td>{profile?.phone}</td>
              <td>{cellData}</td>
            </tr>

            <tr>
              <th>4</th>
              <td>Address</td>
              <td>{profile?.address}</td>
              <td>{cellData}</td>
            </tr>

            <tr>
              <th>5</th>
              <td>Education</td>
              <td>{profile?.education}</td>
              <td>{cellData}</td>
            </tr>

            <tr>
              <th>6</th>
              <td>Social Profile</td>
              <td>{profile?.socialProfile}</td>
              <td>{cellData}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
