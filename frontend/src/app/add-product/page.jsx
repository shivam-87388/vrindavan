import React from 'react'

const page = () => {
  return (
   <div className="min-h-screen flex items-center justify-center bg-[#F4F8FC]">
    <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 gap-2">
      <h2 className="w-full text-start text-black text-3xl font-bold font-['Poppins']">Add New Product</h2>

    <form className="flex flex-col items-center justify-between lg:gap-x-4 gap-y-2">
      {/* product name and product categeory */}
       <div className='flex lg:flex-row items-center justify-center gap-y-1.5 gap-x-4'>
        {/* product name field  */}
        <div className='flex flex-col items-center justify-center gap-y-0.5"'>
           <label htmlFor='product-name' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Product Name<span className="text-red-500">*</span>
        </label>
      <input id='product-name' type='text' placeholder='e.g.cement' required className="rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter']"></input>
      </div>
{/* product catagory field*/}
      <div className="flex flex-col items-center justify-center gap-y-0.5">
      <label htmlFor='product-catagory' className="w-full text-start text-black text-sm font-bold font-['Inter']">Product Category<span className="text-red-500">*</span></label>
      <input id='product-catagory' type='text' placeholder='e.g.cement' className="rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter']"></input>
      </div> 
        </div>

        {/* product name field and stock quantity field */}
        <div className='flex lg:flex-row flex-col items-center justify-center gap-y-1.5 gap-x-4'>
        {/* product name field  */}
        <div className='flex flex-col items-center justify-center gap-y-0.5'>
           <label htmlFor='product-price' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Price<span className="text-red-500">*</span>
        </label>
      <input id='product-price' type='text' placeholder='₹ 320' required className="rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter']"></input>
      </div>
{/* stock quantity field*/}
      <div className="flex flex-col items-center justify-center gap-y-0.5">
      <label htmlFor='product-quantity' className="w-full text-start text-black text-sm font-bold font-['Inter']">Stock Quantity<span className="text-red-500">*</span></label>
      <input id='product-quantity' type='number' placeholder='e.g.cement' className="rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter']"></input>
    </div>
          
        </div>

        {/* description area */}
        <div className="flex flex-col items-center justify-center w-full gap-y-0.5">
        <label htmlFor="description" className="w-full text-start text-black text-sm font-bold font-['Inter']">Description</label>
        <textarea id="description"  rows={3} placeholder="Write details about the product..." required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 font-['Inter']"></textarea>
        </div>
       
        <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
          <label className="w-full text-start text-black text-sm font-bold font-['Inter']">Product Image<span className="text-red-500">*</span></label>
          <input id="product-image" type="file" accept="image/*" className="w-full text-sm text-slate-500 border-2 border-slate-200 rounded-lg p-1.5 file:mr-3 file:py-1 file:px-3 file:rounded-md file:bord file:border-slate-300 file:text-sm file:font-medium file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer"></input>
        </div>

        <button className="ttext-center text-base font-semibold font-['Inter'] text-white bg-[#FA5C0E] px-2.5 py-2 rounded-md">Add Product</button>
       

     

    
    </form>

    

    </div>
    
    
   </div>
  )
}

export default page