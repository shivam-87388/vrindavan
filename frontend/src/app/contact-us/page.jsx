import React from 'react'
import { IconBrandTelegram } from '@tabler/icons-react';

const page = () => {
  return (
    <div className="min-h-screen flex items-start justify-center w-full">
        
    <div className="w-full flex flex-col items-center justify-center">
      {/* header image section */}
      <div className="w-full bg-[url(/contact.png)] bg-cover bg-center bg-no-repeat h-auto">
      <div className="flex flex-col w-1/2 items-center justify-center py-4 px-6">
      <h3 className="w-full text-start text-orange-600 text-lg font-semibold font-['Poppins']">Contact Us</h3>
      <h2 className="w-full text-start text-black text-3xl font-bold font-['Poppins']">WE're Here to Help</h2>
      <p className="w-full text-start text-black text-base font-normal font-['Inter']">Have a question, need support or want to discuss a bulk order? Our team is ready to assist you. Get in touch with us and we'll get back to you as soon as possible.</p>

      </div>
      </div>
{/* form section */}
<div className="w-full flex md:flex-row flex-col items-center justify-center gap-4 p-4">
  <div className="max-w-lg flex flex-col items-center justify-center  border-2 border-slate-200 rounded-md p-4">
    <h3 className="w-full text-start text-black text-3xl font-bold font-['Poppins'] pb-2">Send Us a Message</h3>
    {/* detail field */}
    <form className="flex flex-col items-center justify-center  gap-2 w-full ">
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
  <div className="max-w-lg flex flex-col items-center justify-center  border-2 border-slate-200 rounded-md p-4">
    <h3 className="w-full text-start text-black text-3xl font-bold font-['Poppins']">Contact Infomation</h3>
    
    <div className="flex flex-col items-center justify-center mt-4 gap-2 w-full px-2">

    </div>
  </div>
</div>
       
    </div>
</div>
  )
}
 
export default page