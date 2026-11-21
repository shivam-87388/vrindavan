import React from 'react'
import { IconHeart,IconShieldCheckFilled,IconTruckDelivery,IconHeadset  } from '@tabler/icons-react';

const page = () => {
  return (
   <div className="min-h-screen p-4">
    <div className="flex flex-col lg:flex-row items-start justify-between min-h-24 lg:gap-8 gap-4">
        <img src="/switch&shocket.png" className="rounded-md shadow-md min-w-24"/>
        <div className="w-full flex flex-col items-start justify-start px-2.5">
            <div className="flex flex-row items-center justify-between w-full">
                <h1 className="font-bold text-2xl">cement</h1>
                <div className="flex items-center justify-center p-2 rounded-full bg-slate-200">
               <IconHeart stroke={2} color="#949494" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
                <p className="leading-relaxed">The apple pencil is very easy to pair with your i pad. Not only does it work better than expected while drawing or painting but the battery last much longer than expected.</p>
             <h2 className="font-bold text-black text-xl text-start w-full">₹458</h2>
            
            </div>
           
             
             
        </div>
    </div>
   </div>
  
  )
}

export default page