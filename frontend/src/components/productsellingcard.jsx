import React from 'react'

const ProductSellingCard = ({product}) => {
  return (
    <div className="min-w-32 flex flex-col justify-center items-start p-1.5 border-2 border-slate-200 rounded-md gap-1 hover:shadow-xl">
      {/* Product Image + Discount */}
      <div className="w-full relative">
        <img
          src={product.image}
          alt={product.productname}
          className="w-full h-36 object-contain rounded-md p-0.5"
        />

        {product.productdiscount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.productdiscount}% OFF
          </span>
        )}
      </div>

      {/* Product Name */}
      <h1 className="w-full text-start text-black text-lg font-semibold font-['Poppins']">
        {product.productname}
      </h1>

      <p className="w-full text-start">kamal</p>

      {/* Rating */}
      <div className="flex items-center gap-1">
        <span className="text-yellow-500">★★★★★</span>
        <span className="text-sm text-gray-600">{product.productrating}</span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold">₹{product.finalPrice}</h3>
        {product.productdiscount > 0 && (
          <span className="text-sm text-gray-400 line-through">
            ₹{product.productprice}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-col px-2 py-1 gap-y-2">
        <button className="text-center w-full bg-[#EB6001] text-white rounded-md py-1.5 text-base font-semibold font-['Inter']">
          Buy Now
        </button>

        <button className="text-center w-full bg-blue-600 text-white rounded-md py-1.5 text-base font-semibold font-['Inter']">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductSellingCard;