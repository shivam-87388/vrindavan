import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-amber-300">
      <div className="flex items-stretch w-full">
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
              <IconHomeFilled color="#ffffff" size={23} />

              <span className="font-['Inter'] text-sm text-white">
                Dashboard
              </span>
            </a>

            {/* Product */}
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-4 py-2.5 transition hover:bg-[#D35A01]"
            >
              <IconBox color="#ffffff" size={23} />

              <span className="font-['Inter'] text-sm text-white">Product</span>
            </a>

            {/* Queries */}
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-4 py-2.5 transition hover:bg-[#D35A01]"
            >
              <IconMessage2 color="#ffffff" size={23} />

              <span className="font-['Inter'] text-sm text-white">Queries</span>
            </a>

            {/* Users */}
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-4 py-2.5 transition hover:bg-[#D35A01]"
            >
              <IconUsers color="#ffffff" size={23} />

              <span className="font-['Inter'] text-sm text-white">Users</span>
            </a>

            {/* Order */}
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-4 py-2.5 transition hover:bg-[#D35A01]"
            >
              <IconShoppingCart color="#ffffff" size={23} />

              <span className="font-['Inter'] text-sm text-white">Order</span>
            </a>

            {/* Settings */}
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-4 py-2.5 transition hover:bg-[#D35A01]"
            >
              <IconSettings color="#ffffff" size={23} />

              <span className="font-['Inter'] text-sm text-white">
                Settings
              </span>
            </a>
          </nav>
        </aside>
      </div>
    </div>
  )
}

export default page