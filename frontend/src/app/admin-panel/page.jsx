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
              <h3 className="text-sm text-center font-semibold text-slate-700 font-['Poppins']">
                Total Product
              </h3>
              <p className="w-full text-xl text-center font-bold text-slate-900">
                24
              </p>
              <a
                href="#"
                className="flex items-center justify-center text-blue-600 whitespace-nowrap"
              >
                <span className="text-xs text-center font-medium font-['Inter']">
                  view all
                </span>
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
              <h3 className="text-sm text-center font-semibold text-slate-700 font-['Poppins']">
                Total Queries
              </h3>
              <p className="w-full text-xl text-center font-bold text-slate-900">
                24
              </p>
              <a
                href="#"
                className="flex items-center justify-center text-blue-600 whitespace-nowrap"
              >
                <span className="text-xs text-center font-medium font-['Inter']">
                  view all
                </span>
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
              <h3 className="text-sm text-center font-semibold text-slate-700 font-['Poppins']">
                Total Order
              </h3>
              <p className="w-full text-xl text-center font-bold text-slate-900">
                24
              </p>
              <a
                href="#"
                className="flex items-center justify-center text-blue-600 whitespace-nowrap"
              >
                <span className="text-xs text-center font-medium font-['Inter']">
                  view all
                </span>
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
              <h3 className="text-sm text-center font-semibold text-slate-700 font-['Poppins']">
                Total User
              </h3>
              <p className="w-full text-xl text-center font-bold text-slate-900">
                24
              </p>
              <a
                href="#"
                className="flex items-center justify-center text-blue-600 whitespace-nowrap"
              >
                <span className="text-xs text-center font-medium font-['Inter']">
                  view all
                </span>
                <IconArrowNarrowRight size={14} color="#418AF1" />
              </a>
            </div>
          </div>
        </div>
        {/* recent queries section */}
        <div className="w-full bg-white rounded-xl p-5 shadow-sm">
          {/* Header Section */}
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-xl font-bold text-slate-900 font-['Poppins']">
              Recent Queries
            </h3>
            <a
              href="#"
              className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline font-['Inter']"
            >
              <span>view all</span>
              <IconArrowNarrowRight size={16} />
            </a>
          </div>

          {/* Table Section  */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-['Inter']">
              {/* Table Head */}
              <thead className="bg-slate-50/70 text-slate-700 font-semibold border-b border-slate-100">
                <tr>
                  <th className="py-3 px-3 w-12 text-center">S.No</th>
                  <th className="py-3 px-3 text-center">Name</th>
                  <th className="py-3 px-3 text-center">Email</th>
                  <th className="py-3 px-3 text-center">Message</th>
                  <th className="py-3 px-3 text-center">Date</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="text-center py-3.5 px-3 font-medium text-slate-800">
                    1
                  </td>
                  <td className="text-center py-3.5 px-3 font-medium text-slate-800">
                    Amit Kumar
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-500">
                    amit@gmail.com
                  </td>
                  <td className="text-center py-3.5 px-3 truncate max-w-xs text-slate-600">
                    Need bulk quantity of cement...
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-500 whitespace-nowrap">
                    2025-09-20 10:24
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="text-center py-3.5 px-3 font-medium text-slate-800">
                    2
                  </td>
                  <td className="text-center py-3.5 px-3 font-medium text-slate-800">
                    Rohit Sharma
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-500">
                    rohit@xyz.com
                  </td>
                  <td className="text-center py-3.5 px-3 truncate max-w-xs text-slate-600">
                    What is the price of TMT bars?
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-500 whitespace-nowrap">
                    2025-09-20 09:50
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="text-center py-3.5 px-3 font-medium text-slate-800">
                    3
                  </td>
                  <td className="text-center py-3.5 px-3 font-medium text-slate-800">
                    Priya Singh
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-500">
                    priya@gmail.com
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-600">
                    Do you deliver in Lucknow?
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-500 whitespace-nowrap">
                    2025-09-19 16:32
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="text-center py-3.5 px-3 font-medium text-slate-800">
                    4
                  </td>
                  <td className="text-center py-3.5 px-3 font-medium text-slate-800">
                    Sandeep Yadav
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-500">
                    sandeep@abc.com
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-600">
                    I want to buy 50 bags of cement.
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-500 whitespace-nowrap">
                    2025-09-19 14:12
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="text-center py-3.5 px-3 font-medium text-slate-800">
                    5
                  </td>
                  <td className="text-center py-3.5 px-3 font-medium text-slate-800">
                    Neha Verma
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-500">
                    neha@domain.com
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-600">
                    Any discount on bulk orders?
                  </td>
                  <td className="text-center py-3.5 px-3 text-slate-500 whitespace-nowrap">
                    2025-09-18 11:05
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between bg-white  rounded-xl p-5 shadow-sm"></div>
      </div>
    </div>
  );
};

export default page;
