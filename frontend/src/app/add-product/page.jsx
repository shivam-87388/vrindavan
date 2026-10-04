import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F6F8FB] ">
      <form className="w-full max-w-md flex flex-col items-center justify-center bg-white rounded-md shadow-md p-4">
        <h1 className="w-full text-center justify-center text-black text-3xl font-bold font-['Poppins'] pb-4">
          Add New Product
        </h1>

        <div className="flex flex-col items-center justify-center mt-4 gap-2 w-full px-2">
          {/* product name + product catagory */}
          <div className="w-full flex items-center justify-center gap-2">
          {/* product name*/}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="product-name"
                className="w-full text-start text-black text-sm font-bold font-['Inter']"
              >
                Product Name<span className="text-red-500">*</span>
              </label>
              <input
                id="product-name"
                type="text"
                placeholder=" Full name"
                required
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"
              ></input>
            </div>
            {/* product catagory */}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="product-category"
                className="w-full text-start text-black text-sm font-bold font-['Inter']"
              >
                Product Category<span className="text-red-500">*</span>
              </label>
              <select
                name="product-catgeory"
                id="'product-catgeory"
                className="w-full rounded-md border-2 border-slate-200 px-2.5 h-10 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"
              >
                <option value="Construction-Material">
                  Construction Material
                </option>
                <option value=">Wood-&-Plywood">Wood & Plywood</option>
                <option value="Ceiling-Fans-&-Exhaust">
                  Ceiling Fans & Exhaust
                </option>
                <option value="Sanitaryware-&-Bathing-Fitting">
                  Sanitaryware & Bathing Fitting
                </option>
                <option value="Tile-&-Flooring">Tile & Flooring</option>
                <option value="Paint-&-Finishing">Paint & Finishing</option>
                <option value="Kitche- Sink-&-Faucet">
                  Kitchen Sink & Faucet
                </option>
                <option value="Wire-&-MCB">Wire & MCB</option>
                <option value="Home-Appliences">Home Appliences</option>
                <option value="Switchs-&-Shocket">Switchs & Shocket</option>
                <option value="CCTV-&-Surveillance">CCTV & Surveillance</option>
                <option value="Lightning">Lightning</option>
              </select>
            </div>
          </div>

          {/* price + stock quantiy  */}
          <div className="w-full flex items-center justify-center gap-2">
            {/* price field */}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="product-price"
                className="w-full text-start text-black text-sm font-bold font-['Inter']"
              >
                Product Name<span className="text-red-500">*</span>
              </label>
              <input
                id="product-price"
                type="text"
                placeholder="₹ Price"
                required
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"
              ></input>
            </div>
            {/* stock field */}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="product-quantity"
                className="w-full text-start text-black text-sm font-bold font-['Inter']"
              >
                Product Quantity <span className="text-red-500">*</span>
              </label>
              <input
                id="product-quantity"
                type="number"
                placeholder="300"
                required
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"
              ></input>
              
            </div>
          </div>
            {/* description field */}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="description"
                className="w-full text-start text-black text-sm font-bold font-['Inter']"
              >
                Description<span className="text-red-500">*</span>
              </label>
              <textarea id="description"  rows={3} placeholder="Write details about the product..." required className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></textarea>
              
            </div>
          {/* image upload field */}
          <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
            <label className="w-full text-start text-black text-sm font-bold font-['Inter']">Product Image<span className="text-red-500">*</span></label>
            <input id="product-image" type="file" accept="image/*" className="w-full text-sm text-slate-500 border-2 border-slate-200 rounded-lg p-1.5 file:mr-3 file:py-1 file:px-3 file:rounded-md file:bord file:border-slate-300 file:text-sm file:font-medium file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"></input>
          </div>
        {/*  add new product button  */}
        <button
          type="submit"
          className="w-full text-center text-base font-semibold font-['Inter'] text-white bg-[#FA5C0E] px-2.5 py-2 rounded-md mt-4.5 hover:cursor-pointer"
        >
          Add Product
        </button>
        </div>
      </form>
    </div>
  );
};

export default page;
