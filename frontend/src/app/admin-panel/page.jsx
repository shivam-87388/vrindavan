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
  IconSearch,
  IconChevronDown,
} from "@tabler/icons-react";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-[#F4F8FC]">

      {/* ================= MAIN LAYOUT ================= */}
      <div className="flex w-full items-start gap-4 p-4">

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden min-h-[calc(100vh-32px)] w-[220px] shrink-0 flex-col items-center rounded-tr-2xl rounded-br-2xl bg-[#172331] px-4 pt-8 md:flex">

          {/* Logo / Brand */}
          <h3 className="mb-8 text-center font-['Poppins'] text-xl font-semibold leading-7 text-white">
            Vrindavan
            <br />
            Home
          </h3>

          {/* Navigation */}
          <nav className="flex w-full flex-col gap-2">

            {/* Dashboard */}
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-4 py-2.5 transition hover:bg-[#D35A01]"
            >
              <IconHomeFilled
                color="#ffffff"
                size={23}
              />

              <span className="font-['Inter'] text-sm text-white">
                Dashboard
              </span>
            </a>

            {/* Product */}
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-4 py-2.5 transition hover:bg-[#D35A01]"
            >
              <IconBox
                color="#ffffff"
                size={23}
              />

              <span className="font-['Inter'] text-sm text-white">
                Product
              </span>
            </a>

            {/* Queries */}
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-4 py-2.5 transition hover:bg-[#D35A01]"
            >
              <IconMessage2
                color="#ffffff"
                size={23}
              />

              <span className="font-['Inter'] text-sm text-white">
                Queries
              </span>
            </a>

            {/* Users */}
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-4 py-2.5 transition hover:bg-[#D35A01]"
            >
              <IconUsers
                color="#ffffff"
                size={23}
              />

              <span className="font-['Inter'] text-sm text-white">
                Users
              </span>
            </a>

            {/* Order */}
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-4 py-2.5 transition hover:bg-[#D35A01]"
            >
              <IconShoppingCart
                color="#ffffff"
                size={23}
              />

              <span className="font-['Inter'] text-sm text-white">
                Order
              </span>
            </a>

            {/* Settings */}
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-4 py-2.5 transition hover:bg-[#D35A01]"
            >
              <IconSettings
                color="#ffffff"
                size={23}
              />

              <span className="font-['Inter'] text-sm text-white">
                Settings
              </span>
            </a>

          </nav>
        </aside>


        {/* ================= MAIN CONTENT ================= */}
        <main className="min-w-0 flex-1">

          {/* ================= WELCOME SECTION ================= */}
          <div className="mb-4 pt-2">

            <h1 className="font-['Poppins'] text-3xl font-bold text-black sm:text-4xl">
              Welcome, Admin
            </h1>

            <p className="mt-1 font-['Inter'] text-sm text-black sm:text-base">
              Here’s what’s happening with your store today.
            </p>

          </div>


          {/* ================= STATISTICS CARDS ================= */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Total Product */}
            <div className="flex h-[108px] w-full min-w-0 items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-3 py-2.5">

              <div className="flex items-center justify-center gap-2">

                <div className="flex shrink-0 items-center justify-center rounded-full bg-blue-600 p-1.5">
                  <IconBox
                    color="#FFFFFF"
                    stroke={2}
                    size={22}
                  />
                </div>

                <div className="flex min-w-0 flex-col items-center justify-center">

                  <h3 className="text-center font-['Poppins'] text-sm font-semibold text-slate-700">
                    Total Product
                  </h3>

                  <p className="text-center text-xl font-bold text-slate-900">
                    24
                  </p>

                  <a
                    href="#"
                    className="flex items-center justify-center gap-0.5 whitespace-nowrap text-blue-600"
                  >
                    <span className="font-['Inter'] text-xs font-medium">
                      view all
                    </span>

                    <IconArrowNarrowRight
                      size={14}
                      color="#418AF1"
                    />
                  </a>

                </div>

              </div>
            </div>


            {/* Total Queries */}
            <div className="flex h-[108px] w-full min-w-0 items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-3 py-2.5">

              <div className="flex items-center justify-center gap-2">

                <div className="flex shrink-0 items-center justify-center rounded-full bg-[#55BA71] p-1.5">
                  <IconMessage2
                    color="#FFFFFF"
                    stroke={2}
                    size={22}
                  />
                </div>

                <div className="flex min-w-0 flex-col items-center justify-center">

                  <h3 className="text-center font-['Poppins'] text-sm font-semibold text-slate-700">
                    Total Queries
                  </h3>

                  <p className="text-center text-xl font-bold text-slate-900">
                    24
                  </p>

                  <a
                    href="#"
                    className="flex items-center justify-center gap-0.5 whitespace-nowrap text-blue-600"
                  >
                    <span className="font-['Inter'] text-xs font-medium">
                      view all
                    </span>

                    <IconArrowNarrowRight
                      size={14}
                      color="#418AF1"
                    />
                  </a>

                </div>

              </div>
            </div>


            {/* Total Order */}
            <div className="flex h-[108px] w-full min-w-0 items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-3 py-2.5">

              <div className="flex items-center justify-center gap-2">

                <div className="flex shrink-0 items-center justify-center rounded-full bg-[#F29006] p-1.5">
                  <IconShoppingCart
                    color="#FFFFFF"
                    stroke={2}
                    size={22}
                  />
                </div>

                <div className="flex min-w-0 flex-col items-center justify-center">

                  <h3 className="text-center font-['Poppins'] text-sm font-semibold text-slate-700">
                    Total Order
                  </h3>

                  <p className="text-center text-xl font-bold text-slate-900">
                    24
                  </p>

                  <a
                    href="#"
                    className="flex items-center justify-center gap-0.5 whitespace-nowrap text-blue-600"
                  >
                    <span className="font-['Inter'] text-xs font-medium">
                      view all
                    </span>

                    <IconArrowNarrowRight
                      size={14}
                      color="#418AF1"
                    />
                  </a>

                </div>

              </div>
            </div>


            {/* Total User */}
            <div className="flex h-[108px] w-full min-w-0 items-center justify-center rounded-lg border-2 border-slate-200 bg-white px-3 py-2.5">

              <div className="flex items-center justify-center gap-2">

                <div className="flex shrink-0 items-center justify-center rounded-full bg-[#EC494A] p-1.5">
                  <IconUsers
                    color="#FFFFFF"
                    stroke={2}
                    size={22}
                  />
                </div>

                <div className="flex min-w-0 flex-col items-center justify-center">

                  <h3 className="text-center font-['Poppins'] text-sm font-semibold text-slate-700">
                    Total User
                  </h3>

                  <p className="text-center text-xl font-bold text-slate-900">
                    24
                  </p>

                  <a
                    href="#"
                    className="flex items-center justify-center gap-0.5 whitespace-nowrap text-blue-600"
                  >
                    <span className="font-['Inter'] text-xs font-medium">
                      view all
                    </span>

                    <IconArrowNarrowRight
                      size={14}
                      color="#418AF1"
                    />
                  </a>

                </div>

              </div>
            </div>

          </div>


          {/* ================= RECENT QUERIES ================= */}
          <div className="mt-4 w-full rounded-xl bg-white p-4 shadow-sm sm:p-5">

            {/* Header */}
            <div className="flex items-center justify-between gap-3 pb-4">

              <h3 className="font-['Poppins'] text-xl font-bold text-slate-900">
                Recent Queries
              </h3>

              <a
                href="#"
                className="flex shrink-0 items-center gap-1 font-['Inter'] text-sm font-medium text-blue-600 hover:underline"
              >
                <span>view all</span>

                <IconArrowNarrowRight size={16} />
              </a>

            </div>


            {/* Table */}
            <div className="w-full overflow-x-auto">

              <table className="w-full min-w-[750px] text-left font-['Inter'] text-sm">

                <thead className="border-b border-slate-100 bg-slate-50/70 font-semibold text-slate-700">

                  <tr>

                    <th className="w-16 px-3 py-3 text-center">
                      S.No
                    </th>

                    <th className="px-3 py-3 text-center">
                      Name
                    </th>

                    <th className="px-3 py-3 text-center">
                      Email
                    </th>

                    <th className="px-3 py-3 text-center">
                      Message
                    </th>

                    <th className="px-3 py-3 text-center">
                      Date
                    </th>

                  </tr>

                </thead>


                <tbody className="divide-y divide-slate-100 text-slate-600">

                  <tr className="transition-colors hover:bg-slate-50">

                    <td className="px-3 py-3.5 text-center font-medium text-slate-800">
                      1
                    </td>

                    <td className="px-3 py-3.5 text-center font-medium text-slate-800">
                      Amit Kumar
                    </td>

                    <td className="px-3 py-3.5 text-center text-slate-500">
                      amit@gmail.com
                    </td>

                    <td className="max-w-xs truncate px-3 py-3.5 text-center text-slate-600">
                      Need bulk quantity of cement...
                    </td>

                    <td className="whitespace-nowrap px-3 py-3.5 text-center text-slate-500">
                      2025-09-20 10:24
                    </td>

                  </tr>


                  <tr className="transition-colors hover:bg-slate-50">

                    <td className="px-3 py-3.5 text-center font-medium text-slate-800">
                      2
                    </td>

                    <td className="px-3 py-3.5 text-center font-medium text-slate-800">
                      Rohit Sharma
                    </td>

                    <td className="px-3 py-3.5 text-center text-slate-500">
                      rohit@xyz.com
                    </td>

                    <td className="px-3 py-3.5 text-center text-slate-600">
                      What is the price of TMT bars?
                    </td>

                    <td className="whitespace-nowrap px-3 py-3.5 text-center text-slate-500">
                      2025-09-20 09:50
                    </td>

                  </tr>


                  <tr className="transition-colors hover:bg-slate-50">

                    <td className="px-3 py-3.5 text-center font-medium text-slate-800">
                      3
                    </td>

                    <td className="px-3 py-3.5 text-center font-medium text-slate-800">
                      Priya Singh
                    </td>

                    <td className="px-3 py-3.5 text-center text-slate-500">
                      priya@gmail.com
                    </td>

                    <td className="px-3 py-3.5 text-center text-slate-600">
                      Do you deliver in Lucknow?
                    </td>

                    <td className="whitespace-nowrap px-3 py-3.5 text-center text-slate-500">
                      2025-09-19 16:32
                    </td>

                  </tr>


                  <tr className="transition-colors hover:bg-slate-50">

                    <td className="px-3 py-3.5 text-center font-medium text-slate-800">
                      4
                    </td>

                    <td className="px-3 py-3.5 text-center font-medium text-slate-800">
                      Sandeep Yadav
                    </td>

                    <td className="px-3 py-3.5 text-center text-slate-500">
                      sandeep@abc.com
                    </td>

                    <td className="px-3 py-3.5 text-center text-slate-600">
                      I want to buy 50 bags of cement.
                    </td>

                    <td className="whitespace-nowrap px-3 py-3.5 text-center text-slate-500">
                      2025-09-19 14:12
                    </td>

                  </tr>


                  <tr className="transition-colors hover:bg-slate-50">

                    <td className="px-3 py-3.5 text-center font-medium text-slate-800">
                      5
                    </td>

                    <td className="px-3 py-3.5 text-center font-medium text-slate-800">
                      Neha Verma
                    </td>

                    <td className="px-3 py-3.5 text-center text-slate-500">
                      neha@domain.com
                    </td>

                    <td className="px-3 py-3.5 text-center text-slate-600">
                      Any discount on bulk orders?
                    </td>

                    <td className="whitespace-nowrap px-3 py-3.5 text-center text-slate-500">
                      2025-09-18 11:05
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>


          {/* ================= PRODUCT HEADER ================= */}
          <div className="mt-4 w-full rounded-xl bg-white p-4 shadow-sm sm:p-5">

            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* Heading */}
              <h3 className="shrink-0 font-['Poppins'] text-xl font-bold text-slate-900">
                Product
              </h3>


              {/* Search / Filter / Add */}
              <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">

                {/* Search */}
                <div className="flex h-10 w-full items-center rounded-md border-2 border-slate-200 px-2.5 transition focus-within:border-[#FA5C0E] sm:w-[220px]">

                  <input
                    type="text"
                    placeholder="Search product"
                    className="h-full w-full bg-transparent font-['Inter'] text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />

                  <IconSearch
                    size={18}
                    className="shrink-0 text-slate-400"
                  />

                </div>


                {/* Category */}
                <div className="relative h-10 w-full sm:w-[200px]">

                  <select
                    className="
                      h-full
                      w-full
                      appearance-none
                      rounded-md
                      border-2
                      border-slate-200
                      bg-white
                      px-2.5
                      pr-8
                      font-['Inter']
                      text-sm
                      text-slate-600
                      outline-none
                      transition
                      focus:border-[#FA5C0E]
                    "
                  >

                    <option>All Product</option>

                    <option value="Construction-Material">
                      Construction Material
                    </option>

                    <option value="Wood-&-Plywood">
                      Wood & Plywood
                    </option>

                    <option value="Ceiling-Fans-&-Exhaust">
                      Ceiling Fans & Exhaust
                    </option>

                    <option value="Sanitaryware-&-Bathing-Fitting">
                      Sanitaryware & Bathing Fitting
                    </option>

                    <option value="Tile-&-Flooring">
                      Tile & Flooring
                    </option>

                    <option value="Paint-&-Finishing">
                      Paint & Finishing
                    </option>

                    <option value="Kitchen-Sink-&-Faucet">
                      Kitchen Sink & Faucet
                    </option>

                    <option value="Wire-&-MCB">
                      Wire & MCB
                    </option>

                    <option value="Home-Appliances">
                      Home Appliances
                    </option>

                    <option value="Switches-&-Sockets">
                      Switches & Sockets
                    </option>

                    <option value="CCTV-&-Surveillance">
                      CCTV & Surveillance
                    </option>

                    <option value="Lighting">
                      Lighting
                    </option>

                  </select>


                  <IconChevronDown
                    size={16}
                    className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                </div>


                {/* Add Product */}
                <a
                  href="/add-product"
                  className="
                    flex
                    h-10
                    items-center
                    justify-center
                    whitespace-nowrap
                    rounded-md
                    bg-[#FA5C0E]
                    px-4
                    font-['Inter']
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#e95208]
                  "
                >
                  + Add Product
                </a>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
};

export default page;