'use client'
import React from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';


const page = () => {
  const AddproductSchema = yup.object().shape({
    productname: yup
      .string()
      .min(3, "Product name must be at least 3 characters")
      .required("Product name is required"),
    productcategory: yup.string().required("Please select a product category"),
    productprice: yup
      .number()
      .typeError("Price must be a number")
      .positive("Price must be greater than 0")
      .required("Product price is required"),
    productquantity: yup
      .number()
      .typeError("Quantity must be a number")
      .integer("Quantity must be a whole number")
      .min(0, "Quantity cannot be negative")
      .required("Product quantity is required"),
    productdescription: yup
      .string()
      .required("Product description is required")
      .min(50, "Description must be at least 50 characters"),
    productrating: yup
      .number()
      .typeError("Rating must be a number")
      .min(0, "Rating cannot be less than 0")
      .max(5, "Rating cannot be greater than 5")
      .required("Product rating is required"),

    productdiscount: yup
      .number()
      .typeError("Discount must be a number")
      .min(0, "Discount cannot be negative")
      .max(100, "Discount cannot exceed 100%")
      .required("Product discount is required"),
    image: yup.mixed().required("Product image is required"),
  });
  const addproductfrom = useFormik({
    initialValues: {
      productname: "",
      productcategory: "",
      productprice: "",
      productquantity: "",
      productdescription: "",
      productrating: 0,
      productdiscount: 0,
      image: null,
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();

        formData.append("productname", values.productname);
        formData.append("productcategory", values.productcategory);
        formData.append("productprice", values.productprice);
        formData.append("productquantity", values.productquantity);
        formData.append("productdescription", values.productdescription);
        formData.append("productrating", values.productrating);
        formData.append("productdiscount", values.productdiscount);
        formData.append("image", values.image);

        const response = await axios.post(
          "http://localhost:5000/product/add-product",
          formData,
        );
        console.log("Product added successfully", response.data);
        toast.success("Product added successfully");
      } catch (error) {
        const message = error.response?.data?.message || "Product not added";
        toast.error(message);
      }
    },
    validationSchema: AddproductSchema,
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F6F8FB] ">
      <form
        onSubmit={addproductfrom.handleSubmit}
        className="w-full max-w-md flex flex-col items-center justify-center bg-white rounded-md shadow-md p-4"
      >
        <h1 className="w-full text-center justify-center text-black text-3xl font-bold font-['Poppins'] pb-4">
          Add New Product
        </h1>

        <div className="flex flex-col items-center justify-center mt-4 gap-2 w-full">
          {/* product name + product catagory */}
          <div className="w-full flex md:flex-row flex-col  items-center justify-center lg:gap-4 gap-2">
            {/* product name*/}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="productname"
                className="w-full text-start text-black text-sm font-bold font-['Inter']"
              >
                Product Name<span className="text-red-500">*</span>
              </label>
              <input
                id="productname"
                name="productname"
                type="text"
                onChange={addproductfrom.handleChange}
                value={addproductfrom.values.productname}
                onBlur={addproductfrom.handleBlur}
                placeholder="Product name"
                required
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200] h-[42px]"
              ></input>
              {addproductfrom.touched.productname &&
                addproductfrom.errors.productname && (
                  <span className="text-red-500 text-xs text-left w-full">
                    {addproductfrom.errors.productname}
                  </span>
                )}
            </div>
            {/* product catagory */}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="productcategory"
                className="w-full text-start text-black text-sm font-bold font-['Inter'] "
              >
                Product Category<span className="text-red-500">*</span>
              </label>
              <select
                id="productcategory"
                value={addproductfrom.values.productcategory}
                name="productcategory"
                onChange={addproductfrom.handleChange}
                onBlur={addproductfrom.handleBlur}
                className="w-full rounded-md border-2 border-slate-200 px-2.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200] h-[42px]"
              >
                <option value="">select</option>
                <option value="Construction-Material">
                  Construction Material
                </option>
                <option value="Wood-&-Plywood">Wood & Plywood</option>
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
              {addproductfrom.touched.productcategory &&
                addproductfrom.errors.productcategory && (
                  <span className="text-red-500 text-xs text-left w-full">
                    {addproductfrom.errors.productcategory}
                  </span>
                )}
            </div>
          </div>

          {/* price + stock quantiy  */}
          <div className="w-full flex md:flex-row flex-col  items-center justify-center lg:gap-4 gap-2">
            {/* price field */}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="productprice"
                className="w-full text-start text-black text-sm font-bold font-['Inter']"
              >
                Product Price<span className="text-red-500">*</span>
              </label>
              <input
                id="productprice"
                name="productprice"
                type="number"
                min="0"
                step="0.01"
                onChange={addproductfrom.handleChange}
                value={addproductfrom.values.productprice}
                onBlur={addproductfrom.handleBlur}
                placeholder="₹ Price"
                required
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200] h-[42px]"
              ></input>
              {addproductfrom.touched.productprice &&
                addproductfrom.errors.productprice && (
                  <span className="text-red-500 text-xs text-left w-full">
                    {addproductfrom.errors.productprice}
                  </span>
                )}
            </div>
            {/* stock field */}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="productquantity"
                className="w-full text-start text-black text-sm font-bold font-['Inter']"
              >
                Product Quantity <span className="text-red-500">*</span>
              </label>
              <input
                id="productquantity"
                name="productquantity"
                onChange={addproductfrom.handleChange}
                value={addproductfrom.values.productquantity}
                onBlur={addproductfrom.handleBlur}
                min="0"
                step="1"
                type="number"
                placeholder="300"
                required
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200] h-[42px]"
              ></input>
              {addproductfrom.touched.productquantity &&
                addproductfrom.errors.productquantity && (
                  <span className="text-red-500 text-xs text-left w-full">
                    {addproductfrom.errors.productquantity}
                  </span>
                )}
            </div>
          </div>
          {/* product rating and discount field  */}
          <div className="w-full flex md:flex-row flex-col  items-center justify-center lg:gap-4 gap-2">
            {/* rating field */}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="productrating"
                className="w-full text-start text-black text-sm font-bold font-['Inter']"
              >
                Product Rating<span className="text-red-500">*</span>
              </label>
              <input
                id="productrating"
                name="productrating"
                type="number"
                min="0"
                max="5"
                step="0.1"
                onChange={addproductfrom.handleChange}
                value={addproductfrom.values.productrating}
                onBlur={addproductfrom.handleBlur}
                placeholder="1-5"
                required
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200] h-[42px]"
              ></input>
              {addproductfrom.touched.productrating &&
                addproductfrom.errors.productrating && (
                  <span className="text-red-500 text-xs text-left w-full">
                    {addproductfrom.errors.productrating}
                  </span>
                )}
            </div>
            {/* discount field */}
            <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
              <label
                htmlFor="productdiscount"
                className="w-full text-start text-black text-sm font-bold font-['Inter']"
              >
                Product Discount <span className="text-red-500">*</span>
              </label>
              <input
                id="productdiscount"
                name="productdiscount"
                onChange={addproductfrom.handleChange}
                value={addproductfrom.values.productdiscount}
                onBlur={addproductfrom.handleBlur}
                min="0"
                max="100"
                step="1"
                type="number"
                placeholder="20%"
                required
                className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200] h-[42px]"
              ></input>
              {addproductfrom.touched.productdiscount &&
                addproductfrom.errors.productdiscount && (
                  <span className="text-red-500 text-xs text-left w-full">
                    {addproductfrom.errors.productdiscount}
                  </span>
                )}
            </div>
          </div>
          {/* description field */}
          <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
            <label
              htmlFor="productdescription"
              className="w-full text-start text-black text-sm font-bold font-['Inter']"
            >
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              id="productdescription"
              name="productdescription"
              onChange={addproductfrom.handleChange}
              value={addproductfrom.values.productdescription}
              onBlur={addproductfrom.handleBlur}
              type="text"
              rows={3}
              placeholder="Write details about the product..."
              required
              className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"
            ></textarea>
            {addproductfrom.touched.productdescription &&
              addproductfrom.errors.productdescription && (
                <span className="text-red-500 text-xs text-left w-full">
                  {addproductfrom.errors.productdescription}
                </span>
              )}
          </div>
          {/* image upload field */}
          <div className="flex flex-col items-center justify-center gap-y-0.5 w-full">
            <label
              htmlFor="image"
              className="w-full text-start text-black text-sm font-bold font-['Inter']"
            >
              Product Image<span className="text-red-500">*</span>
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              name="image"
              onChange={(e) => {
                addproductfrom.setFieldValue(
                  "image",
                  e.currentTarget.files[0] || null,
                );
              }}
              onBlur={addproductfrom.handleBlur}
              className="w-full text-sm text-slate-500 border-2 border-slate-200 rounded-lg p-1.5 file:mr-3 file:py-1 file:px-3 file:rounded-md file:bord file:border-slate-300 file:text-sm file:font-medium file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200] h-[42px]"
            ></input>
            {addproductfrom.touched.image && addproductfrom.errors.image && (
              <span className="text-red-500 text-xs text-left w-full">
                {addproductfrom.errors.image}
              </span>
            )}
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
