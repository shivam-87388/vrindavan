'use client'
import React from 'react'
import { IconShoppingCart, IconSearch } from '@tabler/icons-react';


const navbar = () => {
  return (
    
  <header className="flex flex-row pt-7 pb-4 items-center justify-between px-40">
    <div className="flex-1 flex items-center justify-start">
      <h3 className="text-black text-lg font-semibold font-['Poppins']">Vrindavan Home</h3>
    </div>
    <nav className="flex-1 flex justify-center gap-4 px-2.5">
      <a href='#' className="text-slate-500 text-sm font-bold font-['Inter'] hover:cursor-pointer hover:text-blue-600">Home</a>
      <a href='#' className="text-slate-500 text-sm font-bold font-['Inter'] hover:cursor-pointer hover:text-blue-600">Product</a>
      <a href='#' className="text-slate-500 text-sm font-bold font-['Inter'] hover:cursor-pointer hover:text-blue-600">Categories</a>
      <a href='#' className="text-slate-500 text-sm font-bold font-['Inter'] hover:cursor-pointer hover:text-blue-600">About</a>
      <a href='#' className="text-slate-500 text-sm font-bold font-['Inter'] hover:cursor-pointer hover:text-blue-600">Contact</a>
    </nav>
    <div className="flex-1 flex justify-end gap-2">
      <div className="flex items-center gap-2">
      <div className="flex items-center rounded-md px-1.5 py-0.75 border-2 border-zinc-700">
        <input type="text" placeholder="search product..." className="text-zinc-700 text-base font-normal font-['Inter'] outline-none border-none"></input>
        <IconSearch color="#2068F4" className="px-0.5 border-l-2 border-zinc-700 rounded-md"/>
      </div>
      <a href='#' className="flex items-center justify-center shadow-sm  px-1.5 py-1.5 rounded-md transition-transform duration-150 hover:scale-90">
       <IconShoppingCart/>
      </a>
        <a href='#' className="flex justify-center items-center w-24 px-4 py-1.25 rounded-md border-2 border-blue-600  text-blue-600 text-base font-semibold font-['Inter']">login</a>
        <a href='#' className="flex justify-center items-center w-24 px-4 py-1.25 rounded-md border-2 border-blue-600   bg-blue-600 text-white text-base font-semibold font-['Inter']">Signup</a>
      </div>
      
    </div>
  </header>

  )
}

export default navbar