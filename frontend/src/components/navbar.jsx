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
      {/* Desktop + Tablet Navbar */}
<header className="hidden md:flex w-full items-center gap-2 px-2 py-4 lg:gap-5 lg:px-6">

  {/* Logo */}
  <div className="shrink-0">
    <a
      href="#"
      className="text-base lg:text-lg font-semibold font-['Poppins'] text-black whitespace-nowrap"
    >
      Vrindavan Home
    </a>
  </div>


  {/* Navigation */}
  <nav
    aria-label="Main navigation"
    className="flex min-w-0 flex-1 items-center justify-center gap-2 lg:gap-5"
  >
    <a
      href="#"
      className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600"
    >
      Home
    </a>

    <a
      href="#"
      className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600"
    >
      Product
    </a>

    <a
      href="#"
      className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600"
    >
      Categories
    </a>

    <a
      href="#"
      className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600"
    >
      About
    </a>

    <a
      href="#"
      className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600"
    >
      Contact
    </a>
  </nav>


  {/* Right Side Actions */}
  <div className="flex shrink-0 items-center gap-1.5 lg:gap-2">

    {/* Search */}
    <form
      className="flex h-8 items-center rounded-md border border-[#494949] px-1 lg:h-9"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="search"
        placeholder="Search..."
        aria-label="Search products"
        className="w-16 bg-transparent px-1 text-xs font-normal font-['Inter'] text-zinc-700 outline-none placeholder:text-zinc-400 lg:w-28 lg:text-sm"
      />

      <button
        type="submit"
        aria-label="Search products"
        className="flex items-center border-l border-[#494949] pl-1"
      >
        <IconSearch
          size={16}
          color="#2068F4"
          className="lg:h-[18px] lg:w-[18px]"
        />
      </button>
    </form>


    {/* Cart */}
    <button
      type="button"
      aria-label="Shopping cart"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-transform duration-150 hover:scale-95 lg:h-9 lg:w-9"
    >
      <IconShoppingCart
        size={18}
        className="lg:h-5 lg:w-5"
      />
    </button>


    {/* Login */}
    <a
      href="#"
      className="flex h-8 w-14 items-center justify-center rounded-md border border-blue-600 px-1 text-xs font-semibold font-['Inter'] text-blue-600 hover:bg-blue-50 lg:h-9 lg:w-20 lg:text-sm"
    >
      Login
    </a>


    {/* Signup */}
    <a
      href="#"
      className="flex h-8 w-14 items-center justify-center rounded-md border border-blue-600 bg-blue-600 px-1 text-xs font-semibold font-['Inter'] text-white hover:bg-blue-700 lg:h-9 lg:w-20 lg:text-sm"
    >
      Signup
    </a>

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