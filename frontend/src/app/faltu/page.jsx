'use client';
import React,{useState} from 'react'
import { IconUserCircle } from '@tabler/icons-react';


const page = () => {
  const [user, setUser] = useState("");
  const username = localStorage.getItem("user_name");
  return (
    <div className="min-h-screen flex items-center justify-center">
      {
        setUser ?<div className="flex felx-row h-8 shrink-0 items-center justify-center rounded-md bg-blue-600 px-1">
          <IconUserCircle stroke={2} color="#ffffff" size={35}/>
          <h1 className="text-xs font-semibold font-['Inter'] text-white text-nowrap">{username}</h1>
        </div>:<div></div>
      }
    </div>
  )
}

export default page