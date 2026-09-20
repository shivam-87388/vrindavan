import React from 'react'
import { IconBrandFacebook, IconBrandWhatsapp, IconBrandInstagram, IconBrandLinkedin,IconArrowNarrowRightDashed } from '@tabler/icons-react';

const Footer = () => {
  return (
    <div className="flex flex-col p-4 bg-slate-800 gap-2">
      <div className="flex flex-row items-start">
        {/* column-1 */}
        <div className="flex-1 flex-col item-start justify-start">
          <div className="text-white text-2xl font-medium font-['Poppins']">Vrindavan Home</div>
            <p className="text-white text-sm font-normal font-['Inter'] ">Your ine-stop shop for all construction material. Build your dream with us</p>
            <div className="flex items-center justify-start gap-3.5 mt-1.5">
            <IconBrandFacebook color="#ffffff" size={30} stroke={1.5} className="hover:cursor-pointer"/>
            <IconBrandInstagram color="#ffffff" size={30} stroke={1.5} className="hover:cursor-pointer"/>
            <IconBrandWhatsapp color="#ffffff" size={30} stroke={1.5} className="hover:cursor-pointer"/>
            <IconBrandLinkedin color="#ffffff" size={30} stroke={1.5} className="hover:cursor-pointer"/>
          </div>
        </div>
          {/* column-2 */}
        <div className="flex-1 flex items-start justify-center gap-3">
        <h2 className="text-white text-base font-semibold font-['Poppins']">Quick Links
        <ul className="text-white text-sm font-normal font-['Inter'] space-y-1.5 mt-1.5"> className="hover:cursor-pointer"
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">Product</li>
          <li className="hover:cursor-pointer">Categories</li>
          <li className="hover:cursor-pointer">About-us</li>
        </ul>
        </h2>
        </div>
        {/* column-3 */}
       <div className="flex-1 flex items-start justify-center gap-3">
        <h2 className="text-white text-base font-semibold font-['Poppins']">Support
        <ul className="text-white text-sm font-normal font-['Inter'] space-y-1.5 mt-1.5">
          <li className="hover:cursor-pointer">FAQ</li>
          <li className="hover:cursor-pointer">Shipping</li>
          <li className="hover:cursor-pointer">Help</li>
        </ul>
        </h2>
        </div>
        {/* column- */}
        <div className="flex-1 flex items-start justify-center">
          <div className="flex flex-col gap-1.5">
           <h2 className="text-white text-base font-semibold font-['Poppins']">Newsletter</h2>
           <p className="text-white text-sm font-normal font-['Inter']">Subscribe to get update on new product and offers.</p>
           <div className="flex flex-row bg-slate-700 w-fit gap-1.5 py-1.5 px-2 rounded-md focus-within:border-white focus-within:ring-1 focus-within:ring-white transition-all">
        <input type="email" placeholder="email" className="focus:outline-none w-40 lg:w-48 text-white"></input>
        <div className="bg-orange-600 rounded-md hover:cursor-pointer">

        <IconArrowNarrowRightDashed color='#ffffff' size={30} stroke={1.5}/>
        </div>
        </div>
          </div>
       
        
        </div>

      </div>
      {/* copy right section */}
        <div className="flex items-center justify-between">
          <p className="text-white text-xs font-normal font-['Inter']">© 2026 Vrindavan Home. All rights reserved</p>
          <p className="text-white text-xs font-normal font-['Inter'] hover:cursor-pointer">Developed by Shivam.dev</p>
          <p className="text-white text-xs font-normal font-['Inter']">Privacy Policy | Terms Conditions</p>

        </div>

    </div>
  )
}

export default Footer