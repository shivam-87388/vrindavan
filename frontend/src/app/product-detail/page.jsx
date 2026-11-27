'use client'
import React, { useState,useEffect } from 'react'
import { IconHeart,IconShieldCheckFilled,IconTruckDelivery,IconHeadset,IconPlus,IconMinus,IconHeartFilled} from '@tabler/icons-react';
import ProductSellingCard from '@/components/Productsellingcard'
import axios from 'axios';

const page = () => {
  const [quantity, setQuantity] = useState(1);
  const handleadd = ()=>{
   setQuantity(quantity+1)
  }
  const handleminus = ()=>{
   if (quantity>1) {
    setQuantity(quantity-1)
    
   }
  }
  const [wishlist, setWishlist]= useState(false);
  const handleClick = ()=>{
    setWishlist(!wishlist)
  }
  const [products,setProducts] = useState([]);
      useEffect(()=>{
      const fetchProducts = async()=>{
          try {
              const response = await axios.get("http://localhost:5000/product/:id");
             setProducts(response.data.data);
            
  
          } catch (error) {
              console.log("Error fetching products:", error)
              
          }
      }
           fetchProducts();
      },[]);
  

  return (
    <div className="min-h-screen p-4">
      <div className="flex flex-col items-start justify-start w-full gap-y-4">
<div className="flex flex-col lg:flex-row items-start justify-between lg:gap-8 gap-4 w-full">
        {/* product image */}
        <img
          src="/switch&shocket.png"
          className="rounded-md shadow-md min-w-24 max-h-sm"
        />
        <div className="w-full flex flex-col items-start justify-start px-2.5">
          <div className="flex flex-row items-center justify-between w-full">
          {/* product name */}
            <h1 className="text-black text-2xl font-bold font-['Poppins']">cement</h1>
            {/* heart icon */}
            <div onClick={handleClick} className="flex items-center justify-center p-1.5 rounded-full bg-slate-200">{wishlist?<IconHeartFilled size={28} color="#f50505"/>:<IconHeart size={28} stroke={2} color="#949494"/>}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            
            {/* price tag */}
            <div className="flex flex-row w-full items-center justify-start gap-x-2 mb-2 font-['Poppins']">
             <h2 className="font-bold text-black text-2xl text-start">
              ₹458</h2>
              <h3 className="line-through text-gray-700 text-lg">₹567</h3>
              <h4 className="text-center bg-red-500 text-white text-md font-semibold px-2.5 py-0.5 rounded">5%</h4>
            </div>
          </div>
          {/* cards sections */}
          <div className="grid grid-cols-3 items-stretch justify-center border-t-2 border-slate-200 w-full py-0.5">
                      <div className="flex lg:flex-row flex-col items-center justify-start border-r-2 border-slate-200 gap-0.5 px-3 py-3">
                          <IconShieldCheckFilled size={28} stroke={2} color="#0F67F2" className="shrink-0"/>
                          <p className="text-center text-black text-base font-['Poppins'] min-w-0">100% Genuine Product</p>
                      </div>
                      <div className="flex lg:flex-row flex-col items-center justify-start border-r-2 border-slate-200 gap-0.5 px-3 py-3">
                          <IconTruckDelivery
                              size={28}
                              stroke={2}
                              color="#0F67F2"
                              className="shrink-0"
                          />
                          <p className="text-center text-black text-base font-['Poppins'] min-w-0">Fast Delivery Across India</p>
                      </div>
                      <div className="flex lg:flex-row flex-col items-center justify-start border-r-2 border-slate-200 gap-0.5 px-3 py-3">
                          <IconHeadset size={28} stroke={2} color="#0F67F2" className='shrink-0'/>
                          <p className="text-center text-black text-base font-['Poppins'] min-w-0">
                              24/7 Support We're hare to help
                          </p>
                      </div>
          </div>
          <div className="flex lg:flex-row flex-col items-stretch justify-center gap-1.5 w-full mt-3 mb-2.5">
            <div className='flex-1 flex flex-row items-center justify-start gap-1'>
              <h3>Quantity:</h3>
              <div className='flex flex-row items-center justify-center border-2 border-slate-200 rounded-md'>
                <IconMinus onClick={handleminus} className="hover:cursor-pointer"/>
                <h3 className="px-2 border-l-2 border-slate-200 border-r-2 w-12 text-center">{quantity}</h3>
                <IconPlus onClick={handleadd} className="hover:cursor-pointer"/>

              </div>
            </div>
            {/* buy button */}
            <button className="flex-1 text-white text-center text-base font-semibold font-['Inter'] rounded-md py-2 bg-[#EB6001] border-2 border-white hover:ring-2 hover:ring-[#EB6001] hover:cursor-pointer">Buy Now</button>
            {/* add to cart button */}
            <button className="flex-1 text-white text-center text-base font-semibold font-['Inter'] rounded-md py-2 bg-blue-600 ring-2 border-2 border-white hover:ring-2 hover:ring-blue-600 hover:cursor-pointer">Add to cart
            </button>
          </div>
           {/* aboutsection */}
            <div className="flex flex-col items-start justify-start w-full px-1.5 py-0.5 rounded-md border-2 border-slate-200 gap-y-0.5">
              <h2 className="font-bold text-black text-xl text-start">Product details</h2>
              <p className="text-start font-normal text-black text-base">Elegant Design: Tailored in a modern slim fit, this blazer features a sharp notch lapel and two-button closure for a clean, sophisticated look.</p>
            </div>
        </div>
        
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-y-0.5">
        <h2 className="text-black text-xl font-bold font-['Poppins']">Related product</h2>
         <div className="grid lg:grid-cols-6 grid-cols-2 justify-center items-start lg:gap-4 gap-2">
           {/* cards design*/}
       {products.map((item)=>(
            <ProductSellingCard key={item._id} product={item}/>
        )
        )}
         </div>

      </div>
      </div>
      
    </div>
  );
}

export default page