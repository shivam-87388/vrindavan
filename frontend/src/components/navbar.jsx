'use client'
import React from 'react'
import { IconShoppingCart, IconSearch } from '@tabler/icons-react';


const navbar = () => {
  return (
   <div className="flex flex-row w-full items-center px-40 pb-0.5  pt-7">
    <h3 className="flex-1 text-black text-lg font-semibold font-['Poppins']">Vrindavan<br/>Home</h3>
    <nav className="flex-1 flex flex-row justify-between">
     <a href="text-slate-500 text-sm font- font-['Inter']">Home</a>
     <a href="text-slate-500 text-sm font-bold font-['Inter']">Product</a>
     <a href="text-slate-500 text-sm font-bold font-['Inter']">Categories</a>
     <a href="text-slate-500 text-sm font-bold font-['Inter']">About</a>
     <a href="text-slate-500 text-sm font-bold font-['Inter']">Contact</a>
    </nav>
    <div className="flex-1 flex flex-row justify-between">
      {/* <div className="w-0.5 flex flex-row items-center gap-2 border-2 border-zinc-700 bg-slate-100 rounded-[5px]">
        <input className=""></input>
        <IconSearch/>
      </div>
      <div className="flex flex-row gap-2 justify-between items-center">
      <a href='#' className="flex items-center justify-center py-1.25 px-4 w-24 text-white text-base font-semibold font-['Inter'] rounded-[5px] bg-blue-600">Signup</a>
      <a href='#' className="flex items-center justify-center py-1.25 px-4 w-24 text-blue text-base font-semibold font-['Inter'] rounded-[5px] bg-white border-2 border-blue-600">Login</a>
      </div> */}
      <div className="inline-flex justify-start items-center gap-2">
  <div className="w-52 px-1.5 py-[3px] bg-slate-100 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-zinc-700 flex justify-between items-center">
    <div className="justify-start text-zinc-700 text-base font-normal font-['Inter']">Search for products...</div>
    <div className="p-1 rounded-[3px] border-l border-zinc-700 flex justify-center items-center gap-2.5">
      <div className="w-4 h-4 outline outline-2 outline-offset-[-1px] outline-blue-600" />
    </div>
  </div>
  <div data-property-1="Default" className="w-8 h-8 px-0.5 py-1 bg-white rounded-sm shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden">
    <div className="w-5 h-4 outline outline-2 outline-offset-[-1px] outline-zinc-700" />
  </div>
  <div className="w-48 self-stretch flex justify-start items-center gap-2 flex-wrap content-center">
    <div className="w-24 px-4 py-[5px] bg-white rounded-[5px] outline outline-1 outline-offset-[-1px] outline-blue-600 flex justify-center items-center gap-2.5">
      <div className="justify-start text-blue-600 text-base font-semibold font-['Inter']">Login </div>
    </div>
    <div className="w-24 px-4 py-[5px] bg-blue-600 rounded-[5px] outline outline-1 outline-offset-[-1px] outline-blue-600 flex justify-center items-center">
      <div className="justify-start text-white text-base font-semibold font-['Inter']">Signup</div>
    </div>
  </div>
</div>
    </div>
    
   
   
    

   </div>
  )
}

export default navbar