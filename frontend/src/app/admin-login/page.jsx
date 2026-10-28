'use client'
import React, { useState } from 'react'
import { IconMail , IconLock, IconArrowNarrowRight, IconEyeOff, IconEye } from '@tabler/icons-react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';


const page = () => {
  const [showpassword, setShowpassword ] = useState(false);
  const handleclick = ()=>{
    setShowpassword(!showpassword);
  };

const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
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
        const response = await axios.post("http://localhost:5000/admin/login",values);
        console.log(response.data.status);
        console.log("Account created sucessfully",response.data.message);
       toast.success('Account created sucessfully');
      } catch (error) {
           const message = error.response?.data?.message || "Login error";
           toast.error(message);
      };
     },
      validationSchema: LoginSchema
   });


  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-slate-50 p-4">
      <form  onSubmit={loginform.handleSubmit} className="w-full max-w-md bg-white rounded-md shadow-md border border-gray-200 p-4">
        <div className="flex flex-col items-center justify-start w-full mb-6">
           <h1 className="w-full text-black text-3xl font-bold font-['Poppins']">Admin Login</h1>
           <p className="w-full text-black text-base font-normal font-['Inter']">Sign in to access your admin panel</p>
        </div>
        {/* email + password senction */}
        <div className="w-full flex flex-col items-center justify-start gap-2.5 mb-3.5">
        {/* email section */}
        <div className="w-full flex flex-col items-center justify-start">
         <label htmlFor="email" className="w-full text-black text-sm font-bold font-['Inter']">Email Address</label>
         {/* icon + input field */}
        <div className=" flex-row flex w-full items-center justify-center gap-2.5 border border-gray-200 rounded-md py-1.5 px-1.5 transition-all focus-within:border-transparent focus-within:ring-2 focus-within:ring-[#ED6200]">
          <IconMail/>
        <input type="email" id="email" name="email" onChange={loginform.handleChange} value={loginform.values.email} onBlur={loginform.handleBlur} placeholder="Enter your email" className="w-full flex items-center bg-transparent outline-none focus:outline-none"></input>
        </div>
         {loginform.touched.email && loginform.errors.email && (
          <span className="text-red-500 text-xs text-left w-full">
          {loginform.errors.email}
          </span>
          )}
        </div>
        {/* password section */}
         <div className="w-full flex flex-col items-center justify-start ">
          <label htmlFor="password" className="w-full text-black text-sm font-bold font-['Inter']">Password</label>
           {/* icon + input field */}
          <div className=" flex-row flex w-full items-center justify-center gap-2.5 border border-gray-200 rounded-md py-1.5 px-1.5 transition-all focus-within:border-transparent focus-within:ring-2 focus-within:ring-[#ED6200]">
            <IconLock/>
            <input type={showpassword ? "text":"password"} id="password" name="password" onChange={loginform.handleChange} value={loginform.values.password} onBlur={loginform.handleBlur} placeholder="Enter your password" className="w-full flex items-center bg-transparent outline-none focus:outline-none"></input>
            <div onClick={handleclick} className="flex justify-end items-center pr-2 hover:cursor-pointer">
             {showpassword ? <IconEye/>:<IconEyeOff/>}
            </div>
          </div>
          {loginform.touched.password && loginform.errors.password && (
          <span className="text-red-500 text-xs text-left w-full">
          {loginform.errors.password}
          </span>
          )}
          <a href="#" className="w-full flex justify-end text-sm text-orange-600 font-medium font-['Inter']">forget password?</a>
         </div>
        </div>
         {/* login button */}
        <div className="flex w-full flex-col items-center justify-center">
          <button type="submit" className="flex w-full items-center justify-center gap-0.5 rounded-md bg-orange-600 px-3.5 py-2.5 font-['Inter'] text-base font-semibold text-white transition-colors hover:bg-orange-700  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 hover:cursor-pointer"><span>Login</span> <IconArrowNarrowRight stroke={2} className="h-5 w-5 text-white" /></button>
          <hr className="w-full border-t-2 mt-5 mb-2 border-gray-200"></hr>
          <div className="w-full flex flex-row items-center justify-center gap-1">
            <IconLock stroke={2} color="#ED6200" className='flex '/>
            <p className="text-black text-base font-normal font-['Inter']">only authorized person can access this panel</p>
          </div>
         </div>
      </form>

    </div>
  )
}

export default page