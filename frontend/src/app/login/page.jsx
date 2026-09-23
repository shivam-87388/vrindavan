import React from 'react'
import { IconMail , IconLock } from '@tabler/icons-react';

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-slate-50">
      <form className="bg-white rounded-md shadow-md border border-bg-gray-200 px-2.5 py-3">
        <div className="flex flex-col items-center justify-start w-full">
           <h1 className="w-full text-black text-3xl font-bold font-['Poppins']">Admin Login</h1>
           <p className="w-full text-black text-base font-normal font-['Inter']">Sign in to access your admin panel</p>
        </div>
        {/* email + password senction */}
        <div className="w-full flex flex-col items-center justify-start gap-2.5">
        {/* email section */}
        <div className="w-full flex flex-col items-center justify-start">
         <label htmlFor="user-email" class="w-full text-black text-sm font-bold font-['Inter']">Email Address</label>
         {/* icon + input field */}
        <div className=" flex-row flex w-full items-center justify-center gap-0.5 border border-gray-200 rounded-md">
          <IconMail/>
        <input type="email" id="user-email" placeholder="Enter your email" className="w-full flex items-center"></input>
        </div>
        {/* password section */}
         <div className="w-full flex flex-col items-center justify-start">
          <label htmlFor="user-password" class="w-full text-black text-sm font-bold font-['Inter']">Password</label>
           {/* icon + input field */}
          <div className=" flex-row flex w-full items-center justify-center gap-0.5 border border-gray-200 rounded-md">
            <IconLock/>
            <input type="password" id="user-password" placeholder="Enter your password" className="w-full flex items-center"></input>
          </div>
          
         </div>

        </div>
        
        {/* password section */}
        
        
        
        </div>
        
     
      </form>

    </div>
  )
}

export default page