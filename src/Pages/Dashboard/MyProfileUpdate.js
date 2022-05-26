import React from "react";

const MyProfileUpdate = ({ handleInfoUpdate, profile }) => {
  return (
    <div>
      <label htmlFor="my-modal" className="btn modal-button">
        Update
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
          <h3 className="font-bold text-center">Information Update For</h3>
          <form
            onSubmit={handleInfoUpdate}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="email"
              name="email"
              disabled
              value={profile?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              name="name"
              disabled
              value={profile?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="text"
              name="education"
              placeholder="Education"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="url"
              name="social"
              placeholder="Social Profile"
              className="input input-bordered w-full max-w-xs"
              required
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

export default MyProfileUpdate;
