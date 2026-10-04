import React from 'react'

const page = () => {
  return (
   <div className="min-h-screen flex items-center justify-center px-4 lg:px-128  bg-[#F6F8FB] ">
    <div className="w-full flex flex-col items-center justify-center bg-white rounded-md shadow-md p-4">
      <h1 className="w-full text-center justify-center text-black text-3xl font-bold font-['Poppins'] pb-4"> signup form</h1>
      
      <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
           <label htmlFor='user-name' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Full Name<span className="text-red-500">*</span>
        </label>
      <input id='user-name' type='text' placeholder='₹ 320' required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
           <label htmlFor='user-email' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Email<span className="text-red-500">*</span>
        </label>
      <input id='user-email' type='email' placeholder='₹ 320' required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
           <label htmlFor='user-password' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Password<span className="text-red-500">*</span>
        </label>
      <input id='user-password' type='password' placeholder='₹ 320' required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
      </div>
      
    </div>
   </div>
  )
}

export default page;