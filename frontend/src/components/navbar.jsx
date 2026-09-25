'use client'
import React from 'react'
import { IconShoppingCart, IconSearch } from '@tabler/icons-react';


const navbar = () => {
  return (
    
  <header className="flex flex-row pt-7 items-center justify-between px-40">
    <div className="flex-1 flex items-center justify-start">
      <h3 className="text-black text-lg font-semibold font-['Poppins']">Vrindavan Home</h3>
    </div>

    <nav className="flex-1 flex justify-center">
      <a href=''className="text-slate-500 text-sm font-bold font-['Inter']">Home</a>
    </nav>
    <div className="flex-1 flex justify-end">dc</div>
  </header>

  )
}

export default navbar