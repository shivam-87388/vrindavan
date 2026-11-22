import React from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const Productcard = ({ product }) => {
  return (
    <a
      href="#"
      className="w-full h-72 flex flex-col justify-between px-1 py-4 bg-white rounded-md border border-[#E2E8F0] hover:shadow-lg"
    >
      <div className="w-full h-32 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain rounded-sm"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-1">
        <h3 className="text-center text-black text-lg font-semibold font-['Poppins']">
          {product.title}
        </h3>

        <div className="w-full flex items-center justify-center">
          <span className="text-orange-600 text-lg font-semibold font-['Poppins']">
            Shop Now
          </span>

          <IconArrowNarrowRight color="#EB6001" />
        </div>
      </div>
    </a>
  );
};

export default Productcard;