import React from 'react'

const page = () => {
  return (
   <div className="min-h-screen flex items-center justify-center px-4 lg:px-128  bg-[#F6F8FB] ">
    <form className="w-full flex flex-col items-center justify-center bg-white rounded-md shadow-md p-4">
      <h1 className="w-full text-text-start justify-center text-black text-3xl font-bold font-['Poppins'] pb-4">Add New Product</h1>
       
      
      <div className="flex flex-col items-center justify-between pt-4 gap-1.5 w-full ">
        {/* full name field */}
        <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
           <label htmlFor='user-name' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Full Name
        </label>
      <input id='user-name' type='text' placeholder=" Full name" required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
      </div>

       {/* email field  */}
       <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
           <label htmlFor='user-email' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Email
        </label>
      <input id='user-email' type='email' placeholder="Email" required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
      </div>

      {/* password field */}
      <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
           <label htmlFor='user-password' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Password
        </label>
      <input id='user-password' type='password' placeholder="password" required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
      </div>
      {/* confirm pasword */}
      <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
           <label htmlFor='confirm-password' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Confirm Password</label>
      <input id='confirm-password' type='password' placeholder='Confirm Password' required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
      </div>

      </div>
     {/* signup button  */}
    <button type='submit' className="w-full text-center text-base font-semibold font-['Inter'] text-white bg-[#FA5C0E] px-2.5 py-2 rounded-md mt-4.5">Add Product</button>
    </form>
   </div>
  )
}

export default page