'use client'
import React, { useState, useEffect, useRef } from "react";
import { IconShoppingCart, IconSearch, IconArrowsCross,IconMenu2 } from '@tabler/icons-react';


const navbar = () => {
  const [show, setShow] = useState(false);
  const navRef = useRef(null);
  const handleClick = () => {
    setShow(!show);
  };
    useEffect(() => {
    const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setShow(false);
       }
    };

  document.addEventListener("mousedown", handleOutsideClick);
  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
  };
}, []);
  return (
    <div>
      {/* desktop navbar */}
      <header className="hidden md:flex flex-row pt-7 pb-4 items-center justify-between px-4 ">
    <div className="flex-1 flex items-center justify-start">
      <h3 className="text-black text-lg font-semibold font-['Poppins']">Vrindavan Home</h3>
    </div>
    <nav className="flex-1 flex justify-center gap-4 px-2.5">
      <a href='#' className="text-[#566886] text-sm font-bold font-['Inter'] hover:cursor-pointer hover:text-blue-600">Home</a>
      <a href='#' className="text-[#566886] text-sm font-bold font-['Inter'] hover:cursor-pointer hover:text-blue-600">Product</a>
      <a href='#' className="text-[#566886] text-sm font-bold font-['Inter'] hover:cursor-pointer hover:text-blue-600">Categories</a>
      <a href='#' className="text-[#566886] text-sm font-bold font-['Inter'] hover:cursor-pointer hover:text-blue-600">About</a>
      <a href='#' className="text-[#566886] text-sm font-bold font-['Inter'] hover:cursor-pointer hover:text-blue-600">Contact</a>
    </nav>
    <div className="flex-1 flex justify-end gap-2">
      <div className="flex items-center gap-2">
      <div className="flex items-center rounded-md px-1.5 py-0.75 border-2 border-[#494949]">
        <input type="text" placeholder="search product..." className="text-zinc-700 text-base font-normal font-['Inter'] outline-none border-none"></input>
        <IconSearch color="#2068F4" className="px-0.5 border-l-2 border-[#494949] rounded-md"/>
      </div>
      <a href='#' className="flex items-center justify-center shadow-sm  px-1.5 py-1.5 rounded-md transition-transform duration-150 hover:scale-90">
       <IconShoppingCart/>
      </a>
        <a href='#' className="flex justify-center items-center w-24 px-4 py-1.25 rounded-md border-2 border-blue-600  text-blue-600 text-base font-semibold font-['Inter']">login</a>
        <a href='#' className="flex justify-center items-center w-24 px-4 py-1.25 rounded-md border-2 border-blue-600   bg-blue-600 text-white text-base font-semibold font-['Inter']">Signup</a>
      </div>
      
    </div>
  </header>

{/* mobile navbar */}
  <header className="relative flex md:hidden items-center justify-between p-4">
        <div className="flex justify-start">
       <h3 className="text-black text-lg font-semibold font-['Poppins']">Vrindavan Home</h3>
        </div>

         <div ref={navRef} className="flex flex-col mr-2.5">
          <button onClick={handleClick} className="px-2.5 py-1.5">{show ?  <IconArrowsCross stroke={2} color="#050505" />: <IconMenu2 stroke={2} color="#050505" />}</button>
        {show? <nav className="absolute right-0 top-full mt-2 flex flex-col items-center justify-center px-2.5 py-1.5 gap-1.5 rounded-md border-2 border-black bg-white shadow-lg z-50 w-36">
          
          <a href='#'className="flex item-center justify-center text-slate-500 text-sm font-bold font-['Inter'] hover:text-white hover:bg-blue-600 w-full py-1.5 px-0.5 rounded-md">Home</a>
          <a href='#'className="flex item-center justify-center text-slate-500 text-sm font-bold font-['Inter'] hover:text-white hover:bg-blue-600 w-full py-1.5 px-0.5 rounded-md">Product</a>
          <a href='#'className="flex item-center justify-center text-slate-500 text-sm font-bold font-['Inter'] hover:text-white hover:bg-blue-600 w-full py-1.5 px-0.5 rounded-md">Categories</a>
          <a href='#'className="flex item-center justify-center text-slate-500 text-sm font-bold font-['Inter'] hover:text-white hover:bg-blue-600 w-full py-1.5 px-0.5 rounded-md">About</a>
          <a href='#'className="flex item-center justify-center text-slate-500 text-sm font-bold font-['Inter'] hover:text-white hover:bg-blue-600 w-full py-1.5 px-0.5 rounded-md">Contact</a>
        </nav>:""}

         </div>
        
        
    </header>


  
    </div>
  

  )
}

export default navbar