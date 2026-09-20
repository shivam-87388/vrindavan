import React from 'react'
import { Search, UserRound,ShoppingCart } from 'lucide-react';

const navbar = () => {
  return (
   <div className="flex flex-row items-center w-full px-6 py-4">
  
  {/* 1. Logo Section (Left Aligned) */}
  <div className="flex-1 flex justify-start items-center">
    <div className="text-black text-base font-bold font-['Inter']">
      Vrindavan Home
    </div>
  </div>

  {/* 2. Navigation Links center align*/}
  <div className="flex-1 flex justify-center items-center gap-6">
    <a href="#" className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600 hover:cursor-pointer hover:underline">Home</a>
    <a href="#" className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600 hover:cursor-pointer hover:underline">Product</a>
    <a href="#" className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600 hover:cursor-pointer hover:underline">Categories</a>
    <a href="#" className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600 hover:cursor-pointer hover:underline">About</a>
    <a href="#" className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600 hover:cursor-pointer hover:underline">Contact</a>
  </div>

  {/* 3. Search Box & Action Buttons */} 
  <div className="flex-1 flex justify-end items-center gap-4">
    
    {/* Search box */}
    <div className="flex items-center border border-zinc-700 rounded overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
      <input 
      type="text"
        placeholder="Search for product..." 
        className="text-zinc-700 text-sm font-normal font-['Inter'] py-1.5 px-3 focus:outline-none w-40 lg:w-48"
      />
      <div className="rounded-md border-l-2 border-zinc-700 flex items-center justify-center px-2 py-1 bg-white cursor-pointer">
        <Search color="#2068F4" size={18} />
      </div>
    </div>

    {/* Auth Buttons & Cart */}
    <div className="flex items-center gap-3">
      {/* login burron */}
      <button className="px-4 py-1.5 text-blue-600 text-sm font-semibold font-['Inter'] border-2 border-blue-600 rounded-md hover:bg-blue-50 hover:cursor-pointer">
        Login
      </button>
      {/* signup button */}
      <button className="px-4 py-1.5 text-white bg-blue-600 text-sm font-semibold font-['Inter'] border-2 border-blue-600 rounded-md hover:bg-blue-700 hover:cursor-pointer">
        Signup
      </button>
      {/* cart button */}
      <button className="shadow-md p-1.5 rounded-md cursor-pointer transition-transform duration-200 ease-out hover:scale-95 transform-gpu will-change-transform flex items-center justify-center hover:cursor-pointer">
        <ShoppingCart color="#494949" size={20} />
      </button>
    </div>

  </div>

</div>
  )
}

export default navbar