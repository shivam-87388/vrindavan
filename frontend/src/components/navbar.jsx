import React from 'react'
import { Search, UserRound,ShoppingCart } from 'lucide-react';

const navbar = () => {
  return (
    <div className="flex flex-row items-center justify-around p-4">
      {/* logo section */}
        <div className="flex-1 flex justify-start text-black text-base font-bold font-['Inter'] text-center">Vrindavan Home</div>
        {/* navigation link */}
        <div className=" flex-1 flex justify-between">
          <a href='#' className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Home</a>
          <a href='#' className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Product</a>
          <a href='#' className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Categories</a>
          <a href='#'className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">About</a>
          <a href='#'className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Contact</a>
        </div>
        {/* search box */}
        <div className="felx-1 flex justify-between">
          <div className="flex justify-between items-center outline-2 outline-zinc-700 rounded focus:outline-blue-500">
           <input placeholder="Search for product..."className="text-zinc-700 text-sm font-normal font-['Inter'] py-1.5 focus:outline-none "></input>
           <div className="rounded-[3px] border-l border-zinc-700">
            <Search color="#2068F4" className="px-0.5"/>
           </div>
          </div>
          <div className="flex justify-between">
            {/* login button */}
           <button className="w-24 py-1.5 text-blue-600 text-sm font-semibold font-['Inter'] border-2 border-blue-600 rounded-md">Login</button>
           {/* signup button */}
           <button className="w-24 py-1.5 text-blue-600 text-sm font-semibold font-['Inter'] border-2 border-blue-600 rounded-md">Signup</button>
           <div className="shadow-md p-1.5 rounded-md">
          <ShoppingCart color='#494949'/>
          </div>
          </div>
           

        </div>
       
        
        
    </div>
  )
}

export default navbar