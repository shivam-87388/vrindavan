import React from 'react'

const navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between p-4">
        <div className=" text-black text-base font-bold font-['Inter'] text-center">Vrindavan Home</div>
        <div className=" flex justify-between">
          <a href='#' className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Home</a>
          <a href='#' className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Product</a>
          <a href='#' className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Categories</a>
          <a href='#'className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">About</a>
          <a href='#'className="text-slate-500 text-sm font-medium font-['Inter'] hover:text-blue-600">Contact</a>
        </div>
        <div> 

        </div>
    </div>
  )
}

export default navbar