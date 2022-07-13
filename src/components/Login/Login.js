import React from 'react';

import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="d-flex justify-content-between w-100">
        <form onSubmit={handleSubmit(onSubmit)} className="w-50">
        
  
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
  
         
          <br />
          <input
            type="submit"
            className="btn btn-primary w-100 rounded-pill"
            value="Sign In"
            onClick={handleSubmit(onSubmit)}
          />
          <div>
            <SocialLogin></SocialLogin>
            <small>
            Forgot Password?
            </small>
          </div>
        </form>
        <div className="ms-3 w-50">
          <small>
          Don’t have an account yet?<b className="text-primary">Create new for free!</b>{" "}
          </small>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/651/730/original/flat-design-literary-critic-making-review-and-ranking-piece-free-vector.jpg"
              alt="img"
              className="img-fluid"
            />
          </div>
         
        </div>
      </div>
    );
};

export default Login;