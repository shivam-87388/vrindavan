'use client'
import React, { useState } from 'react'
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const page = () => {
      const [show, setShow]= useState(false);
    const handleClick = ()=>{
    setShow(!show)
}

const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Password is required')
    .matches(/[a-z]/, 'lowercase letter is required')
    .matches(/[A-Z]/, 'uppercase letter is required')
    .matches(/[0-9]/, 'number is required')
    .matches(/\W/, 'any special character is required')
    .min(6, '6 characters are required'),
});


const loginform = useFormik({
     initialValues: {
      email: "",
       password: '',
     },
     onSubmit: async(values) => {
      try {
        const response = await axios.post("http://localhost:5000/user/login",values);
        console.log(response.data.status);
        console.log("login sucessfully",response.data.message);
       toast.success('login sucessfully');
      } catch (error) {
           const message = error.response?.data?.message || "Login error";
           toast.error(message);
      };
     },
      validationSchema: LoginSchema 
   });

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F6F8FB]">
       <Toaster position="top-center" reverseOrder={false}/>
      <form onSubmit={loginform.handleSubmit} className="w-full max-w-sm flex flex-col items-center justify-center bg-white rounded-md shadow-md p-4">
        <h2 className="w-full text-center justify-center text-black text-3xl font-bold font-['Poppins'] pb-4">
          login form
        </h2>
        <div className="flex flex-col items-center justify-center  gap-1.5 w-full px-2">
            {/* email field */}
          <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
           <label htmlFor='email' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Email
        </label>
      <input id='email' type='email' placeholder="Email" name="email" onChange={loginform.handleChange} value={loginform.values.email} required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
      </div>

    {/* password field */}
      <div className="w-full flex flex-col items-center justify-center gap-y-0.5">

           <label htmlFor='password' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Password
        </label>
        <div className="flex flex-row items-center  justify-center gap-x-0.5 w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 focus-within:border-transparent focus-within:ring-2 focus-within:ring-[#ED6200]">
      <input id='password' type={show? "text":"password"} placeholder="Password" name="password" onChange={loginform.handleChange} value={loginform.values.password} required className="w-full  text-black text-base font-normal font-['Inter']  focus:outline-none "></input>
      <div onClick={handleClick} className="flex items-center justify-center cursor-pointer">
      {
        show?<IconEye/>:<IconEyeOff/>
      }
      </div>
        </div>
      </div>
    

        </div>

         {/* signup button  */}
    <button type='submit' className="w-full text-center text-base font-semibold font-['Inter'] text-white bg-[#FA5C0E] px-2.5 py-2 rounded-md mt-4.5 hover:cursor-pointer">Login</button>

     <div className="flex items-center justify-center p-4">
        <p className="text-center text-sm text-gray-500">If you don't have account? <a href="/SignUp" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</a></p>
      </div>
      </form>
    </div>
  )
};

export default page;
