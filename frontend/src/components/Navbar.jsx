'use client'
import React from 'react'
import { IconShoppingCart, IconSearch, IconArrowsCross,IconMenu2 } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a
      href="#"
      className="text-base lg:text-lg font-semibold font-['Poppins'] text-black whitespace-nowrap"
    >
      Vrindavan Home
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
     <a
      href="/"
      className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600 mr-5"
    >
      Home
    </a>

    <a
      href="#"
      className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600 mr-5"
    >
      Product
    </a>

    <a
      href="#"
      className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600 mr-5"
    >
      Categories
    </a>

    <a
      href="/about-us"
      className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600 mr-5"
    >
      About
    </a>

    <a
      href="/contact-us"
      className="whitespace-nowrap text-xs lg:text-sm font-medium font-['Inter'] text-[#566886] hover:text-blue-600 mr-5"
    >
      Contact
    </a>

    </nav>
    <div>
      <input></input>
    </div>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Button
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

  )
}

export default Navbar