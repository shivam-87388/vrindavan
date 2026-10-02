"use client";
import React from "react";
import {
  IconHomeFilled,
  IconBox,
  IconUsers,
  IconShoppingCart,
  IconSettings,
  IconMessage2,
  IconArrowNarrowRight,
} from "@tabler/icons-react";

const page = () => {
  return (
    <div className="h-screen pr-4 pt-4 pb-4 w-full flex flex-row items-start justify-between bg-[#F4F8FC]">
      <div className="h-full flex flex-col  items-center justify-start bg-[#172331] lg:px-8 md:px-2 px-0.5 pt-6 rounded-tr-2xl rounded-br-2xl gap-y-2.5">

          <h3 className="text-center text-white text-lg font-semibold font-['Poppins']">
            Vrindavan Home
          </h3>
          <nav className="flex flex-col items-start justify-center gap-1">
            <a
              href=""
              className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5"
            >
              <IconHomeFilled color="#ffffff" />
              <span className="text-white">Dashborad</span>
            </a>
            <a
              href=""
              className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5"
            >
              <IconBox color="#ffffff" />
              <span className="text-white">Product</span>
            </a>
            <a
              href=""
              className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5"
            >
              <IconMessage2 color="#ffffff" />
              <span className="text-white">Queries</span>
            </a>
            <a
              href=""
              className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5"
            >
              <IconUsers color="#ffffff" />
              <span className="text-white">Users</span>
            </a>
            <a
              href=""
              className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5"
            >
              <IconShoppingCart color="#ffffff" />
              <span className="text-white">Order</span>
            </a>
            <a
              href=""
              className="w-full flex items-center justify-start px-5 py-2 hover:bg-[#D35A01] rounded-md gap-0.5"
            >
              <IconSettings color="#ffffff" />
              <span className="text-white">Settings</span>
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-start w-full rounded-md pl-2 h-full gap-y-2">
           {/* heading and paragrapgh setcion */}
          <div className="w-full flex flex-col items-start justify-center pt-6">
             <h1 className="text-start text-black text-3xl font-bold font-['Poppins']">
              Welcome, Admin
            </h1>
            <p className="text-starttext-black text-base font-normal font-['Inter']">
              Here’s what’s happening with your store today.
            </p>

          </div>
           
           {/* cards section */}
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4    gap-2">
            {/*Total product card*/}
            <div className="w-full flex flex-row lg:items-start items-center justify-center px-0.5 rounded-md border-2 border-slate-200 bg-white py-2.5 gap-0.5">
              <div className="flex items-center justify-start bg-blue-600 rounded-full p-1">
                <IconBox color="#FFFFFF" stroke={2} size={22} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-center font-semibold text-slate-700 font-['Poppins']">Total Product</h3>
                 <p className="w-full text-xl text-center font-bold text-slate-900">24</p>
                 <a href="#" className="flex items-center justify-center text-blue-600 whitespace-nowrap">
                   <span className="text-xs text-center font-medium font-['Inter']">view all</span>
                   <IconArrowNarrowRight size={14} color="#418AF1" />
                 </a>

              </div>
            </div>
           {/* total queries */}
           <div className="w-full flex flex-row lg:items-start items-center justify-center px-0.5 rounded-md border-2 border-slate-200 bg-white py-2.5 gap-0.5">
              <div className="flex items-center justify-start bg-[#55BA71] rounded-full p-1">
                <IconMessage2 color="#FFFFFF" stroke={2} size={22} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-center font-semibold text-slate-700 font-['Poppins']">Total Queries</h3>
                 <p className="w-full text-xl text-center font-bold text-slate-900">24</p>
                 <a href="#" className="flex items-center justify-center text-blue-600 whitespace-nowrap">
                   <span className="text-xs text-center font-medium font-['Inter']">view all</span>
                   <IconArrowNarrowRight size={14} color="#418AF1" />
                 </a>

              </div>
            </div>
           {/* total order */}
           <div className="w-full flex flex-row lg:items-start items-center justify-center px-0.5 rounded-md border-2 border-slate-200 bg-white py-2.5 gap-0.5">
              <div className="flex items-center justify-start bg-[#F29006] rounded-full p-1">
                <IconShoppingCart color="#FFFFFF" stroke={2} size={22} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-center font-semibold text-slate-700 font-['Poppins']">Total Order</h3>
                 <p className="w-full text-xl text-center font-bold text-slate-900">24</p>
                 <a href="#" className="flex items-center justify-center text-blue-600 whitespace-nowrap">
                   <span className="text-xs text-center font-medium font-['Inter']">view all</span>
                   <IconArrowNarrowRight size={14} color="#418AF1" />
                 </a>

              </div>
            </div>
             {/* total user */}
             <div className="w-full flex flex-row lg:items-start items-center justify-center px-0.5 rounded-md border-2 border-slate-200 bg-white py-2.5 gap-0.5">
              <div className="flex items-center justify-start bg-[#EC494A] rounded-full p-1">
                <IconUsers color="#FFFFFF" stroke={2} size={22} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-center font-semibold text-slate-700 font-['Poppins']">Total User</h3>
                 <p className="w-full text-xl text-center font-bold text-slate-900">24</p>
                <a href="#" className="flex items-center justify-center text-blue-600 whitespace-nowrap">
                   <span className="text-xs text-center font-medium font-['Inter']">view all</span>
                   <IconArrowNarrowRight size={14} color="#418AF1" />
                 </a>

              </div>
            </div>





            
            
          </div>
          {/* recent queries section */}
        <div className="flex flex-col items-center justify-center gap-0.5 w-full rounded-md bg-white px-1.5">
          <div className="flex flex-row items-center justify-between w-full flex-wrap">
            <h3 className="text-black text-lg font-semibold font-['Poppins']">Recent Queries</h3>
            <a href="#" className="flex items-center justify-center gap-0.5 ">
              <span className="text-xs text-center font-medium font-['Inter']">view all</span>
              <IconArrowNarrowRight  size={14} color="#418AF1"/>
            </a>
            
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-between w-full bg-[#F3F6F8] flex-wrap">
              <div className="text-center text-black text-sm font-bold font-['Inter']">S.no</div>
              <div className="text-center text-black text-sm font-bold font-['Inter']">Name</div>
              <div className="text-center text-black text-sm font-bold font-['Inter']">Email</div>
              <div className="text-center text-black text-sm font-bold font-['Inter']">Message</div>
              <div className="text-center text-black text-sm font-bold font-['Inter']">Date</div>
              </div>  
              
            
          </div>
              
              
             
          
          
        </div>

        </div>




    
    
    </div>
  );
};

export default page;
