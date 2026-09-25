'use client'
import React from 'react'
import { IconShoppingCart, IconSearch } from '@tabler/icons-react';


const navbar = () => {
  return (
   <div className="flex flex-row w-full items-center px-40 pb-0.5  pt-7">
    <h3 className="flex-1 text-black text-lg font-semibold font-['Poppins']">Vrindavan<br/>Home</h3>
    <nav className="flex-1 flex flex-row justify-center gap-4">
     <a href="text-slate-500 text-sm font- font-['Inter']">Home</a>
     <a href="text-slate-500 text-sm font-bold font-['Inter']">Product</a>
     <a href="text-slate-500 text-sm font-bold font-['Inter']">Categories</a>
     <a href="text-slate-500 text-sm font-bold font-['Inter']">About</a>
     <a href="text-slate-500 text-sm font-bold font-['Inter']">Contact</a>
    </nav>
    <div className="flex items-center rounded-md border-2 bg-slate-100 border-zinc-700 py-1 px-1.5">
      <input type="text" placeholder="Search for products..." className="text-zinc-700 text-base font-normal font-['Inter']"></input>
      <IconSearch color='#2068F4' stroke={2} size={40} className="border-l-3 border-zinc-700 rounded-md px-0.5"/>

    </div>
    <div className="flex items-center justify-center gap-2">
      <a href='#' className="text-blue-600 text-base font-semibold font-['Inter'] w-24 px-4 py-1.25">Login</a>
    </div>
    
   
   
    

   </div>
  )
}

export default navbar