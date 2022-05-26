import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import contactus from "../../images/contactus-2.jpg";

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, event) => {
    console.log(data);

    const url = `https://mysterious-mountain-06411.herokuapp.com/contactus`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          toast("Thank you for your query!");
        } else {
          toast("Sorry, having trouble to add the query!");
        }
        event.target.reset();
      });
  };
  return (
    <div className="lg:mx-14">
      <h3 className="text-center font-bold my-16 text-3xl">Contact Us</h3>

      <div className="hero rounded-xl shadow-lg justify-center">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <img src={contactus} className=" rounded-lg shadow-2xl" alt="" />

          <div className="card flex-shrink-0 w-full max-w-xs shadow-2xl bg-base-100">
            <div className="card-body max-w-xl ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs ">
                  <label className="label">
                    <span className="label-text">Comment</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Your Comment"
                    className="textarea textarea-bordered h-24 w-full max-w-lg"
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

                <input
                  className="btn w-full max-w-xs text-white"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
