import React from 'react'
import { IconEdit, IconTrash } from '@tabler/icons-react';



const AdminProductList = ({product,index,on}) => {
  const handeldelete = async(id)=>{
   
    try {
      const deleteitem = await axios.delete(`http://localhost:5000/product/delete-product/${id}`)
      const deleteproduct = product.filter((item)=>(
       item._id !== id
      ))
    setProduct(deleteproduct)
      toast.success("Delete product sucessfully")
    } catch (error) {
      toast.error("Product not delete")
      console.log(error.message)
    }

  }
  
  return (
    <div  className="grid grid-cols-7 gap-1.5 py-2 border-b-2 border-slate-200">
        {/* serial no field */}
        <div className="flex items-center justify-center">
       <h3 className="text-center font-medium text-slate-800">{index+1}</h3>
        </div>
        {/* image field */}
       <div className="flex items-center justify-center ">
        <img src={product.image} alt={product.productname} className="max-h-24 rounded-md"></img>
       </div>
       {/* name  field  */}
        <div className="flex items-center justify-center">
       <h3 className="text-center font-medium text-slate-500">{product.productname}</h3>
        </div>
        {/* product category */}
      <div className="flex items-center justify-center">
       <h3 className="text-center font-medium text-slate-500">{product.productcategory}</h3>
        </div>
        {/* product quantity */}
      <div className="flex items-center justify-center">
       <h3 className="text-center font-medium text-slate-500">{product.productquantity}</h3>
        </div>
        {/* product price */}
      <div className="flex items-center justify-center">
       <h3 className="text-center font-medium text-slate-500">₹{product.finalPrice}</h3>
        </div>
    {/* edit & delete button */}
    <div className="flex flex-row items-center justify-center gap-2.5">
        {/* edit button */}
        <a href="#" className="flex items-center justify-center bg-[#2273F3] p-0.5 rounded-md">
            <IconEdit size={28} stroke={2} color="#fcfcfc"/>
        </a>
        {/* delete button */}
        <button onClick={()=>handeldelete(product._id)} href="#" className="flex items-center justify-center bg-[#EC454A] p-0.5 rounded-md">
           <IconTrash size={28} stroke={2} color="#fcfcfc" />
        </button>
            
    </div>
    </div>
    
  )
}

export default AdminProductList