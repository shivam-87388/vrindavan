'use client'
import React,{useState,useEffect} from 'react'
import ProductSellingCard from '@/components/Productsellingcard'


const page = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
    const fetchProducts = async()=>{
        try {
            const response = await fetch("http://localhost:5000/product/all-product");
            const result =  await response.json();
           setProducts(result.data);
           console.log(result.data);

        } catch (error) {
            console.log("Error fetching products:", error)
            
        }
    }
         fetchProducts();
    },[]);

  return (
    <div className="min-h-screen w-full p-4">
      <div className="grid lg:grid-cols-6 grid-cols-2 justify-center items-start lg:gap-4 gap-2">
        {/* cards design*/}
        {products.map((item)=>(
            <ProductSellingCard key={item._id} product={item}/>
        )
        )}
        
      </div>
    </div>
  )
}

export default page