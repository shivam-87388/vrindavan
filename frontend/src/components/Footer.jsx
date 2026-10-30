import React from 'react'
import { IconBrandFacebook, IconBrandWhatsapp, IconBrandInstagram, IconBrandLinkedin,IconArrowNarrowRightDashed } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className='w-full flex flex-col bg-[#0D2447]'>
      <div className="grid lg:grid-cols-4 grid-cols-2 px-6 py-8">
        {/* grid1 */}
      <div className="flex flex-col items-start justify-start ">
      <h1 className="text-white text-2xl font-medium font-['Poppins']">Vrindavan Home</h1>
      <p className="text-white text-sm font-normal font-['Inter'] ">Your one-stop shop for all construction material. Build your dream with us</p>
      <div className="w-full flex-row flex items-center justify-start gap-3.5 mt-1.5">
            <IconBrandFacebook color="#ffffff" size={30} stroke={1.5} className="hover:cursor-pointer"/>
            <IconBrandInstagram color="#ffffff" size={30} stroke={1.5} className="hover:cursor-pointer"/>
            <IconBrandWhatsapp color="#ffffff" size={30} stroke={1.5} className="hover:cursor-pointer"/>
            <IconBrandLinkedin color="#ffffff" size={30} stroke={1.5} className="hover:cursor-pointer"/>
          </div>



      </div>
      {/* grid2 */}
      <nav className="flex flex-col items-center justify-start text-white">
        <h2 className=" text-base font-semibold font-['Poppins']">Quick Links</h2>
        <a href="#" className="hover:cursor-pointer">Home</a>
        <a href="#" className="hover:cursor-pointer">Product</a>
        <a href="#" className="hover:cursor-pointer">Categories</a>
        <a href="#" className="hover:cursor-pointer">About-us</a>

      </nav>
      {/* grid3 */}
      <nav className="flex flex-col items-center justify-start text-white">
        <h2 className=" text-base font-semibold font-['Poppins']">Support</h2>
        <a href="#" className="hover:cursor-pointer">FAQ</a>
        <a href="#" className="hover:cursor-pointer">Shipping</a>
        <a href="#" className="hover:cursor-pointer">Help</a>
      </nav>
      {/* grid4 */}
      <div className="flex flex-col items-center justify-end">
        <h2 className="text-white text-base font-semibold font-['Poppins']">News Letter</h2>
        <div className="flex flex-row bg-slate-700 w-fit gap-1.5 py-1.5 px-2 rounded-md focus-within:border-white focus-within:ring-1 focus-within:ring-white transition-all ">
        <input type="email" placeholder="email" className="focus:outline-none w-full min-w-0 text-white"></input>
        <div className="bg-orange-600 rounded-md hover:cursor-pointer">

        <IconArrowNarrowRightDashed color='#ffffff' size={30} stroke={1.5}/>
        </div>
        </div>
      </div>


      </div>
       <hr className="border-slate-700 border-t-2"></hr>
      {/* copy right section */}
       <div className="grid grid-cols-3 px-6 py-2.5 justify-start items-center">
        <div className="flex items-center justify-center"><p className="text-white text-xs font-normal font-['Inter'] lg:w-fit w-full text-start lg:text-center">© 2026 Vrindavan Home. All rights reserved</p>
       </div>
        <div className="flex items-center justify-center">
          <a href='https://shivam-87388.github.io/New-portfolio/' className="text-white text-xs font-normal font-['Inter'] hover:cursor-pointer">Developed by Shivam.dev</a>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-white text-xs font-normal font-['Inter']">Privacy Policy | Terms Conditions</p>

        </div>
       
        


       </div>



    </footer>
  )
}

export default Footer