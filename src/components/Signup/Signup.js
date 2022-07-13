import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const cpassword = data.cpassword;
    if (password === cpassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setPasswordMatchError(
        <p className="text-danger text-start mt-3">
          Passwords didn't match, try again
        </p>
      );
    }
  };
  let displayError;
  if (error) {
    displayError = <p className="text-danger">{error?.message}</p>;
  }
  if (user) {
    window.location.reload();
  }

  return (
    <div className="d-flex justify-content-between w-100">
      <form onSubmit={handleSubmit(onSubmit)} className="w-50">
        {displayError}
        <div className="d-flex">
          <input
            {...register("firstName", { required: true })}
            className="form-control w-50 rounded-0 bg-light p-2"
            placeholder="First Name"
            type="text"
          />
          <input
            {...register("lastName", { required: true })}
            className="form-control w-50 rounded-0 bg-light p-2"
            placeholder="Last Name"
            type="text"
          />
        </div>

        <input
          {...register("email", { required: true })}
          className="form-control rounded-0 bg-light p-2"
          placeholder="Email"
          type="email"
        />

        <input
          {...register("password", { required: true })}
          className="form-control rounded-0 bg-light p-2"
          placeholder="Password"
          type="password"
        />

        <input
          {...register("cpassword", { required: true })}
          className="form-control rounded-0 bg-light p-2"
          placeholder="Confirm Password"
          type="password"
        />
        {passwordMatchError}
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
