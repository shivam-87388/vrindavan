'use-client'
import React from 'react'
import { IconHomeFilled,IconBox,IconUsers,IconShoppingCart,IconSettings,IconMessage2,IconArrowNarrowRight  } from '@tabler/icons-react';

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
       

         
       
        <div className="h-full flex flex-col w-full ml-3.5 items-center justify-start bg-white rounded-md px-2.5 py-2.5 gap-y-2.5">
          <div className="w-full flex item-center justify-start flex-col">
         <h1 className="w-full text-start text-black text-3xl font-bold font-['Poppins']">Welcome, Admin</h1>
        <p className=" text-black text-base font-normal font-['Inter']">Here’s what’s happening with your store today.</p>
          </div>
          <div className=" w-full flex flex-row items-start justify-between">
            <div className="flex flex-row item-center border-2 border-slate-200 rounded-md px-8 py-2.5">
            <IconBox color='#FFFFFF' className="bg-blue-600 rounded-full px-1.5 py-2" />
            <div className="w-full flex flex-col items-center  justify-center">
              <h3 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">Total Product</h3>
              <h4 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">24</h4>
              
              <div className="w-full flex flex-row items-center justify-center ">
            <a href='' className="text-blue-500 text-sm font-normal font-['Inter']">View all</a>
            <IconArrowNarrowRight/>
              </div>
            </div>
            </div>
            <div className="flex flex-row item-center border-2 border-slate-200 rounded-md px-8 py-2.5">
            <IconBox color='#FFFFFF' className="bg-blue-600 rounded-full px-1.5 py-2" />
            <div className="w-full flex flex-col items-center  justify-center">
              <h3 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">Total Product</h3>
              <h4 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">24</h4>
              
              <div className="w-full flex flex-row items-center justify-center ">
            <a href='' className="text-blue-500 text-sm font-normal font-['Inter']">View all</a>
            <IconArrowNarrowRight/>
              </div>
            </div>
            </div>
            <div className="flex flex-row item-center border-2 border-slate-200 rounded-md px-8 py-2.5">
            <IconBox color='#FFFFFF' className="bg-blue-600 rounded-full px-1.5 py-2" />
            <div className="w-full flex flex-col items-center  justify-center">
              <h3 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">Total Product</h3>
              <h4 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">24</h4>
              
              <div className="w-full flex flex-row items-center justify-center ">
            <a href='' className="text-blue-500 text-sm font-normal font-['Inter']">View all</a>
            <IconArrowNarrowRight/>
              </div>
            </div>
            </div>
            <div className="flex flex-row item-center border-2 border-slate-200 rounded-md px-8 py-2.5">
            <IconBox color='#FFFFFF' className="bg-blue-600 rounded-full px-1.5 py-2" />
            <div className="w-full flex flex-col items-center  justify-center">
              <h3 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">Total Product</h3>
              <h4 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">24</h4>
              
              <div className="w-full flex flex-row items-center justify-center ">
            <a href='' className="text-blue-500 text-sm font-normal font-['Inter']">View all</a>
            <IconArrowNarrowRight/>
              </div>
            </div>
            </div>
            
               </div>
         
        </div>
        

      
        
      </div>

    </div>
  )
}

export default page