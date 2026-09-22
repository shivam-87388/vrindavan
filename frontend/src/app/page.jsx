import React from 'react'
import { IconArrowNarrowRight, IconShieldBolt, IconCheckFilled } from '@tabler/icons-react';

const homepage = () => {
  return (
    <div className="min-h-screen">
      {/* hero section */}
      <div className="bg-[url('/hero-section.png')] bg-cover bg-center min-h-137.5 w-full flex  pl-40 pt-26">
      <div className="flex flex-col items-start justify-start gap-2.5 w-140">
        <h2 className="w-full text-start text-orange-500 text-sm font-semibold font-['Inter']">EVERYTHING FOR YOUR HOME</h2>
        <h1 className="text-start text-black text-5xl font-bold font-['Poppins']">Build, Renovate & Furnish Your Home Better.</h1>
        <p className="text-start leading-6 text-black text-lg font-normal font-['Inter']">From construction material and plywood to tiles, sanitaryware, electricals appliances, lighting and more - find everything you need for home in one place.</p>
        {/* button section */}
        <div className=" flex flex-row gap-4">
          {/* shop now button */}
          <div className="flex item-center justify-center bg-orange-600 w-32 py-2.5 rounded-md hover:cursor-pointer">
          <button className="text-white text-[16px] font-semibold font-['Inter'] hover:cursor-pointer">Shop Now</button>
          <IconArrowNarrowRight color='#ffffff'/>
          </div>
          {/* explore product button*/}
          <div className="flex item-center justify-center bg-blue-50 w-32 py-2.5 rounded-md border-blue-500 border-2 hover:cursor-pointer">
            <button className="text-blue-500 text-[16px] font-semibold font-['Inter'] hover:cursor-pointer">Explore Product</button>
          </div>

        </div>

      </div>
      </div>
      {/* end hero section */}
        {/* card section start */}
      <div className="flex items-center justify-center mt-4 mb-2 w-full border-b-2 border-b-zinc-200 pb-1.5">
       {/* card row section */}
        <div className="flex flex-row justify-around items-center px-2 py-4.5 w-280 bg-indigo-50 rounded-md">
          {/* trusted quality card section */}
          <div className="flex flex-row item justify-start w-72 shadow-md gap-2 px-3.5 py-4 rounded-md border-2 border-gray-50">
           <div className="flex items-center justify-center p-2 bg-white rounded-md">
           <IconShieldBolt color='#0252F6' stroke={2.5} />
           </div>
           <div className="flex flex-col items-center justify-start">
            <h2 className="text-black text-[16px] font-semibold font-['Inter']">Trusted Quality</h2>
            <p className="text-center text-black text-[14px] font-normal font-['Inter']">100% Genuine</p>
           </div>

          </div>
          {/* fast delivery card */}
          <div className="flex flex-row item justify-start w-72 shadow-md gap-2 px-3.5 py-4 rounded-md border-2 border-gray-50">
           <div className="flex items-center justify-center p-2 bg-white rounded-md">
           <IconShieldBolt color='#0252F6' stroke={2.5} />
           </div>
           <div className="flex flex-col items-center justify-start">
            <h2 className="text-black text-[16px] font-semibold font-['Inter']">Fast Delivery</h2>
            <p className="text-center text-black text-[14px] font-normal font-['Inter']">In ucknow</p>
           </div>

          </div>
          {/* support card */}
          <div className="flex flex-row item justify-start w-72 shadow-md gap-2 px-3.5 py-4 rounded-md border-2 border-gray-50">
           <div className="flex items-center justify-center p-2 bg-white rounded-md">
           <IconShieldBolt color='#0252F6' stroke={2.5} />
           </div>
           <div className="flex flex-col items-center justify-start">
            <h2 className="text-black text-[16px] font-semibold font-['Inter']">24/7 Support</h2>
            <p className="text-center text-black text-[14px] font-normal font-['Inter']">we're here to help</p>
           </div>

          </div>
        </div>
      </div>
      {/* card section end */}

      {/* product catageory section start */}
      <div className="w-full flex items-start justify-center">
        <div className="w-280 flex flex-col">
          <div className="flex justify-center items-center gap-3.5 p-2">
            {/* product heading & view all button start */}
          <div className="flex-1 items-center justify-start">
            <div className="text-black text-3xl font-bold font-['Poppins']">Product Categories</div>
            </div>
          {/* view all button */}
          <div className="flex-1 flex flex-row gap-0.5 justify-end hover:cursor-pointer ">
          <button className="text-blue-600 text-[16px] font-medium font-['Inter'] hover:cursor-pointer">view all</button>
          <IconArrowNarrowRight color='#296FF5' stroke={2} className="hover:cursor-pointer"/>  
          </div>
          </div>
          {/* product heading & view all button end */}
          <div className="flex-row flex  items-center gap-x-8 gap-y-4 flex-wrap pb-4">
            {/* 1 construction card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center p-2.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/construction material.png" alt="construction product img" className="w-36 h-40 rounded-sm"></img>
            <div className="flex flex-col items-center justify-start">
              <h1 className= "text-black text-xl font-semibold font-['Poppins'] leading-5.5">Construction Material</h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>

              </div>
            </div>

          </div>
           
          {/* 2 card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center px-1.5 py-1.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/wood.png" alt="furniture img" className="w-36 h-40 rounded-sm"></img>
            <div className="w-full flex flex-col items-center justify-start ">
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-5.5">Wood & Plywood</h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>
              </div>
            </div>

          </div>

          {/* 3 card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center px-1.5 py-1.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/fan&exasust.png" alt="fan&exasust img" className="w-36 h-40 rounded-sm"></img>
            <div className="w-full flex flex-col items-center justify-start ">
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-5.5">Ceiling Fans & Exhaust</h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>
              </div>
            </div>

          </div>
          {/* 4 card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center px-1.5 py-1.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/sanitaryware.png" alt="sanitaryware img" className="w-36 h-40 rounded-sm"></img>
            <div className="w-full flex flex-col items-center justify-start ">
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-5.5">Sanitaryware & Bathing Fitting</h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>
              </div>
            </div>

          </div>
          {/* 5 card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center px-1.5 py-1.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/tile.png" alt="tile img" className="w-36 h-40 rounded-sm"></img>
            <div className="w-full flex flex-col items-center justify-start ">
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-5.5 min-h-11">Tile & Flooring</h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>
              </div>
            </div>

          </div>
          {/* 6 card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center px-1.5 py-1.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/paint.png" alt="paint img" className="w-36 h-40 rounded-sm"></img>
            <div className="w-full flex flex-col items-center justify-start ">
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-5.5">Paint & Finishing</h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>
              </div>
            </div>

          </div>
          {/* 7 card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center px-1.5 py-1.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/kitchen.png" alt="kitchen product img" className="w-36 h-40 rounded-sm"></img>
            <div className="w-full flex flex-col items-center justify-start ">
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-5.5">Kitchen Sink & faucet</h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>
              </div>
            </div>

          </div>
          {/* 8 card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center px-1.5 py-1.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/wire&mcb.png" alt="wire&mcb product img" className="w-36 h-40 rounded-sm"></img>
            <div className="w-full flex flex-col items-center justify-start ">
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-5.5 min-h-11">Wires & MCB</h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>
              </div>
            </div>
          </div>
          {/* 9 card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center px-1.5 py-1.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/homeappliences.png" alt="home appliences product img" className="w-36 h-40 rounded-sm"></img>
            <div className="w-full flex flex-col items-center justify-start ">
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-5.5">Home Appliances</h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>
              </div>
            </div>
          </div>
          {/* 10 card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center px-1.5 py-1.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/switch&shocket.png" alt="switch shocket product img" className="w-36 h-40 rounded-sm"></img>
            <div className="w-full flex flex-col items-center justify-start ">
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-5.5">Switches & Shocket </h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>
              </div>
            </div>
          </div>
          {/* 11 card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center px-1.5 py-1.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/cctv.png" alt="camera product img" className="w-36 h-40 rounded-sm"></img>
            <div className="w-full flex flex-col items-center justify-start ">
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-5.5">CCTV & Surveillance</h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>
              </div>
            </div>

          </div>
          {/* 12 card */}
          <div className="flex flex-col gap-1.5 w-40 border border-zinc-100 shadow-md items-center justify-center px-1.5 py-1.5 bg-white rounded-md hover:cursor-pointer">
            <img src="../product-catagory-image/lightning.png" alt="lightning product img" className="w-36 h-40 rounded-sm"></img>
            <div className="w-full flex flex-col items-center justify-start ">
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-5.5 min-h-11">Lightning</h1>
              <div className="flex items-center justify-start gap-0.5 w-full">
                <p className="text-orange-400 text-sm font-normal font-['Inter']">Shop Now</p>
                <IconArrowNarrowRight color='#FD8C4D' stroke={1.5}/>
              </div>
            </div>

          </div>
         

          </div>
          {/* need help & Why Choose Vrindavan Home ? section */}
          <div className="flex felx-row gap-4 pb-6">
           {/* need help section start */}
          <div className="flex items-center bg-[url('/needhelp.png')] bg-cover bg-center w-179.75 rounded-md p-6">
          <div className="w-72 flex flex-col items-center justify-start">
          <div className="w-full text-black text-2xl font-semibold font-['Poppins']">Need Bulk Order?</div>
          <p className="w-full text-black text-sm font-normal font-['Inter']">Get special pricing for large quantity order.</p>
          {/* button request for quote */}
          <div className="flex items-center justify-start w-full mt-2">
          <button className="text-nowrap flex items-center justify-center bg-blue-600 text-white text-[16px] font-semibold font-['Inter'] px-3.5 py-2.5 rounded-md hover:cursor-pointer">Request a Quote</button>
          </div>
          </div>
          </div>
          {/* Why Choose Vrindavan Home ? section */}
          <div className="flex flex-col items-start justify-start gap-0.5">
            <h2 className="text-black text-2xl font-semibold font-['Poppins']">Everything You Need. One Place.</h2>
            <div className="flex flex-col items-center justify-start ">
              {/* Wide Product Range. */}
              <div className="w-full flex- flex-col items-center gap-0.5">
                <div className="w-full flex items-center">
                  <IconCheckFilled color='#FE930E' stroke={2} size={25}/>
                  <h4 className="text-black text-[18px] font-semibold font-['Inter']">Wide Product Range.</h4>
                </div>
                <p className="w-full text-black text-[16px] font-medium font-['Inter']">Construction to finishing - everything for your home.</p>
              </div>
              {/* trusted quality */}
             <div className="w-full flex flex-col  items-center gap-0.5">
                <div className="w-full flex items-center">
                  <IconCheckFilled color='#FE930E' stroke={2} size={25}/>
                  <h4 className="text-black text-[18px] font-semibold font-['Inter']">Trusted Quality</h4>
                </div>
                <p className="w-full text-black text-[16px] font-medium font-['Inter']">Reliable products from trusted brands.</p>
             </div>
              {/* best value */}
             <div className="w-full flex- flex-col  items-center gap-0.5">
                <div className="w-full flex items-center">
                  <IconCheckFilled color='#FE930E' stroke={2} size={25}/>
                  <h4 className="text-black text-[18px] font-semibold font-['Inter']">Best Value</h4>
                </div>
                <p className="w-full text-black text-[16px] font-medium font-['Inter']">Competitive price for retails & bulk orders.</p>
             </div>
             {/* easy & fast delivery */}
             <div className="w-full flex- flex-col  items-center gap-0.5">
                <div className="w-full flex items-center">
                  <IconCheckFilled color='#FE930E' stroke={2} size={25}/>
                  <h4 className="text-black text-[18px] font-semibold font-['Inter']">Easy & Fast Delivery</h4>
                </div>
                <p className="w-full text-black text-[16px] font-medium font-['Inter']">Get special pricing on construction & home improvement materials.</p>
             </div>
             
            </div>
            
          </div>
          </div>
        </div>
      </div>
      {/* card section end */}
      
      
      
    </div>
  )
}

export default homepage