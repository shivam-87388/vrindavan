'use-client'
import React from 'react'
import { IconHomeFilled,IconBox,IconUsers,IconShoppingCart,IconSettings,IconMessage2 } from '@tabler/icons-react';

const page = () => {
  return (
    <div className="min-h h-screen p-4 w-full flex items-center justify-center bg-[#F5F8FC]">
      <div className="w-full flex-cols flex items-center justify-start h-full">
        <div className="h-full flex-col flex items-center justify-start bg-[#172331] lg:px-8 px-2 pt-6 rounded-tr-2xl rounded-br-2xl gap-y-2.5">
          <h3 className="text-center text-white text-lg font-semibold font-['Poppins']">Vrindavan Home</h3>
            <nav className="flex flex-col items-start justify-center gap-1">
               <a href='' className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5">
            <IconHomeFilled color="#ffffff"/>
            <span className="text-white">Dashborad</span>
          </a>
               <a href='' className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5">
            <IconBox color="#ffffff"/>
            <span className="text-white">Product</span>
          </a>
               <a href='' className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5">
            <IconMessage2 color="#ffffff"/>
            <span className="text-white">Queries</span>
          </a>
               <a href='' className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5">
            <IconUsers color="#ffffff"/>
            <span className="text-white">Users</span>
          </a>
               <a href='' className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5">
            <IconShoppingCart color="#ffffff"/>
            <span className="text-white">Order</span>
          </a>
               <a href='' className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5">
            <IconSettings color="#ffffff"/>
            <span className="text-white">Settings</span>
          </a>
            </nav>

        </div>
       

         
       
        <div className="h-full flex w-full ml-2 items-start justify-center bg-white rounded-md">nfdsknsk</div>
        

      
        
      </div>

    </div>
  )
}

export default page