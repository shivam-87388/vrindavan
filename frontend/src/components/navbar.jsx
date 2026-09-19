import React from 'react'

const navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between p-4">
        <div className=" text-black text-base font-bold font-['Inter'] text-center">Vrindavan Home</div>
        <div className=" flex justify-between">
          <a href='#'>Home</a>
          <a href='#'>Product</a>
          <a href='#'>Categories</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </div>
        <div> 

        </div>
    </div>
  )
}

export default navbar