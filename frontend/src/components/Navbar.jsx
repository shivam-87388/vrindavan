'use client'
import React, { useState, useEffect, useRef } from "react";
import { IconShoppingCart, IconSearch, IconArrowsCross,IconMenu2 } from '@tabler/icons-react';

const Navbar = () => {
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
      {/* desktop navbar  */}
    <div className="hidden md:block">
      <header className="flex items-center justify-between px-1.5 py-5.5">
      {/* logo */}
      <div className="flex-1 flex items-center justify-center">
        <a
          href="#"
          className="text-base lg:text-lg font-semibold font-['Poppins'] text-black whitespace-nowrap"
        >
          Vrindavan Home
        </a>
      </div>
      {/* navigation link */}
      <nav className="flex-1 flex items-center justify-center gap-4.5 px-1.5 ">
        <a
          href="/"
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
          href="/about-us"
          className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600"
        >
          About
        </a>

        <a
          href="/contact-us"
          className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600"
        >
          Contact
        </a>
      </nav>
      {/* signup button and search box */}

      <div className="flex flex-1 items-center justify-end gap-2 lg:gap-4">
        {/* Search Bar */}
        <form
          className="flex h-8 w-28 shrink-0 items-center rounded-md border border-[#494949] px-1 sm:w-36 lg:h-9 lg:w-48"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search products"
            className="min-w-0 flex-1 bg-transparent px-1 text-xs font-normal font-['Inter'] text-zinc-700 outline-none placeholder:text-zinc-400 lg:text-sm"
          />

          <button
            type="submit"
            aria-label="Search products"
            className="flex shrink-0 items-center border-l border-[#494949] pl-1"
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
          <IconShoppingCart size={25} />
        </button>

        {/* Login */}
        <a
          href="/login"
          className="flex h-8 w-14 shrink-0 items-center justify-center rounded-md border border-blue-600 px-1 text-xs font-semibold font-['Inter'] text-blue-600 hover:bg-blue-50 lg:h-9 lg:w-20 lg:text-sm"
        >
          Login
        </a>

        {/* Signup */}
        <a
          href="/register"
          className="flex h-8 w-14 shrink-0 items-center justify-center rounded-md border border-blue-600 bg-blue-600 px-1 text-xs font-semibold font-['Inter'] text-white hover:bg-blue-700 lg:h-9 lg:w-20 lg:text-sm"
        >
          Signup
        </a>
      </div>

    </header>
    </div>
    {/* mobile navbar  */}
    
<header className="relative flex md:hidden items-center gap-2 px-3 py-4">
  {/* Logo */}
 <div className="shrink-0">
  <h3 className="whitespace-nowrap text-sm min-[375px]:text-base font-semibold font-['Poppins'] text-black">
    Vrindavan Home
  </h3>
</div>

  {/* Search, Cart and Menu */}
  <div className="flex flex-1 min-w-0 items-center gap-1.5">
    {/* Search */}
    <div className="flex flex-1 min-w-0 items-center gap-2">
  {/* Search */}
  <form
  onSubmit={(e) => e.preventDefault()}
  className="flex flex-1 min-w-0 items-center h-9 rounded-md border border-[#494949] px-1.5"
>
  <input
    type="search"
    placeholder="Search..."
    aria-label="Search products"
    className="w-full min-w-0 bg-transparent px-1 text-sm outline-none placeholder:text-zinc-400"
  />

  <button type="submit" aria-label="Search products" className="shrink-0">
    <IconSearch size={20} color="#2068F4" />
  </button>
</form>

  {/* Cart */}
  <a href="#" aria-label="Shopping cart" className="shrink-0 p-1">
    <IconShoppingCart size={22} stroke={2} color="#050505" />
  </a>

  {/* Keep your existing mobile menu here */}
</div>
  

    {/* Mobile Menu */}
    <div ref={navRef} className="relative shrink-0">
      <button
        type="button"
        onClick={handleClick}
        aria-label={show ? "Close menu" : "Open menu"}
        aria-expanded={show}
        className="flex items-center justify-center p-1"
      >
        {show ? (
          <IconArrowsCross size={22} stroke={2} color="#050505" />
        ) : (
          <IconMenu2 size={22} stroke={2} color="#050505" />
        )}
      </button>

      {show && (
        <nav className="absolute right-0 top-full z-50 mt-2 flex w-40 flex-col gap-1 rounded-md border border-zinc-200 bg-white p-2 shadow-lg">
          <a href="/" className="flex items-center justify-center rounded-md px-2 py-2 text-sm font-bold text-slate-600 hover:bg-blue-600 hover:text-white">
            Home
          </a>

          <a href="#" className="flex items-center justify-center rounded-md px-2 py-2 text-sm font-bold text-slate-600 hover:bg-blue-600 hover:text-white">
            Product
          </a>

          <a href="#" className="flex items-center justify-center rounded-md px-2 py-2 text-sm font-bold text-slate-600 hover:bg-blue-600 hover:text-white">
            Categories
          </a>

          <a href="/about-us" className="flex items-center justify-center rounded-md px-2 py-2 text-sm font-bold text-slate-600 hover:bg-blue-600 hover:text-white">
            About
          </a>

          <a href="/contact-us" className="flex items-center justify-center rounded-md px-2 py-2 text-sm font-bold text-slate-600 hover:bg-blue-600 hover:text-white">
            Contact
          </a>

          <a href="/login" className="flex items-center justify-center rounded-md px-2 py-2 text-sm font-bold text-blue-600 ring-1 ring-blue-600 hover:bg-blue-600 hover:text-white">
            Login
          </a>

          <a href="/register" className="flex items-center justify-center rounded-md bg-blue-600 px-2 py-2 text-sm font-bold text-white hover:bg-blue-700">
            Signup
          </a>
        </nav>
      )}
    </div>
  </div>
</header>

    </div>
    
   
  );
}

export default Navbar