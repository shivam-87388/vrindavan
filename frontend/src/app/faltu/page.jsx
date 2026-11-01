import React from 'react'
import { IconEdit, IconTrash } from '@tabler/icons-react';

const page = () => {
  return (
   <div className="min-h-screen flex flex-col p-4 w-full ">
   <div className="grid grid-cols-5 gap-1.5 items-center justify-center py-2.5 rounded-md bg-[#F4F6F8]">
              {/* serial no */}
              <div className="flex justify-center items-center">
                <h3 className="text-center font-semibold text-slate-700">
                  S.No
                </h3>
              </div>
              {/* name field */}
              <div className="flex justify-center items-center">
                <h3 className="text-center font-semibold text-slate-700">
                  Name
                </h3>
              </div>
              {/* email field */}
              <div className="flex justify-center items-center">
                <h3 className="text-center font-semibold text-slate-700">
                  Email
                </h3>
              </div>
              {/* message */}
              <div className="flex justify-center items-center">
                <h3 className="text-center font-semibold text-slate-700">
                  Message
                </h3>
              </div>
              {/* date */}
              <div className="flex justify-center items-center">
                <h3 className="text-center font-semibold text-slate-700">
                  Date
                </h3>
              </div>
            </div>
   <div className=""></div>
   </div>
  )
}

export default page