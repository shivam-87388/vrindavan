import React from 'react'
import { IconShieldCheckered,IconTruckDelivery,IconHours24,IconArrowNarrowRight} from '@tabler/icons-react';

const homepage = () => {
  return (
   <div className="min-h-screen">
    {/* desktop hero section */}
    <header className='hidden lg:flex w-full'>
      <div className="bg-[url('/hero-section.png')] bg-cover bg-center w-full ">
      <div className="flex flex-col items-start justify-start  pl-40  pr-210 py-12">
      <p className="text-orange-600 text-lg font-semibold font-['Poppins']">EVERYTHING FOR YOUR HOME</p>
      <h1 className="text-black text-3xl font-bold font-['Poppins'] mt-1">Build, Renovate & Furnish Your Home Better.</h1>
      <p className="text-black text-base font-normal font-['Inter'] mt-3">From construction material and plywood to tiles, sanitaryware, electricals appliances, lighting and more - find everything you need for home in one place.</p>
      <div className="w-full flex flex-row items-center justify-start gap-2.5 mt-2.5">
       
       {/* shop now button*/}
       <a href='#'className="w-42 flex item-center justify-center  bg-orange-600 rounded-md py-2.5">
        <span className="text-neutral-50 text-base font-semibold font-['Inter']">Shop Now</span>
        <IconArrowNarrowRight color='#FFFAFA' stroke={2}/>
        </a>
        {/* explore product button */}
        <a href=''className="w-42 flex items-center justify-center text-blue-400 text-base font-semibold font-['Inter'] rounded-md py-2.5 text-center bg-[#EFF7FE]  ring-[#4085F5] inset-ring-2">Explore Product</a>  
      </div>

      </div>
      </div>

    </header>

{/* mobile herosection */}
    <header className="lg:hidden flex flex-col items-center justify-center px-4 w-full">
      <div className="w-full flex flex-col py-2.5 px-1.5 rounded-md border-2 border-zinc-100 gap-2.5">
        <img src="/hero-section.png" className="h-72 w-full object-cover rounded-md"></img>
    <div className="flex flex-col items-center justify-start rounded-md bg-zinc-100 py-2.5 px-2.5">
      <p className="w-full text-orange-600 text-sm font-semibold font-['Poppins']">EVERYTHING FOR YOUR HOME</p>
      <h1 className="text-black text-2xl font-bold font-['Poppins'] mt-1.5">Build, Renovate & Furnish Your Home Better.</h1>
      <p className="text-black text-base font-normal font-['Inter'] mt-0.5">From construction material and plywood to tiles, sanitaryware, electricals appliances, lighting and more - find everything you need for home in one place.</p>


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
          <h3 className="text-black text-sm font-semibold font-['Poppins']">Trusted Quality</h3>
          <p className="text-black text-base font-normal font-['Inter']">100% Genuine</p>
        </div>
      </div>
      {/* label-2 */}
      <div className=" flex w-52 flex-row items-center justify-start rounded-md gap-2.5 px-2.5 py-1.5 bg-white">
        <div>
          <IconTruckDelivery color="#0252F6" stroke={2}/>
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-black text-sm font-semibold font-['Poppins']">Fast Delivery</h3>
          <p className="text-black text-base font-normal font-['Inter']">Across India</p>
        </div>
      </div>
      {/* label-3 */}
      <div className="flex w-52 flex-row items-center justify-start rounded-md gap-2.5 px-2.5 py-1.5 bg-white">
        <div>
          <IconHours24 color="#0252F6" stroke={2}/>
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-black text-sm font-semibold font-['Poppins']">24/7 Support</h3>
          <p className="text-black text-base font-normal font-['Inter']">We're here to help</p>
        </div>
      </div>
      {/* label-4 */}
      <div className="flex w-52 flex-row items-center justify-start rounded-md gap-2.5 px-2.5 py-1.5 bg-white">
        <div>
          <IconShieldCheckered color="#0252F6" stroke={2}/>
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-black text-sm font-semibold font-['Poppins']">Trusted Quality</h3>
          <p className="text-black text-base font-normal font-['Inter']">100% Genuine</p>
        </div>
      </div>
    </section>
     <hr className='hidden lg:block my-2 border-t-2 border-zinc-200 mx-24'></hr>
    

{/* product section */}
    <section className="flex flex-col items-center px-4 lg:px-40 gap-4 py-4">
      {/* product+viewall button */}
      <div className="w-full flex items-center justify-between border-b-2 border-zinc-200 pb-1">
      <h2 className="text-black text-base font-semibold font-['Poppins']">Product Cart</h2>
      <a href='#' className="flex flex-row gap-1.5 items-center justify-center">
      <span className="text-blue-600 text-sm font-medium font-['Inter']">view all</span>
      <IconArrowNarrowRight color='#296FF5'/>
      </a>
      </div>
     
      {/* cards section */}

      <div className="w-full flex flex-row gap-4 items-start justify-start flex-wrap">
        {/* card-1 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
          <img src="/product-catagory-image/construction material.png" alt='construction-image' className="max-h-full max-w-full object-contain rounded-sm"></img>
          </div>
          
          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">Construction Material</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>
        {/* card-2 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
          <img src="/product-catagory-image/wood.png" alt='wood-image' className="max-h-full max-w-full object-contain rounded-sm"></img>
          </div>


          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">Wood & Plywood</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>
        {/* card-3 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
          <img src="/product-catagory-image/fan&exasust.png" alt='fan-image' className="max-h-full max-w-full object-contain rounded-sm"></img>
          </div>


          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">Ceiling Fans & Exhaust</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>
        {/* card-4 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
          <img src="/product-catagory-image/justify-between.png" alt="Bathing product image" className="max-h-full max-w-full object-contain rounded-sm"></img>
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">Sanitaryware & Bathing Fitting</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>
        {/* card-5 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
          <img src="/product-catagory-image/tile.png" alt="tile-image"className="max-h-full max-w-full object-contain rounded-sm"></img>
          </div>


          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">Tile & Flooring</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>
        {/* card-6 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
          <img src="/product-catagory-image/paint.png" alt='paint-image' className="max-h-full max-w-full object-contain rounded-sm"></img>
          </div>


          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">Paint & Finishing</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>
        {/* card-7 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
          <img src="/product-catagory-image/kitchen.png" alt="kitchen-product-image" className="max-h-full max-w-full object-contain rounded-sm"></img>
          </div>


          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">Kitchen Sink & Faucet</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>
        {/* card-8 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
          <img src="/product-catagory-image/wire&mcb.png" alt="wire&mcb-product-image" className="max-h-full max-w-full object-contain rounded-sm"></img>
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">Wire & MCB</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>
        {/* card-9 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
          <img src="/product-catagory-image/homeappliences.png" alt='home-appliences-image' className="max-h-full max-w-full object-contain rounded-sm"></img>


          </div>
          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">Home Appliances</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>
        {/* card-10 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
          <img src="/product-catagory-image/switch&shocket.png" alt='switch-image' className="max-h-full max-w-full object-contain rounded-sm"></img>
          </div>


          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">Switchs & Shocket</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>
        {/* card-11 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
          <img src="/product-catagory-image/cctv.png" alt='cctv-camera-image' className="max-h-full max-w-full object-contain rounded-sm"></img>
          </div>


          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">CCTV & Surveillance</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>
        {/* card-12 */}
        <a href='#' className="w-40 h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg">
          <div className="w-full h-32 flex items-center justify-center">
           <img src="/product-catagory-image/lightning.png" alt='light-image' className="max-h-full max-w-full object-contain rounded-sm"></img>
          </div>
         
          <div className="w-full flex flex-col items-center justify-start gap-1">
          <h3 className="h-full w-full flex items-center justify-center leading-tight px-1 text-center text-black text-lg font-semibold font-['Poppins']">Lightning</h3>
          <div className="w-full flex items-center justify-center gap-1">
            <span className="text-orange-600 text-lg font-semibold font-['Poppins']">Shop Now</span>
            <IconArrowNarrowRight  color='#EB6001'/>
          </div>
          </div>

        </a>

      

      </div>

    </section>

    </div>
  )
}

export default homepage