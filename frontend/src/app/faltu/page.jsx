import React from 'react'
import { IconEdit, IconTrash } from '@tabler/icons-react';

const page = () => {
  return (
   <div className="min-h-screen flex flex-col p-4 w-full ">
    <div className="grid grid-cols-7 gap-1.5 items-start border-b-2 border-slate-200 bg-[#F3F7FD] py-2.5 rounded-md">
        {/* S.no */}
        <div className="flex justify-center items-center">
        <h3 className="text-center font-semibold text-slate-700">S.No</h3>
        </div>
        {/* product image */}
        <div className="flex justify-center items-center">
        <h3 className="text-center font-semibold text-slate-700">Product Image</h3>
        </div>
        {/* product name/ */}
        <div className="flex justify-center items-center">
        <h3 className="text-center font-semibold text-slate-700">Product Name</h3>
        </div>
        {/* product category */}
        <div className="flex justify-center items-center">
        <h3 className="text-center font-semibold text-slate-700">Product Category</h3>
        </div>
        {/* product quantity */}
        <div className="flex justify-center items-center">
        <h3 className="text-center font-semibold text-slate-700">Product Quantity</h3>
        </div>
        {/* product price */}
        <div className="flex justify-center items-center">
        <h3 className="text-center font-semibold text-slate-700">Product Price</h3>
        </div>
        {/* action */}
        <div className="flex justify-center items-center">
        <h3 className="text-center font-semibold text-slate-700">Action</h3>
        </div>
        
    </div>
    <div className="grid grid-cols-7 gap-1.5 py-2 border-b-2 border-slate-200">
        {/* serial no field */}
        <div className="flex items-center justify-center">
       <h3 className="text-center font-medium text-slate-800">1</h3>
        </div>
        {/* image field */}
       <div className="flex items-center justify-center ">
        <img src="/switch&shocket.png" alt='' className="max-h-24 rounded-md"></img>
       </div>
       {/* name  field  */}
        <div className="flex items-center justify-center">
       <h3 className="text-center font-medium text-slate-500">switch & shocket</h3>
        </div>
        {/* product category */}
      <div className="flex items-center justify-center">
       <h3 className="text-center font-medium text-slate-500">wire and switch</h3>
        </div>
        {/* product quantity */}
      <div className="flex items-center justify-center">
       <h3 className="text-center font-medium text-slate-500">500</h3>
        </div>
        {/* product price */}
      <div className="flex items-center justify-center">
       <h3 className="text-center font-medium text-slate-500">₹350</h3>
        </div>
    {/* edit & delete button */}
    <div className="flex flex-row items-center justify-center gap-2.5">
        {/* edit button */}
        <a href="#" className="flex items-center justify-center bg-[#2273F3] p-0.5 rounded-md">
            <IconEdit size={28} stroke={2} color="#fcfcfc"/>
        </a>
        {/* delete button */}
        <a href="#" className="flex items-center justify-center bg-[#EC454A] p-0.5 rounded-md">
           <IconTrash size={28} stroke={2} color="#fcfcfc" />
        </a>
            
    </div>
    </div>

   </div>
  )
}

export default page