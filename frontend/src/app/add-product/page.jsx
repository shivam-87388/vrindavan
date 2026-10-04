import React from 'react'

const page = () => {
  return (
   <div className="min-h-screen flex items-center justify-center bg-[#F4F8FC] p-2.5">
    <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 gap-2">
      <h2 className="w-full text-start text-black text-3xl font-bold font-['Poppins']">Add New Product</h2>

    <form className="flex flex-col items-center lg:justify-between justify-center lg:gap-x-4 gap-y-2">
      {/* product name and product categeory */}
       <div className="flex lg:flex-row flex-col items-center justify-center gap-y-1.5 gap-x-4 w-full">
        {/* product name field  */}
        <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
           <label htmlFor='product-name' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Product Name<span className="text-red-500">*</span>
        </label>
      <input id='product-name' type='text' placeholder='e.g.cement' required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
      </div>
{/* product catagory field*/}
      <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
      <label htmlFor='product-catagory' className="w-full text-start text-black text-sm font-bold font-['Inter']">Product Category<span className="text-red-500">*</span></label>
     
      <select name="product-catagory" id="'product-catagory" className="w-full rounded-md border-2 border-slate-200 px-2.5 h-10 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]">
      <option value="Construction-Material">Construction Material</option>
      <option value=">Wood-&-Plywood">Wood & Plywood</option>
      <option value="Ceiling-Fans-&-Exhaust">Ceiling Fans & Exhaust</option>
      <option value="Sanitaryware-&-Bathing-Fitting">Sanitaryware & Bathing Fitting</option>
      <option value="Tile-&-Flooring">Tile & Flooring</option>
      <option value="Paint-&-Finishing">Paint & Finishing</option>
      <option value="Kitche- Sink-&-Faucet">Kitchen Sink & Faucet</option>
      <option value="Wire-&-MCB">Wire & MCB</option>
      <option value="Home-Appliences">Home Appliences</option>
      <option value="Switchs-&-Shocket">Switchs & Shocket</option>
      <option value="CCTV-&-Surveillance">CCTV & Surveillance</option>
      <option value="Lightning">Lightning</option>
      </select>
        </div>
        </div>

        {/* product name field and stock quantity field */}
        <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-y-1.5 gap-x-4">
        {/* product name field  */}
        <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
           <label htmlFor='product-price' className="w-full text-start text-black text-sm font-bold font-['Inter']">
        Price<span className="text-red-500">*</span>
        </label>
      <input id='product-price' type='text' placeholder='₹ 320' required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
      </div>
{/* stock quantity field*/}
      <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
      <label htmlFor='product-quantity' className="w-full text-start text-black text-sm font-bold font-['Inter']">Stock Quantity<span className="text-red-500">*</span></label>
      <input id='product-quantity' type='number' placeholder='e.g.cement' className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
    </div>
          
        </div>

        {/* description area */}
        <div className="flex flex-col items-center justify-center w-full gap-y-0.5">
        <label htmlFor="description" className="w-full text-start text-black text-sm font-bold font-['Inter']">Description</label>
        <textarea id="description"  rows={3} placeholder="Write details about the product..." required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></textarea>
        </div>
       
        <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
          <label className="w-full text-start text-black text-sm font-bold font-['Inter']">Product Image<span className="text-red-500">*</span></label>
          <input id="product-image" type="file" accept="image/*" className="w-full text-sm text-slate-500 border-2 border-slate-200 rounded-lg p-1.5 file:mr-3 file:py-1 file:px-3 file:rounded-md file:bord file:border-slate-300 file:text-sm file:font-medium file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
        </div>

        <button type='submit' className="w-full text-center text-base font-semibold font-['Inter'] text-white bg-[#FA5C0E] px-2.5 py-2 rounded-md">Add Product</button>
       

     

    
    </form>

    

    </div>
    
    
   </div>
  )
}

export default page