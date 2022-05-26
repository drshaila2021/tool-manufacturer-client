import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebae.init";
import Loading from "../Shared/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data, event) => {
    console.log(data);

    const rating = parseInt(data.rating);
    const displayName = user.displayName;
    const email = user.email;

    const newData = Object.assign({}, data, {
      rating: rating,
      displayName: displayName,
      email: email,
    });

    const url = `https://mysterious-mountain-06411.herokuapp.com/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          toast("Thank you for your review!");
        } else {
          toast("Sorry, having trouble to add the review!");
        }
        event.target.reset();
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Add Reviews</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Comment</span>
              </label>
              <textarea
                type="text"
                placeholder="Your Comment"
                className="textarea textarea-bordered h-24 w-full max-w-xs"
                {...register("comment", {
                  required: {
                    value: true,
                    message: "Comment is Required",
                  },
                  maxLength: {
                    value: 250,
                    message: "Max length 250",
                  },
                  pattern: {
                    value: /^\s*\S[\s\S]*$/,
                    message: "Blank is not allowed",
                  },
                })}
              />
              <label className="label">
                {errors.comment?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.comment.message}
                  </span>
                )}
                {errors.comment?.type === "maxLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.comment.message}
                  </span>
                )}
                {errors.comment?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.comment.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                placeholder="rating"
                className="input input-bordered w-full max-w-xs"
                {...register("rating", {
                  required: {
                    value: true,
                    message: "Rating is Required",
                  },
                  min: {
                    value: 1,
                    message: "Min value is 1",
                  },
                  max: {
                    value: 5,
                    message: "Max value is 5",
                  },
                })}
              />
              <label className="label">
                {errors.rating?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.rating.message}
                  </span>
                )}
                {errors.rating?.type === "min" && (
                  <span className="label-text-alt text-red-500">
                    {errors.rating.message}
                  </span>
                )}
                {errors.rating?.type === "max" && (
                  <span className="label-text-alt text-red-500">
                    {errors.rating.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Submit Review"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
