import React from 'react'
import { IconBrandTelegram,IconPhoneFilled,IconMailFilled,IconMapPinFilled,IconClockHour3,IconBox, 
  IconTruck,IconHeadset,IconArrowRight} from '@tabler/icons-react';

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
    <div className="min-h-screen flex items-start justify-center w-full">
        
    <div className="w-full flex flex-col items-center justify-center">
      {/* header image section */}
      <div className="w-full bg-[url(/contact.png)] bg-cover bg-center bg-no-repeat h-48">
      <div className="flex flex-col w-1/2 items-center justify-center py-4 px-6">
      <h3 className="w-full text-start text-orange-600 text-lg font-semibold font-['Poppins']">Contact Us</h3>
      <h2 className="w-full text-start text-black text-3xl font-bold font-['Poppins']">WE're Here to Help</h2>
      <p className="w-full text-start text-black text-base font-normal font-['Inter']">Have a question, need support or want to discuss a bulk order? Our team is ready to assist you. Get in touch with us and we'll get back to you as soon as possible.</p>

      </div>
      </div>
{/* card section */}
<section className="w-full flex md:flex-row flex-col md:items-stretch items-start justify-center gap-4 p-4">
  <div className="w-full max-w-lg flex flex-col items-center justify-center  border-2 border-slate-200 rounded-md p-4">
    <h3 className="w-full text-start text-black text-3xl font-bold font-['Poppins'] pb-2">Send Us a Message</h3>
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
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"
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
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"
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
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"
              ></input>
            </div>
            {/* subject field */}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="product-quantity"
                className="w-full text-start text-black text-sm font-bold font-['Inter']"
              >
                Subject<span className="text-red-500">*</span>
              </label>
              <input
                id="product-quantity"
                type="text"
                placeholder="300"
                required
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"
              ></input>
              
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
              <textarea id="message" rows={3} placeholder="Write your message here..." required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></textarea>
              
            </div>
          
        {/* send message button */}
        <div className="w-full flex flex-row items-center justify-center mt-4.5 bg-[#FA5C0E] py-2 rounded-md hover:cursor-pointer gap-0.5">
          <IconBrandTelegram color='#FFFFFF' stroke={2} />
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
  <div className="w-full max-w-lg flex flex-col items-center justify-center  border-2 border-slate-200 rounded-md p-4">
    <h3 className="w-full text-start text-black text-3xl font-bold font-['Poppins'] px-2">Contact Infomation</h3>
    {/* row section */}
    <div className="flex flex-col justify-around flex-1 mt-4 gap-4 w-full px-2">
      {/* phone number field*/}
      <div className="w-full flex flex-row items-center justify-start px-2 gap-2.5">
        <div className="flex items-center justify-center p-2 rounded-full border-2 border-slate-200 shadow-lg">
        <IconPhoneFilled color='#0F67F2' size={35}/>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-black text-lg font-semibold font-['Poppins']">Phone</h3>
          <p className="text-gray-500">+91-1515151515</p>
        </div>
        
      </div>
      {/* email field  */}
      <div className="w-full flex flex-row items-center justify-start px-2 gap-2.5">
        <div className="flex items-center justify-center p-2 rounded-full border-2 border-slate-200 shadow-lg">
        <IconMailFilled color='#0F67F2' size={35}/>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-black text-lg font-semibold font-['Poppins']">Email</h3>
          <p className="text-gray-500 break-all">vrindavanHome@gmail.com</p>
        </div>
      </div>
        {/* location */}
      <div className="w-full flex flex-row items-center justify-start px-2 gap-2.5">
        <div className="flex items-center justify-center p-2 rounded-full border-2 border-slate-200 shadow-lg">
        <IconMapPinFilled color='#0F67F2' size={35}/>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-black text-lg font-semibold font-['Poppins']">Location</h3>
          <p className="text-gray-500">Lucknow</p>
        </div>
        {/* working hour */}
      </div>
      <div className="w-full flex flex-row items-center justify-start px-2 gap-2.5">
        <div className="flex items-center justify-center p-2 rounded-full border-2 border-slate-200 shadow-lg">
        <IconClockHour3 color='#0F67F2' size={35}/>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-black text-lg font-semibold font-['Poppins']">Working Hours</h3>
          <p className="text-gray-500">Mon - Sat: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-500">Sanday: Closed</p>
        </div>
        
      </div>

    </div>
  </div>
</section>

{/* how can we help secttion */}
<section className="w-full max-w-7xl mx-auto p-4 md:p-8">
  {/* Outer Card with Soft Blue Background */}
  <div className="relative overflow-hidden rounded-md bg-[#F0F7FF] p-6 md:p-10 border border-[#E0EDFB]">
    
    {/* Left Side Content Container */}
    <div className="relative z-10 w-full lg:w-[60%] xl:w-[62%]">
      {/* Header */}
      <div className="mb-8 max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D2447] font-['Poppins']">
          How Can We Help?
        </h2>
        <p className="mt-2 text-base text-[#526D82] font-['Inter'] leading-relaxed">
          Choose what you need help with, and our team will get back to you as soon as possible.
        </p>
      </div>

      {/* 3 Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div>
              <div className="mb-4 inline-block">{card.icon}</div>
              <h3 className="text-base font-bold text-[#0D2447] font-['Poppins'] mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 font-['Inter'] leading-relaxed">
                {card.desc}
              </p>
            </div>

            <a
              href="#"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F67F2] hover:gap-2.5 transition-all duration-200 font-['Inter']"
            >
              {card.linkText}
              <IconArrowRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>

    {/* Right Side India Map Background Graphic */}
    <div className="pointer-events-none absolute right-4 top-0 bottom-0 hidden lg:flex lg:w-[38%] items-center justify-end overflow-hidden py-4">
      <div className="relative h-full w-[360px] flex items-center justify-center">
        
        {/* Simplemaps SVG Map - borders ko crisp dikhane ke liye clean contrast */}
        <img
          src="/india-map.svg"
          alt="India Map"
          className="h-[88%] w-auto max-w-none object-contain opacity-75 [filter:brightness(0.95)_contrast(1.2)]"
        />

  {/* Lucknow Pointer Pin & Text Badge - Exactly centered in UP */}
{/* Lucknow Pointer Pin & Text Badge */}
<div className="absolute top-[32%] left-[40%] flex items-center gap-1">
  {/* Orange Pin Icon with Bounce */}
  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FA5C0E] text-white shadow-lg animate-bounce">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  </div>

  {/* White Card with Lucknow Text */}
  <div className="rounded-lg bg-white/95 px-2.5 py-1 shadow-md border border-slate-100 whitespace-nowrap">
    <p className="text-[10px] font-bold text-[#0D2447] leading-tight">Lucknow</p>
    <p className="text-[8px] text-gray-500 leading-tight">Uttar Pradesh</p>
  </div>
</div>
        {/* North Direction Compass (Top Right) */}
        <div className="absolute top-4 right-6 flex flex-col items-center">
          <span className="text-[10px] font-bold text-slate-700 leading-none mb-0.5">N</span>
          <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-b-[8px] border-b-slate-700"></div>
          <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-t-[8px] border-t-slate-400"></div>
        </div>

        {/* INDIA Watermark (Bottom Left of Map Area) */}
        <span className="absolute bottom-6 left-6 text-xl font-black tracking-widest text-[#0F67F2]/20">
          INDIA
        </span>

      </div>
    </div>

  </div>
</section>
       
    </div>
</div>
  )
}
 
export default page