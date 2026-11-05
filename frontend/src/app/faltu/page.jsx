'use client'
import React,{useState} from 'react'



const page = () => {
  const [user, setUser] =  useState(false)
  const fullname = localStorage.getItem("user_name");
  if (fullname !==null) {
    setUser(fullname)
  }
  return (
   <div className="min-h-screen flex flex-row items-center justify-center gap-2.5">
   { user ?<button
         
          className="flex h-8 w-14 shrink-0 items-center justify-center rounded-md border border-blue-600 px-1 text-xs font-semibold font-['Inter'] text-blue-600 hover:bg-blue-50 lg:h-9 lg:w-20 lg:text-sm"
        >
         {fullname}
        </button> :<div>
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
        </div>}
     {/* Login */}
      
   </div>
  )
}

export default page