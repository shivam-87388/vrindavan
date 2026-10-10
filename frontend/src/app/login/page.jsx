import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F6F8FB]">
      <div className="w-full max-w-md flex flex-col items-center justify-center bg-white rounded-md shadow-md p-4">
        <h2 className="w-full text-center justify-center text-black text-3xl font-bold font-['Poppins'] pb-4">
          login form
        </h2>

        <div className="flex flex-col items-center justify-center mt-4 gap-1.5 w-full px-2">
          <div className="w-full flex flex-col items-center justify-center gap-y-0.5">
            <label
              htmlFor="user-name"
              className="w-full text-start text-black text-sm font-bold font-['Inter']"
            >
              Full Name
            </label>
            <input
              id="user-name"
              type="text"
              placeholder=" Full name"
              required
              className="w-full rounded-md border-2 border-slate-200 px-2.5 py-1.5 text-black text-base font-normal font-['Inter'] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#ED6200]"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
