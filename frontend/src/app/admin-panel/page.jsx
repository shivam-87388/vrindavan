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
          <div className="w-full flex-row flex items-center justify-between gap-4 ">
            {/* card-1 */}
            <div className="flex-row flex w-1/2 items-center justify-center gap-1.5 rounded-md border-2 border-slate-200 px-2.5 py-2.5 flex-wrap">
              <div className="flex items-center justify-center bg-blue-600 p-1.5 rounded-full">
              <IconBox color='#FFFFFF' stroke={2} size={30}/>
              </div>
              <div className="flex-col flex items-center justify-center">
                <h3 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">Total Product</h3>
                <p>24</p>
                <a href="#" className=" flex flex-row items-center justify-center gap">
                  <span className="text-blue-500 text-sm font-normal font-['Inter']">view all</span>
                  <IconArrowNarrowRight color="#418AF1"/>
                </a>

              </div>

            </div>
            {/* card-2 */}
            <div className="flex-row flex w-1/2 items-center justify-center gap-1.5 rounded-md border-2 border-slate-200 px-2.5 py-2.5 flex-wrap">
              <div className="flex items-center justify-center bg-blue-600 p-1.5 rounded-full">
              <IconBox color='#FFFFFF' stroke={2} size={30}/>
              </div>
              <div className="flex-col flex items-center justify-center">
                <h3 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">Total Product</h3>
                <p>24</p>
                <a href="#" className=" flex flex-row items-center justify-center gap">
                  <span className="text-blue-500 text-sm font-normal font-['Inter']">view all</span>
                  <IconArrowNarrowRight color="#418AF1"/>
                </a>

              </div>

            </div>
            {/* card-3 */}
            <div className="flex-row flex w-1/2 items-center justify-center gap-1.5 rounded-md border-2 border-slate-200 px-2.5 py-2.5 flex-wrap">
              <div className="flex items-center justify-center bg-blue-600 p-1.5 rounded-full">
              <IconBox color='#FFFFFF' stroke={2} size={30}/>
              </div>
              <div className="flex-col flex items-center justify-center">
                <h3 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">Total Product</h3>
                <p>24</p>
                <a href="#" className=" flex flex-row items-center justify-center gap">
                  <span className="text-blue-500 text-sm font-normal font-['Inter']">view all</span>
                  <IconArrowNarrowRight color="#418AF1"/>
                </a>

              </div>

            </div>
            {/* card-4 */}
            <div className="flex-row flex w-1/2 items-center justify-center gap-1.5 rounded-md border-2 border-slate-200 px-2.5 py-2.5 flex-wrap">
              <div className="flex items-center justify-center bg-blue-600 p-1.5 rounded-full">
              <IconBox color='#FFFFFF' stroke={2} size={30}/>
              </div>
              <div className="flex-col flex items-center justify-center">
                <h3 className="text-center justify-start text-black text-lg font-semibold font-['Poppins']">Total Product</h3>
                <p>24</p>
                <a href="#" className=" flex flex-row items-center justify-center gap">
                  <span className="text-blue-500 text-sm font-normal font-['Inter']">view all</span>
                  <IconArrowNarrowRight color="#418AF1"/>
                </a>

              </div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
