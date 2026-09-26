'use client'
import React, { useState } from 'react'
import { IconArrowsCross,IconMenu2 } from '@tabler/icons-react';

const page = () => {
    const [show, setShow] = useState(false);
    const handleClick=()=>{
        setShow(!show);
    }
  return (
   
    <header className="flex items-center justify-between p-4">
        <div className="flex justify-start">
       <h3 className="text-black text-lg font-semibold font-['Poppins']">Vrindavan Home</h3>
        </div>
        <button onClick={handleClick} className="px-2.5 py-1.5">{show ?  <IconArrowsCross stroke={2} color="#050505" />: <IconMenu2 stroke={2} color="#050505" />}</button>
        <nav className="flex flex-col items-center justify-center px-2.5 py-1.5 gap-1.5 rounded-md border-2 border-black">
          <a href='#'className="flex item-center justify-center text-slate-500 text-sm font-bold font-['Inter'] hover:text-white hover:bg-blue-600 w-full py-1.5 px-0.5 rounded-md">Home</a>
          <a href='#'className="flex item-center justify-center text-slate-500 text-sm font-bold font-['Inter'] hover:text-white hover:bg-blue-600 w-full py-1.5 px-0.5 rounded-md">Product</a>
          <a href='#'className="flex item-center justify-center text-slate-500 text-sm font-bold font-['Inter'] hover:text-white hover:bg-blue-600 w-full py-1.5 px-0.5 rounded-md">Categories</a>
          <a href='#'className="flex item-center justify-center text-slate-500 text-sm font-bold font-['Inter'] hover:text-white hover:bg-blue-600 w-full py-1.5 px-0.5 rounded-md">About</a>
          <a href='#'className="flex item-center justify-center text-slate-500 text-sm font-bold font-['Inter'] hover:text-white hover:bg-blue-600 w-full py-1.5 px-0.5 rounded-md">Contact</a>
        </nav>
    </header>
  )
}

export default page