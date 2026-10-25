'use client'
import React from 'react'
import { IconShoppingCart, IconSearch, IconArrowsCross,IconMenu2 } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-1.5 py-5.5">
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
      <nav className="flex-1 flex items-center justify-between px-1.5 gap-2 lg:gap-4">
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

    </div>
  );
}

export default Navbar