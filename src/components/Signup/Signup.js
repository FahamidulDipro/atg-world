import React, { useState } from "react";

import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="d-flex justify-content-between w-100">
      <form onSubmit={handleSubmit(onSubmit)} className="w-50">
        <div className="d-flex">
          <input
            {...register("firstName", { required: true })}
            className="form-control w-50 rounded-0 bg-light p-2"
            placeholder="First Name"
          />
          <input
            {...register("lastName", { required: true })}
            className="form-control w-50 rounded-0 bg-light p-2"
            placeholder="Last Name"
          />
        </div>

        <input
          {...register("email", { required: true })}
          className="form-control rounded-0 bg-light p-2"
          placeholder="Email"
        />

        <input
          {...register("password", { required: true })}
          className="form-control rounded-0 bg-light p-2"
          placeholder="Password"
        />

        <input
          {...register("cpassword", { required: true })}
          className="form-control rounded-0 bg-light p-2"
          placeholder="Confirm Password"
        />
        <br />
        <input
          type="submit"
          className="btn btn-primary w-100 rounded-pill"
          value="Create Account"
          onClick={handleSubmit(onSubmit)}
        />
        <div>
          <SocialLogin></SocialLogin>
        </div>
      </form>
      <div className="ms-3 w-50">
        <small>
          Already have an account? <b className="text-primary">Sign In</b>{" "}
        </small>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/651/730/original/flat-design-literary-critic-making-review-and-ranking-piece-free-vector.jpg"
            alt="img"
            className="img-fluid"
          />
        </div>
        <small style={{ fontSize: "9px" }} className="w-100">
          By signing up, you agree to our Terms & conditions,Privacy policy
        </small>
      </div>
    </div>
  );
};

export default Signup;
