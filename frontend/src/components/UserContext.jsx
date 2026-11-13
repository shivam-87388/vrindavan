'use client'
import { createContext, useState, useEffect } from 'react'
export const userContext = createContext();

const UserContext = ({children}) => {
  const [fullname, setFullname] = useState("");
const [token, setToken] = useState("");
useEffect(() => {
  const savedName = localStorage.getItem("user_name");
  const savedToken = localStorage.getItem("jwtToken");

  setFullname(savedName||"");
  setToken(savedToken||"");
}, []);
  return (
    <userContext.Provider value={{fullname, setFullname,token,setToken}}>{children}</userContext.Provider>
  )
}

export default UserContext;