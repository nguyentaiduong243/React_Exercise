import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./login-css.css"

type Inputs = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    alert(JSON.stringify(data))
  }; // your form submit function which will invoke after successful validation

  // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <h1>Login</h1>
      <div>
        <label>UserName</label>
        <input {...register("username", { required: true })} />
        {(errors.username && <p>User name is null</p>
      )}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
      </div>
      <br />

      {(errors.password || errors.username) && (
        <p className='error'>This field is required</p>
      )}

      <button type='submit'>Login</button>
    </form>
  );
 
};

export default Login;