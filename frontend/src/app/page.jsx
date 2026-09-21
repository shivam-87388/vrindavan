import React from 'react'
import { IconArrowNarrowRight, IconShieldBolt } from '@tabler/icons-react';

const homepage = () => {
  return (
    <div className="min-h-screen">
      {/* hero section */}
      <div className="bg-[url('/hero.png')] bg-cover bg-center min-h-137.5 w-full flex items-center px-10 md:px-20">
      <div className="flex flex-col item-center justify-start gap-2.5 w-140">
        <h2 className="w-full text-start text-orange-500 text-sm font-semibold font-['Inter']">BUILDING BETTER TOMORROW</h2>
        <h1 className="text-start text-black text-5xl font-bold font-['Poppins']">Quality Construction Material for Every Project.</h1>
        <p className="text-start leading-6 text-black text-lg font-normal font-['Inter']">Cement, Bricks, Steel, Sand and many more items - all in one place. Trusted by builder, contractors and homeowners.</p>
        {/* button section */}
        <div className=" flex flex-row gap-4">
          {/* shop now button */}
          <div className="flex item-center justify-center bg-orange-600 w-32 py-2.5 rounded-md hover:cursor-pointer">
          <button className="text-white text-[16px] font-semibold font-['Inter'] hover:cursor-pointer">Shop Now</button>
          <IconArrowNarrowRight color='#ffffff'/>
          </div>
          {/* explore product button*/}
          <div className="flex item-center justify-center bg-blue-50 w-32 py-2.5 rounded-md border-blue-500 border-2 hover:cursor-pointer">
            <button className="text-blue-500 text-[16px] font-semibold font-['Inter'] hover:cursor-pointer">Explore Product</button>
          </div>

        </div>

      </div>
      </div>
      {/* end hero section */}
        {/* card section start */}
      <div className="flex items-center justify-center mt-4 mb-4 w-full border-b-2 border-b-zinc-200 pb-1.5">
       {/* card row section */}
        <div className="flex flex-row justify-around items-center px-2 py-4.5 w-280 bg-indigo-50 rounded-md">
          {/* trusted quality card section */}
          <div className="flex flex-row item justify-start w-72 shadow-md gap-2 px-3.5 py-4 rounded-md border-2 border-gray-50">
           <div className="flex items-center justify-center p-2 bg-white rounded-md">
           <IconShieldBolt color='#0252F6' stroke={2.5} />
           </div>
           <div className="flex flex-col items-center justify-start">
            <h2 className="text-black text-[16px] font-semibold font-['Inter']">Trusted Quality</h2>
            <p className="text-center text-black text-[14px] font-normal font-['Inter']">100% Genuine</p>
           </div>

          </div>
          {/* fast delivery card */}
          <div className="flex flex-row item justify-start w-72 shadow-md gap-2 px-3.5 py-4 rounded-md border-2 border-gray-50">
           <div className="flex items-center justify-center p-2 bg-white rounded-md">
           <IconShieldBolt color='#0252F6' stroke={2.5} />
           </div>
           <div className="flex flex-col items-center justify-start">
            <h2 className="text-black text-[16px] font-semibold font-['Inter']">Fast Delivery</h2>
            <p className="text-center text-black text-[14px] font-normal font-['Inter']">In ucknow</p>
           </div>

          </div>
          {/* support card */}
          <div className="flex flex-row item justify-start w-72 shadow-md gap-2 px-3.5 py-4 rounded-md border-2 border-gray-50">
           <div className="flex items-center justify-center p-2 bg-white rounded-md">
           <IconShieldBolt color='#0252F6' stroke={2.5} />
           </div>
           <div className="flex flex-col items-center justify-start">
            <h2 className="text-black text-[16px] font-semibold font-['Inter']">24/7 Support</h2>
            <p className="text-center text-black text-[14px] font-normal font-['Inter']">we're here to help</p>
           </div>

          </div>
         
       
         
        </div>
         

    
      </div>
      {/* card section end */}
      <div className="w-full flex items-start justify-center">
        
        <div className="w-280 flex flex-col">
          <div className="flex justify-center items-center gap-3.5">
            {/* product heading & view all button start */}
          <div className="flex-1 items-center justify-start">
            <div className="text-black text-3xl font-bold font-['Poppins']">Popular Categories</div>
            </div>
          {/* view all button */}
          <div className="flex-1 flex flex-row gap-0.5 justify-end">
          <div className="text-blue-600 text-sm font-medium font-['Inter']">view all</div>
          <IconArrowNarrowRight color='#296FF5' stroke={1.5}/>  
          </div>
          </div>
          {/* product heading & view all button end */}
          
          
        </div>
      </div>
      
      
    </div>
  )
}

export default homepage