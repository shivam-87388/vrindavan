import React from 'react'

const page = () => {
  return (
   <div className="min-h-screen flex items-center justify-center bg-[#F4F8FC]">
    <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 gap-2">
      <h2 className="w-full text-start text-black text-3xl font-bold font-['Poppins']">Add New Product</h2>
    <div className="flex flex-col items-center justify-between lg:gap-x-4 gap-y-2">
       <div className='flex lg:flex-row flex-col items-center justify-center gap-y-1.5 gap-x-4'>
        {/* product name field  */}
        <div className='flex flex-col items-center justify-center'>
           <label htmlFor='product-name' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Product Name<span className="text-red-500">*</span>
        </label>
      <input id='product-name' type='text' placeholder='e.g.cement' required className="rounded-md border-2 border-slate-200 px-2.5 py-1.5"></input>
      </div>
{/* product catagory field*/}
      <div className="flex flex-col items-center justify-center gap-y-0.5">
      <label htmlFor='product-catagory' className="w-full text-start text-black text-sm font-bold font-['Inter']">Product Category<span className="text-red-500">*</span></label>
      <input id='product-catagory' type='text' placeholder='e.g.cement' className="rounded-md border-2 border-slate-200 px-2.5 py-1.5"></input>
    </div>
          
        </div>

        <div className='flex lg:flex-row flex-col items-center justify-center gap-y-1.5 gap-x-4'>
        {/* product name field  */}
        <div className='flex flex-col items-center justify-center'>
           <label htmlFor='product-price' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Price<span className="text-red-500">*</span>
        </label>
      <input id='product-price' type='number' placeholder='₹ 320' required className="rounded-md border-2 border-slate-200 px-2.5 py-1.5"></input>
      </div>
{/* product catagory field*/}
      <div className="flex flex-col items-center justify-center gap-y-0.5">
      <label htmlFor='product-quantity' className="w-full text-start text-black text-sm font-bold font-['Inter']">Stock Quantity<span className="text-red-500">*</span></label>
      <input id='product-quantity' type='number' placeholder='e.g.cement' className="rounded-md border-2 border-slate-200 px-2.5 py-1.5"></input>
    </div>
          
        </div>
        {/* description area */}
        <div className="flex flex-col items-center justify-center w-full">
        <label className="w-full text-start text-black text-sm font-bold font-['Inter']">Description</label>
        <input id='product-name' type='text' placeholder='e.g.cement' required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5"></input>
        </div>

        <div className="flex flex-row items-center justify-center">
          <label>Product Image</label>
          
        </div>
       

     

    
    </div>

    

    </div>
    
    
   </div>
  )
}

export default page