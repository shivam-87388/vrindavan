'use client'
import React from 'react'
import { IconShoppingCart, IconSearch, IconArrowsCross,IconMenu2 } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-center py-5.5">
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
      <nav className="flex-1 flex items-center justify-center gap-4">
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
      <div className="flex-1 flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center"></div>
        <div className="w-1/2 flex items-center justify-between">
          {/* loogin button */}
          <a
            href="/login"
            className="flex h-8 w-14 items-center justify-center rounded-md border border-blue-600 px-1 text-xs font-semibold font-['Inter'] text-blue-600 hover:bg-blue-50 lg:h-9 lg:w-20 lg:text-sm"
          >
            Login
          </a>
          {/* signup button */}
          <a
            href="/register"
            className="flex h-8 w-14 items-center justify-center rounded-md border border-blue-600 bg-blue-600 px-1 text-xs font-semibold font-['Inter'] text-white hover:bg-blue-700 lg:h-9 lg:w-20 lg:text-sm"
          >
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar