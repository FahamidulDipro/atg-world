import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='d-flex'>
            <input {...register("firstName", { required: true})} className="form-control w-50 rounded-0 bg-light p-3" placeholder='First Name'/>
        <input {...register("lastName", { required: true})} className="form-control w-50 rounded-0 bg-light p-3" placeholder='Last Name'/>
            </div>
  
        <input {...register("email", { required: true})} className="form-control rounded-0 bg-light p-3" placeholder='Email'/>
       
        <input {...register("password", { required: true})} className="form-control rounded-0 bg-light p-3" placeholder='Password'/>
       
        <input {...register("cpassword", { required: true})} className="form-control rounded-0 bg-light p-3" placeholder='Confirm Password'/>
      <br />
        <input type="submit" className='btn btn-primary w-100 rounded-pill' value="Create Account"/>
      </form>
    );
};

export default Signup;