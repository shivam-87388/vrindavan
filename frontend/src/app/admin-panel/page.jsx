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
    <div className="min-h h-screen p-4 w-full flex items-center justify-center bg-[#F5F8FC]">
      <div className="w-full flex-row flex items-center justify-start h-full">
        <div className="h-full flex-col flex items-center justify-start bg-[#172331] lg:px-8 px-2 pt-6 rounded-tr-2xl rounded-br-2xl gap-y-2.5">
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

        <div className="h-full flex flex-col w-full ml-3.5 items-center justify-start bg-white rounded-md px-2.5 py-2.5 gap-y-2.5">
          <div className="w-full flex item-center justify-start flex-col">
            <h1 className="w-full text-start text-black text-3xl font-bold font-['Poppins']">
              Welcome, Admin
            </h1>
            <p className=" text-black text-base font-normal font-['Inter']">
              Here’s what’s happening with your store today.
            </p>
          </div>
        
          {/* Cards Container: 4 Cards ek row mein barabar aayenge */}

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

  {/* card-1 */}
  <div className="flex items-center gap-3.5 rounded-xl border-2 border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
      <IconBox color="#FFFFFF" stroke={2} size={22} />
    </div>
    <div className="flex flex-col items-start justify-center">
      <h3 className="text-sm font-semibold text-slate-700 font-['Poppins']">Total Product</h3>
      <p className="text-xl font-bold text-slate-900">24</p>
      <a href="#" className="flex items-center gap-0.5 text-blue-500 hover:underline">
        <span className="text-xs font-medium font-['Inter']">view all</span>
        <IconArrowNarrowRight size={14} color="#418AF1" />
      </a>
    </div>
  </div>

  {/* card-2 */}
  <div className="flex items-center gap-3.5 rounded-xl border-2 border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#55BA71]">
      <IconMessage2 color="#FFFFFF" stroke={2} size={22} />
    </div>
    <div className="flex flex-col items-start justify-center">
      <h3 className="text-sm font-semibold text-slate-700 font-['Poppins']">Total Queries</h3>
      <p className="text-xl font-bold text-slate-900">24</p>
      <a href="#" className="flex items-center gap-0.5 text-blue-500 hover:underline">
        <span className="text-xs font-medium font-['Inter']">view all</span>
        <IconArrowNarrowRight size={14} color="#418AF1" />
      </a>
    </div>
  </div>

  {/* card-3 */}
  <div className="flex items-center gap-3.5 rounded-xl border-2 border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#F29006]">
      <IconShoppingCart color="#FFFFFF" stroke={2} size={22} />
    </div>
    <div className="flex flex-col items-start justify-center">
      <h3 className="text-sm font-semibold text-slate-700 font-['Poppins']">Total Order</h3>
      <p className="text-xl font-bold text-slate-900">24</p>
      <a href="#" className="flex items-center gap-0.5 text-blue-500 hover:underline">
        <span className="text-xs font-medium font-['Inter']">view all</span>
        <IconArrowNarrowRight size={14} color="#418AF1" />
      </a>
    </div>
  </div>

  {/* card-4 */}
  <div className="flex items-center gap-3.5 rounded-xl border-2 border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#EC494A]">
      <IconUsers color="#FFFFFF" stroke={2} size={22} />
    </div>
    <div className="flex flex-col items-start justify-center">
      <h3 className="text-sm font-semibold text-slate-700 font-['Poppins']">Total User</h3>
      <p className="text-xl font-bold text-slate-900">24</p>
      <a href="#" className="flex items-center gap-0.5 text-blue-500 hover:underline">
        <span className="text-xs font-medium font-['Inter']">view all</span>
        <IconArrowNarrowRight size={14} color="#418AF1" />
      </a>
    </div>
  </div>

          </div>

          <div className="w-full flex flex-col items-center justify-between px-1.5">
            <div className="w-full flex flex-row justify-between items-center ">
              <h3 className="flex justify-start text-black text-lg font-semibold font-['Poppins']">Recent Qureies</h3>
              <div className="flex items-center justify-end">
                <span className="text-[#418AF1] text-blue-500 text-sm font-normal font-['Inter']">view all</span>
                <IconArrowNarrowRight color='#418AF1'/>
              </div>
            </div>
           
            

          </div>
            
          
        </div>
      </div>
    </div>
  );
};

export default page;
