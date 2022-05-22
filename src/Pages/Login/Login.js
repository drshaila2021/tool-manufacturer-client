import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold">Please Login Here</h2>
      <>
        (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email", { required: true })} />
          {errors.firstName?.type === "required" && "First name is required"}

          <input {...register("lastName", { required: true })} />
          {errors.lastName && "Last name is required"}

          <input type="submit" />
        </form>
        );
      </>
    </div>
  );
};

export default Login;
