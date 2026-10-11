import React from "react";
import Productcard from "@/components/Productcard";
import { Categories } from "@/app/data/data";
import {
  IconShieldCheckered,
  IconTruckDelivery,
  IconHours24,
  IconArrowNarrowRight,
} from "@tabler/icons-react";

const homepage = () => {
  return (
    <div className="min-h-screen">
      {/* desktop hero section */}
      <header className="hidden md:flex w-full">
        <div className="bg-[url('/hero-section.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col items-start justify-start lg:pl-40 lg:pr-210 lg:py-12 pl-8 pr-110 py-2.5">
            <p className="text-orange-600 text-lg font-semibold font-['Poppins']">
              EVERYTHING FOR YOUR HOME
            </p>
            <h1 className="w-full text-start text-black text-3xl font-bold font-['Poppins'] mt-1">
              Build, Renovate & Furnish Your Home Better.
            </h1>
            <p className="text-black text-base font-normal font-['Inter'] lg:mt-3 mt-0">
              From construction material and plywood to tiles, sanitaryware,
              electricals appliances, lighting and more - find everything you
              need for home in one place.
            </p>
            <div className="w-full flex flex-row items-center justify-start gap-2.5 mt-2.5">
              {/* shop now button*/}
              <a
                href="#"
                className="w-42 flex items-center justify-center  bg-orange-600 rounded-md py-2.5"
              >
                <span className="text-neutral-50 text-base font-semibold font-['Inter']">
                  Shop Now
                </span>
                <IconArrowNarrowRight color="#FFFAFA" stroke={2} />
              </a>
              {/* explore product button */}
              <a
                href=""
                className="w-42 flex items-center justify-center text-blue-400 text-base font-semibold font-['Inter'] rounded-md py-2.5 text-center bg-[#EFF7FE]  ring-[#4085F5] inset-ring-2"
              >
                Explore Product
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* mobile herosection */}
      <header className="md:hidden flex flex-col items-center justify-center px-4 w-full">
        <div className="w-full flex flex-col py-2.5 px-1.5 rounded-md border-2 border-zinc-100 gap-2.5">
          <img
            src="/hero-section.png"
            className="h-72 w-full object-cover rounded-md"
          ></img>
          <div className="flex flex-col items-center justify-start rounded-md bg-zinc-100 py-2.5 px-2.5">
            <p className="w-full text-orange-600 text-sm font-semibold font-['Poppins']">
              EVERYTHING FOR YOUR HOME
            </p>
            <h1 className="text-black text-2xl font-bold font-['Poppins'] mt-1.5">
              Build, Renovate & Furnish Your Home Better.
            </h1>
            <p className="text-black text-base font-normal font-['Inter'] mt-0.5">
              From construction material and plywood to tiles, sanitaryware,
              electricals appliances, lighting and more - find everything you
              need for home in one place.
            </p>
          </div>
        </div>
      </header>

      <section className="hidden md:flex flex-row justify-around gap-4 items-center bg-[#E8F1FF] py-3.5 flex-wrap">
        {/* label-1 */}
        <div className="flex w-52 flex-row items-center justify-start rounded-md gap-2.5 px-2.5 py-1.5 bg-white">
          <div>
            <IconShieldCheckered color="#0252F6" stroke={2} />
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-black text-sm font-semibold font-['Poppins']">
              Trusted Quality
            </h3>
            <p className="text-black text-base font-normal font-['Inter']">
              100% Genuine
            </p>
          </div>
        </div>
        {/* label-2 */}
        <div className=" flex w-52 flex-row items-center justify-start rounded-md gap-2.5 px-2.5 py-1.5 bg-white">
          <div>
            <IconTruckDelivery color="#0252F6" stroke={2} />
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-black text-sm font-semibold font-['Poppins']">
              Fast Delivery
            </h3>
            <p className="text-black text-base font-normal font-['Inter']">
              Across India
            </p>
          </div>
        </div>
        {/* label-3 */}
        <div className="flex w-52 flex-row items-center justify-start rounded-md gap-2.5 px-2.5 py-1.5 bg-white">
          <div>
            <IconHours24 color="#0252F6" stroke={2} />
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-black text-sm font-semibold font-['Poppins']">
              24/7 Support
            </h3>
            <p className="text-black text-base font-normal font-['Inter']">
              We're here to help
            </p>
          </div>
        </div>
        {/* label-4 */}
        <div className="flex w-52 flex-row items-center justify-start rounded-md gap-2.5 px-2.5 py-1.5 bg-white">
          <div>
            <IconShieldCheckered color="#0252F6" stroke={2} />
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-black text-sm font-semibold font-['Poppins']">
              Trusted Quality
            </h3>
            <p className="text-black text-base font-normal font-['Inter']">
              100% Genuine
            </p>
          </div>
        </div>
      </section>
      <hr className="hidden lg:block my-2 border-t-2 border-zinc-200 mx-24"></hr>

      {/* product section */}
      <section className="flex flex-col items-center px-6 lg:px-40 gap-4 py-4">
        {/* product+viewall button */}
        <div className="w-full flex items-center justify-between border-b-2 border-zinc-200 pb-1">
          <h2 className="text-black text-base font-semibold font-['Poppins']">
            Product Cart
          </h2>
          <a
            href="#"
            className="flex flex-row gap-1.5 items-center justify-center"
          >
            <span className="text-blue-600 text-sm font-medium font-['Inter']">
              view all
            </span>
            <IconArrowNarrowRight color="#296FF5" />
          </a>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Categories.map((category) => (
            <Productcard key={category.id} product={category} />
          ))}
        </div>

        {/* footer image  */}
        <div className="w-full relative rounded-md overflow-hidden min-h-[160px] md:h-60 flex items-center bg-[#F3F4F6]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-[position:85%_center] md:bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/needhelp.png')" }}
          />

          {/* Subtle gradient taaki 320px par text readable rahe */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent md:hidden" />

          {/* Content Wrapper */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start justify-center px-3 py-3 md:px-4 md:py-0">
            {/* Heading: Mobile par text-base/text-lg, Desktop par text-2xl */}
            <h3 className="w-full text-start text-black text-base sm:text-lg md:text-2xl font-semibold font-['Poppins'] leading-tight">
              Need Bulk Order?
            </h3>

            {/* Paragraph: Mobile par text-xs, Desktop par text-base */}
            <p className="w-full text-black text-start text-xs sm:text-sm md:text-base font-normal font-['Inter'] mt-1 mb-2 md:mb-1 max-w-[170px] sm:max-w-[210px] md:max-w-none leading-snug">
              Get a special pricing for large quantity order.
            </p>

            {/* Button: Mobile par compact padding aur text-xs */}
            <div className="w-full flex items-center justify-start">
              <button className="text-white text-xs sm:text-sm md:text-base font-semibold font-['Inter'] bg-[#0B64F1] hover:bg-blue-600 rounded-md px-2.5 py-1.5 md:py-2 hover:cursor-pointer">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default homepage;
