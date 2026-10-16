import React from "react";
import {
  IconBrandTelegram,
  IconPhoneFilled,
  IconMailFilled,
  IconMapPinFilled,
  IconClockHour3,
  IconBox,
  IconTruck,
  IconHeadset,
  IconArrowRight,
} from "@tabler/icons-react";

const page = () => {
  const cards = [
    {
      title: "Product Enquiry",
      desc: "Ask about product details, availability or specifications.",
      linkText: "Get Details",
      icon: <IconBox className="text-[#0F67F2]" size={36} />,
    },
    {
      title: "Bulk Orders",
      desc: "Get special pricing for large quantity orders.",
      linkText: "Get Quote",
      icon: <IconTruck className="text-[#0F67F2]" size={36} />,
    },
    {
      title: "Order Support",
      desc: "Track your order or get help with existing orders.",
      linkText: "Track Order",
      icon: <IconHeadset className="text-[#0F67F2]" size={36} />,
    },
  ];

  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="flex flex-col items-start justify-center w-full">
        {/* header image section */}
       {/* Header Image Section */}
<div className="relative w-full h-[250px] sm:h-[280px] md:h-[250px] lg:h-[280px] overflow-hidden bg-[url('/contactpage.png')] bg-cover bg-[position:58%_center] md:bg-center bg-no-repeat">

  {/* Light overlay for text readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent md:from-white/90 md:via-white/50 md:to-transparent" />

  {/* Header Content */}
  <div className="relative z-10 flex h-full w-full md:w-[58%] flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-4">

    <h3 className="text-start text-orange-600 text-lg sm:text-base font-semibold font-['Poppins']">
      Contact Us
    </h3>

    <h2 className="mt-1 text-start text-black text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight font-['Poppins']">
      We're Here to Help
    </h2>

    <p className="mt-2 max-w-lg text-start text-gray-800 text-xs sm:text-sm md:text-sm lg:text-base font-normal leading-relaxed font-['Inter']">
      Have a question, need support or want to discuss a bulk order? Our team
      is ready to assist you. Get in touch with us and we'll get back to you
      as soon as possible.
    </p>

  </div>
</div>
{/* Header Image Section End */}
        {/* header image section end */}
        <div className="flex flex-col items-center justify-center p-4 w-full gap-4">
          {/* card section */}
          <div className="w-full flex md:flex-row flex-col md:items-stretch items-start justify-around gap-4 ">
            <div className="w-full max-w-2xl flex flex-col items-center justify-center  border-2 border-slate-200 rounded-md p-4">
              <h3 className="w-full text-start text-black text-3xl font-bold font-['Poppins'] pb-2">
                Send Us a Message
              </h3>
              {/* detail field */}
              <form className="flex flex-col items-center justify-center mt-4 gap-2 w-full ">
                {/* full name +  email address*/}
                <div className="w-full flex md:flex-row flex-col  items-center justify-center lg:gap-4 gap-2 px-2">
                  {/* full name filed*/}
                  <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
                    <label
                      htmlFor="full-name"
                      className="w-full text-start text-black text-sm font-bold font-['Inter']"
                    >
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      placeholder="Full name"
                      required
                      className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200] h-[42px]"
                    ></input>
                  </div>
                  {/* email address field */}
                  <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
                    <label
                      htmlFor="email-address"
                      className="w-full text-start text-black text-sm font-bold font-['Inter']"
                    >
                      Email Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      placeholder="vrindavanHome@gmail.com"
                      required
                      className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200] h-[42px]"
                    ></input>
                  </div>
                </div>

                {/* phone number filed + subject*/}
                <div className="w-full flex md:flex-row flex-col items-center justify-center lg:gap-4 gap-2 px-2">
                  {/* phone number field */}
                  <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
                    <label
                      htmlFor="phone"
                      className="w-full text-start text-black text-sm font-bold font-['Inter']"
                    >
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91"
                      required
                      className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200] h-[42px]"
                    ></input>
                  </div>
                  {/* subject field */}
                  <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
                    <label
                      htmlFor="subject"
                      className="w-full text-start text-black text-sm font-bold font-['Inter']"
                    >
                      Subject<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200] bg-white h-[42px]"
                    >
                      <option value="">Select a subject</option>
                      <option value="bulk">Bulk Order Enquiry</option>
                      <option value="product">Product Details</option>
                      <option value="support">Order Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                {/* message field */}
                <div className="flex flex-col items-center justify-center gap-y-0.5 w-full px-2">
                  <label
                    htmlFor="message"
                    className="w-full text-start text-black text-sm font-bold font-['Inter']"
                  >
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Write your message here..."
                    required
                    className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"
                  ></textarea>
                </div>

                {/* send message button */}
                <div className="w-full flex flex-row items-center justify-center mt-4.5 bg-[#FA5C0E] py-2 rounded-md hover:cursor-pointer gap-0.5">
                  <IconBrandTelegram color="#FFFFFF" stroke={2} />
                  <button
                    type="submit"
                    className="text-center text-base font-semibold font-['Inter'] text-white "
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {/* detailfield end*/}
            </div>
            <div className="w-full max-w-2xl flex flex-col items-center justify-center  border-2 border-slate-200 rounded-md p-4">
              <h3 className="w-full text-start text-black text-3xl font-bold font-['Poppins'] px-2">
                Contact Infomation
              </h3>
              {/* row section */}
              <div className="flex flex-col justify-around flex-1 mt-4 gap-4 w-full px-2">
                {/* phone number field*/}
                <div className="w-full flex flex-row items-center justify-start px-2 gap-2.5">
                  <div className="flex items-center justify-center p-2 rounded-full border-2 border-slate-200 shadow-lg">
                    <IconPhoneFilled color="#0F67F2" size={35} />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-black text-lg font-semibold font-['Poppins']">
                      Phone
                    </h3>
                    <p className="text-gray-500">+91-1515151515</p>
                  </div>
                </div>
                {/* email field  */}
                <div className="w-full flex flex-row items-center justify-start px-2 gap-2.5">
                  <div className="flex items-center justify-center p-2 rounded-full border-2 border-slate-200 shadow-lg">
                    <IconMailFilled color="#0F67F2" size={35} />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-black text-lg font-semibold font-['Poppins']">
                      Email
                    </h3>
                    <p className="text-gray-500 break-all">
                      vrindavanHome@gmail.com
                    </p>
                  </div>
                </div>
                {/* location */}
                <div className="w-full flex flex-row items-center justify-start px-2 gap-2.5">
                  <div className="flex items-center justify-center p-2 rounded-full border-2 border-slate-200 shadow-lg">
                    <IconMapPinFilled color="#0F67F2" size={35} />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-black text-lg font-semibold font-['Poppins']">
                      Location
                    </h3>
                    <p className="text-gray-500">Lucknow</p>
                  </div>
                  {/* working hour */}
                </div>
                <div className="w-full flex flex-row items-center justify-start px-2 gap-2.5">
                  <div className="flex items-center justify-center p-2 rounded-full border-2 border-slate-200 shadow-lg">
                    <IconClockHour3 color="#0F67F2" size={35} />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-black text-lg font-semibold font-['Poppins']">
                      Working Hours
                    </h3>
                    <p className="text-gray-500">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-500">Sanday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card section */}
          {/* how can we help + map start */}
          <div className="w-full flex lg:flex-row flex-col items-center justify-around bg-[#E9F6FD] rounded-md">
            {/* how can we help card text and card field */}
            <div className="flex flex-col items-center justify-center w-full p-4">
              <h2 className="w-full text-start text-2xl font-bold font-['Poppins']">
                How Can We Help?
              </h2>
              <p className="mt-1.5 mb-4 text-black text-base font-normal font-['Inter'] leading-relaxed w-full text-start">
                Choose what you need help with, and our team will get back to
                you as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between bg-white p-5 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div>
                      <div className="mb-4 inline-block">{card.icon}</div>
                      <h3 className="text-base font-bold text-black font-['Poppins'] mb-1.5">
                        {card.title}
                      </h3>
                      <p className="text-black text-base font-normal font-['Inter']">
                        {card.desc}
                      </p>
                    </div>

                    <a
                      href="#"
                      className="mt-5 inline-flex items-center gap-1.5  hover:gap-2.5 transition-all duration-200 text-orange-600 text-lg font-semibold font-['Poppins']"
                    >
                      {card.linkText}
                      <IconArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* map block */}
            <div className="relative flex items-center justify-center w-full lg:w-[38%] h-[360px] overflow-hidden p-6">
              <div className="relative h-full w-full max-w-[340px] flex items-center justify-center">
                {/* Simplemaps SVG Map */}
                <img
                  src="/india-map.svg"
                  alt="India Map"
                  className="max-h-full w-auto object-contain opacity-75 [filter:brightness(0.95)_contrast(1.2)]"
                />

                {/* Lucknow Pointer Pin & Text Badge */}
                <div className="absolute top-[32%] left-[40%] flex items-center gap-1">
                  {/* Orange Pin Icon with Bounce */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FA5C0E] text-white shadow-lg animate-bounce">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* White Card with Lucknow Text */}
                  <div className="rounded-lg bg-white/95 px-2.5 py-1 shadow-md border border-slate-100 whitespace-nowrap">
                    <p className="text-[10px] font-bold text-[#0D2447] leading-tight">
                      Lucknow
                    </p>
                    <p className="text-[8px] text-gray-500 leading-tight">
                      Uttar Pradesh
                    </p>
                  </div>
                </div>

                {/* North Direction Compass (Top Right) */}
                <div className="absolute top-2 right-4 flex flex-col items-center">
                  <span className="text-[10px] font-bold text-slate-700 leading-none mb-0.5">
                    N
                  </span>
                  <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-b-[8px] border-b-slate-700"></div>
                  <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-t-[8px] border-t-slate-400"></div>
                </div>

                {/* INDIA Watermark (Bottom Left of Map Area) */}
                <span className="absolute bottom-2 left-2 text-xl font-black tracking-widest text-[#0F67F2]/20">
                  INDIA
                </span>
              </div>
            </div>
            {/* map block */}
          </div>
          {/* how can we help + map end */}

          <div className="w-full overflow-hidden rounded-md bg-[#E7F4FD]">
            <div className="flex w-full flex-col md:flex-row items-stretch">
              {/* Left: Construction Materials Image */}
              <div className="relative w-full min-w-0 h-[200px] md:w-[55%] md:h-[240px] lg:h-[260px] overflow-hidden">
                <img
                  src="/contactfooter.png"
                  alt="Construction materials available at Vrindavan Home"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Smooth image-to-background blend */}
                <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-28 bg-gradient-to-r from-transparent to-[#E7F4FD] md:block" />
              </div>

              {/* Right: Support Content */}
              <div className="flex w-full min-w-0 flex-col justify-center bg-[#E7F4FD] px-5 py-6 sm:px-8 md:w-[45%] md:px-6 md:py-4 lg:px-8">
                <div className="mx-auto w-full max-w-md md:mx-0">
                  <h3 className="w-full text-start text-2xl font-bold font-['Poppins']">
                    Need Immediate Support?
                  </h3>

                  <p className="mt-1.5  text-black text-base font-normal font-['Inter'] leading-relaxed w-full text-start">
                    For urgent queries, bulk orders or order issues, our team is
                    just a call or message away.
                  </p>

                  <a
                    href="#"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-[#FA5C0E] px-5 py-2.5 text-white text-base font-semibold font-['Inter'] transition-colors duration-200 hover:bg-[#E04F08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FA5C0E] "
                  >
                    Contact Now <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
