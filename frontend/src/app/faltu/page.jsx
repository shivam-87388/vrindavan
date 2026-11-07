'use client';
import React,{useState} from 'react'
import { IconUserCircle,IconChevronDown,IconLogout } from '@tabler/icons-react';


const page = () => {
  const [user, setUser] = useState("");
  const username = localStorage.getItem("user_name");
  const [dropdown, setDropdown] =  useState(false);
  const handleClick =()=>{
     setShowdropdown(!showdropdown);
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      {
        user ?
       <div className="flex flex-col items-center justify-center gap-0.5">
        <div className="flex h-8 shrink-0 items-center justify-center rounded-md bg-blue-600 px-1">
          <div className="flex flex-row items-center justify-center px-1">
          <IconUserCircle stroke={2} color="#ffffff" size={24}/>
          <h1 className="text-xs font-semibold font-['Inter'] text-white text-nowrap">{username}</h1>
          </div>
          <button onClick={handleClick} className="border-2 rounded-md border-white items-center justify-center">
          <IconChevronDown stroke={2} color="#ffffff" size={24}/>
          </button>
        </div>
        {
        dropdown ?
        <button className="flex h-8 shrink-0 items-center justify-center rounded-md bg-red-500 px-1">
        <IconLogout stroke={2} color="#ffffff" size={24}/>
        <span className="text-xs font-semibold font-['Inter'] text-white text-nowrap">logout</span>
       </button>:""
        }
       
       </div>
        :
        <div className="flex flex-row items-center justify-center px-1">
          <a
          href="/login"
          className="flex h-8 w-14 shrink-0 items-center justify-center rounded-md border border-blue-600 px-1 text-xs font-semibold font-['Inter'] text-blue-600 hover:bg-blue-50 lg:h-9 lg:w-20 lg:text-sm"
        >
          Login
        </a>

        {/* Signup */}
        <a
          href="/register"
          className="flex h-8 w-14 shrink-0 items-center justify-center rounded-md border border-blue-600 bg-blue-600 px-1 text-xs font-semibold font-['Inter'] text-white hover:bg-blue-700 lg:h-9 lg:w-20 lg:text-sm"
        >
          Signup
        </a>
        </div>
      }
    </div>
  )
}

export default page