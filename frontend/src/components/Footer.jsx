import React from 'react'
import { IconBrandFacebook, IconBrandWhatsapp, IconBrandInstagram, IconBrandLinkedin,IconArrowNarrowRightDashed } from '@tabler/icons-react';

const Footer = () => {
  return (
    <div className="flex flex-col p-4 bg-slate-800 gap-2">
      <div className="flex flex-row items-start">
        <div className="flex-1 flex-col item-start justify-start">
          <div className="text-white text-2xl font-medium font-['Poppins']">Vrindavan Home</div>
            <p className="text-white text-sm font-normal font-['Inter'] ">Your ine-stop shop for all construction material. Build your dream with us</p>
            <div className="flex items-center justify-start gap-3.5 mt-1.5">
            <IconBrandFacebook color="#ffffff" size={30} stroke={1.5}/>
            <IconBrandInstagram color="#ffffff" size={30} stroke={1.5}/>
            <IconBrandWhatsapp color="#ffffff" size={30} stroke={1.5}/>
            <IconBrandLinkedin color="#ffffff" size={30} stroke={1.5}/>
          </div>
          </div>
        <div className="flex-1 flex items-start justify-center gap-3">
        <h2 className="text-white text-base font-semibold font-['Poppins']">Quick Links
        <ul className="text-white text-sm font-normal font-['Inter'] space-y-1.5 mt-1.5">
          <li>Home</li>
          <li>Product</li>
          <li>Categories</li>
          <li>About-us</li>
        </ul>
        </h2>
        </div>
       <div className="flex-1 flex items-start justify-center gap-3">
        <h2 className="text-white text-base font-semibold font-['Poppins']">Support
        <ul className="text-white text-sm font-normal font-['Inter'] space-y-1.5 mt-1.5">
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Help</li>
        </ul>
        </h2>
        </div>
        <div className="flex-1 flex items-start justify-center">
        <h2>Newsletter</h2>
        <p>Subscribe to get update on new product and offers.</p>
        <div className="flex flex-row">
          

        <button></button>
        <IconArrowNarrowRightDashed color='#ffffff' size={30} stroke={1.5}/>
        </div>
        </div>

      </div>
     

        
        <div className="flex items-center justify-between">
          <p className="text-white text-xs font-normal font-['Inter']">© 2026 Vrindavan Home. All rights reserved</p>
          <p className="text-white text-xs font-normal font-['Inter']">Developed by Shivam.dev</p>
          <p className="text-white text-xs font-normal font-['Inter']">Privacy Policy | Terms Conditions</p>

        </div>

    </div>
  )
}

export default Footer