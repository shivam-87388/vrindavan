import React from 'react'
import { Search, UserRound } from 'lucide-react';

const navbar = () => {
  return (
    <div className="flex flex-row items-center justify-around p-4">
        <div className=" text-black text-base font-bold font-['Inter'] text-center">Vrindavan Home</div>
        {/* navigation link */}
        <div className=" flex gap-2.5">
          <a href='#' className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Home</a>
          <a href='#' className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Product</a>
          <a href='#' className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Categories</a>
          <a href='#'className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">About</a>
          <a href='#'className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Contact</a>
        </div>
        {/* Search section */}
        <div className="flex justify-between items-center outline-2 outline-zinc-700 rounded focus:outline-blue-500">
          <input placeholder="Search for product..."className="text-zinc-700 text-sm font-normal font-['Inter'] px-2 py-1.5 focus:outline-none "></input>
          <div className="rounded-[3px] border-l border-zinc-700">
          <Search color="#2068F4" className="px-0.5"/>
          </div>


        </div>
        <div className="flex flex-row gap-2.5 items-center">
          {/* login button */}
       <button className="px-3.5 py-1.5 text-blue-600 text-sm font-semibold font-['Inter'] border-2 border-blue-600 rounded-md">Login</button>
       {/* signup button */}
       <button className="px-3.5 py-1.5 text-blue-600 text-sm font-semibold font-['Inter'] border-2 border-blue-600 rounded-md">Login</button>
        </div>
    </div>
  )
}

export default navbar