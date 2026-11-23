'use client'
import React, { useState } from 'react'
import { IconHeart,IconShieldCheckFilled,IconTruckDelivery,IconHeadset,IconPlus,IconMinus} from '@tabler/icons-react';

const page = () => {
  const [quantity, setQuantity] = useState(1);
  const handleadd = ()=>{
   setQuantity(quantity+1)
  }
  const handleminus = ()=>{
   if (quantity>1) {
    setQuantity(quantity-1)
    
   }
  }

  return (
    <div className="min-h-screen p-4">
      <div className="flex flex-col lg:flex-row items-start justify-between min-h-24 lg:gap-8 gap-4">
        {/* product image */}
        <img
          src="/switch&shocket.png"
          className="rounded-md shadow-md min-w-24"
        />
        <div className="w-full flex flex-col items-start justify-start px-2.5">
          <div className="flex flex-row items-center justify-between w-full">
          {/* product name */}
            <h1 className="font-bold text-2xl">cement</h1>
            {/* heart icon */}
            <div className="flex items-center justify-center p-2 rounded-full bg-slate-200">
              <IconHeart stroke={2} color="#949494" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <p className="leading-relaxed">
              The apple pencil is very easy to pair with your i pad. Not only
              does it work better than expected while drawing or painting but
              the battery last much longer than expected.
            </p>
            <h2 className="font-bold text-black text-xl text-start w-full">
              ₹458
            </h2>
          </div>
          {/* cards sections */}
          <div className="grid grid-cols-3 items-stretch justify-center border-t-2 border-slate-200 w-full py-0.5">
                      <div className="flex lg:flex-row flex-col items-center justify-start border-r-2 border-slate-200 gap-0.5 px-3 py-3">
                          <IconShieldCheckFilled size={28} stroke={2} color="#0F67F2" className="shrink-0"/>
                          <p className="text-center min-w-0">100% Genuine Product</p>
                      </div>
                      <div className="flex lg:flex-row flex-col items-center justify-start border-r-2 border-slate-200 gap-0.5 px-3 py-3">
                          <IconTruckDelivery
                              size={28}
                              stroke={2}
                              color="#0F67F2"
                              className="shrink-0"
                          />
                          <p className="text-center min-w-0">Fast Delivery Across India</p>
                      </div>
                      <div className="flex lg:flex-row flex-col items-center justify-start border-r-2 border-slate-200 gap-0.5 px-3 py-3">
                          <IconHeadset size={28} stroke={2} color="#0F67F2" className='shrink-0'/>
                          <p className="text-center min-w-0">
                              24/7 Support We're hare to help
                          </p>
                      </div>
          </div>
          <div className="flex lg:flex-row flex-col items-stretch justify-center gap-2.5 w-full mt-3">
            <div className='flex-1 flex flex-row items-center justify-start gap-1'>
              <h3>Quantity:</h3>
              <div className='flex flex-row items-center justify-center border-2 border-slate-200 rounded-md'>
                <IconMinus onClick={handleminus} className="hover:cursor-pointer"/>
                <h3 className="px-2 border-l-2 border-slate-200 border-r-2">{quantity}</h3>
                <IconPlus onClick={handleadd} className="hover:cursor-pointer"/>

              </div>
            </div>
            {/* buy button */}
            <button className="flex-1 text-white text-center text-base font-semibold font-['Inter'] rounded-md py-2 bg-[#EB6001] border-2 border-white hover:ring-2 hover:ring-[#EB6001] hover:cursor-pointer">Buy Now</button>
            {/* add to cart button */}
            <button className="flex-1 text-white text-center text-base font-semibold font-['Inter'] rounded-md py-2 bg-blue-600 ring-2 border-2 border-white hover:ring-2 hover:ring-blue-600 hover:cursor-pointer">Add to cart
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default page