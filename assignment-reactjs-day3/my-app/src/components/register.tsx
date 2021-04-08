import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import "./register-css.css"
type Inputs = {
  username: string;
  password: string;
  phone:number;
};

const Register = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const [input,setInput]=useState('')

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setInput(JSON.stringify(data));
    
  }; // your form submit function which will invoke after successful validation

  // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='registerform'>
      <h1>Register</h1>
      <div>
        <label>UserName</label>
        <input {...register("username", { required: true })} />
        {(errors.username && <p>User name is null</p>
      )}
      </div>
      <div>
        <label>Password</label>
        <input type="password"{...register("password", { required: true })} />
        {(errors.password && <p>Password is  null</p>
      )}
      </div>
      <div>
        <label>Phone</label>
        <input type="number" {...register("phone", { required: true})} />
      </div>
      {( errors.phone && <p>Phone is null</p>
      )}
     
      <br />

      <div>{input}</div>

      <button type='submit'>Login</button>
    </form>
  );
}

export default Register;