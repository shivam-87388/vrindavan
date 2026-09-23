'use client'
import React, { useState } from 'react'
import { IconMail , IconLock, IconArrowNarrowRight, IconEyeOff, IconEye } from '@tabler/icons-react';

const page = () => {
  const [showpassword, setShowpassword ] = useState(false);
  const handleclick = ()=>{
    setShowpassword(!showpassword);
  }
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-slate-50 pl-16 pr-16">
      <form className="bg-white rounded-md shadow-md border border-gray-200 px-6.5 py-3.5">
        <div className="flex flex-col items-center justify-start w-full mb-6">
           <h1 className="w-full text-black text-3xl font-bold font-['Poppins']">Admin Login</h1>
           <p className="w-full text-black text-base font-normal font-['Inter']">Sign in to access your admin panel</p>
        </div>
        {/* email + password senction */}
        <div className="w-full flex flex-col items-center justify-start gap-2.5 mb-3.5">
        {/* email section */}
        <div className="w-full flex flex-col items-center justify-start">
         <label htmlFor="user-email" className="w-full text-black text-sm font-bold font-['Inter']">Email Address</label>
         {/* icon + input field */}
        <div className=" flex-row flex w-full items-center justify-center gap-2.5 border border-gray-200 rounded-md py-1.5 px-1.5 transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
          <IconMail/>
        <input type="email" id="user-email" placeholder="Enter your email" className="w-full flex items-center bg-transparent outline-none focus:outline-none"></input>
        </div>
        </div>
        {/* password section */}
         <div className="w-full flex flex-col items-center justify-start ">
          <label htmlFor="user-password" className="w-full text-black text-sm font-bold font-['Inter']">Password</label>
           {/* icon + input field */}
          <div className=" flex-row flex w-full items-center justify-center gap-2.5 border border-gray-200 rounded-md py-1.5 px-1.5 transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
            <IconLock/>
            <input type={showpassword ? "text":"password"} id="user-password" placeholder="Enter your password" className="w-full flex items-center bg-transparent outline-none focus:outline-none"></input>
            <div onClick={handleclick} className="flex justify-end items-center pr-2">
             {showpassword ? <IconEye/>:<IconEyeOff/>}
            </div>
          </div>
          <a href="#" className="w-full flex justify-end text-sm text-orange-600 font-medium font-['Inter']">forget password?</a>
         </div>
        </div>
         {/* login button */}
        <div className="flex w-full flex-col items-center justify-center">
          <div className=" flex-row w-full flex items-center justify-center gap-1 bg-orange-600 px-3.5 py-2.5 rounded-md hover:cursor-pointer hover:bg-orange-700">
            <button className="flex justify-center  text-white text-base font-semibold font-['Inter']">Login</button>
            <IconArrowNarrowRight stroke={2} color="#ffffff" />
          </div>
          <hr className="w-full border-t-2 mt-5 mb-2 border-gray-200"></hr>
          <div className="flex items-center justify-start gap-1">
            <IconLock stroke={2} color="#ED6200"/>
            <p className="text-black text-base font-normal font-['Inter']">only authorized  personnel can access this panel</p>
          </div>
         </div>
      </form>

    </div>
  )
}

export default page