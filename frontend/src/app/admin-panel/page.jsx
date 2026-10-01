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
    <div className="h-screen pr-4 pt-4 pb-4 w-full flex flex-row items-start justify-between bg-[#F5F8FC] gap-x-2">
      <div className="h-full flex flex-col  items-center justify-start bg-[#172331] lg:px-8 px-2 pt-6 rounded-tr-2xl rounded-br-2xl gap-y-2.5">

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

        <div className="flex flex-col items-start justify-start w-full bg-white rounded-md pr-2 pl-2 h-full gap-y-2">
          <div className="w-full flex flex-col items-start justify-center pt-6">
             <h1 className="text-black text-3xl font-bold font-['Poppins'] flex-wrap">
              Welcome, Admin
            </h1>
            <p className="text-start text-black text-base font-normal font-['Inter']">
              Here’s what’s happening with your store today.
            </p>

          </div>

          <div className="w-full flex flex-row items-start justify-between gap-4 md-gap-2 flex-wrap">
            <div className=" lg:w-full flex-1 flex flex-row items-center justify-center px-2.5 py-2.5 gap-1.5 border-2 border-slate-200 rounded-md">
              <div className="flex items-center justify-center rounded-full bg-blue-600 p-1">
                <IconBox color="#FFFFFF" stroke={2} size={22} />
              </div>
              <div className="flex flex-col items-start justify-center ">
                 <h3 className="text-sm font-semibold text-slate-700 font-['Poppins']">Total Product</h3>
                 <p className="w-full text-xl text-center font-bold text-slate-900">24</p>
                 <a href="#" className="flex items-center justify-center w-full text-blue-600">
                   <span className="text-xs font-medium font-['Inter']">view all</span>
                   <IconArrowNarrowRight size={14} color="#418AF1" />

                 </a>

              </div>
            </div>
             <div className="lg:w-full flex flex-1 flex-row items-center justify-center px-2.5 py-2.5 gap-1.5 border-2 border-slate-200 rounded-md">
              <div className="flex items-center justify-center rounded-full bg-blue-600 p-1">
                <IconBox color="#FFFFFF" stroke={2} size={22} />
              </div>
              <div className="flex flex-col items-start justify-center ">
                 <h3 className="text-sm font-semibold text-slate-700 font-['Poppins']">Total Product</h3>
                 <p className="w-full text-xl text-center font-bold text-slate-900">24</p>
                 <a href="#" className="flex items-center justify-center w-full text-blue-600">
                   <span className="text-xs font-medium font-['Inter']">view all</span>
                   <IconArrowNarrowRight size={14} color="#418AF1" />

                 </a>

              </div>
            </div>
            <div className="lg:w-full flex flex-1 flex-row items-center justify-center px-2.5 py-2.5 gap-1.5 border-2 border-slate-200 rounded-md">
              <div className="flex items-center justify-center rounded-full bg-blue-600 p-1">
                <IconBox color="#FFFFFF" stroke={2} size={22} />
              </div>
              <div className="flex flex-col items-start justify-center ">
                 <h3 className="text-sm font-semibold text-slate-700 font-['Poppins']">Total Product</h3>
                 <p className="w-full text-xl text-center font-bold text-slate-900">24</p>
                 <a href="#" className="flex items-center justify-center w-full text-blue-600">
                   <span className="text-xs font-medium font-['Inter']">view all</span>
                   <IconArrowNarrowRight size={14} color="#418AF1" />

                 </a>

              </div>
            </div> <div className="lg:w-full flex flex-1 flex-row items-center justify-center px-2.5 py-2.5 gap-1.5 border-2 border-slate-200 rounded-md">
              <div className="flex items-center justify-center rounded-full bg-blue-600 p-1">
                <IconBox color="#FFFFFF" stroke={2} size={22} />
              </div>
              <div className="flex flex-col items-start justify-center ">
                 <h3 className="text-sm font-semibold text-slate-700 font-['Poppins']">Total Product</h3>
                 <p className="w-full text-xl text-center font-bold text-slate-900">24</p>
                 <a href="#" className="flex items-center justify-center w-full text-blue-600">
                   <span className="text-xs font-medium font-['Inter']">view all</span>
                   <IconArrowNarrowRight size={14} color="#418AF1" />

                 </a>

              </div>
            </div>

          </div>
        </div>




    
    
    </div>
  );
};

export default page;
