'use client'
import { createContext, useState } from 'react'
export const userContext = createContext();




const UserContext = ({children}) => {
  const [fullname, setFullname] = useState("");
const [token, setToken] = useState("");

  return (
    <userContext.Provider value={{fullname, setFullname,token,setToken}}>{children}</userContext.Provider>
  )
}

export default UserContext;