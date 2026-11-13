import React, { createContext, useEffect, useState } from "react";
export const adminContext = createContext("");
export const AdminContext = ({ children }) => {
  const [adminuser, setAdminUser] = useState("");
  const [admintoken, setAdminToken] = useState("");
  useEffect(() => {
 const saveAdminuser = localStorage.getItem("adminuser")
 const saveAdmintoken = localStorage.getItem("admintoken")
 setAdminUser(saveAdminuser||"");
 setAdminToken(saveAdmintoken||"");
}, []);
  return (
    <adminContext.Provider
      value={{ adminuser, setAdminUser, admintoken, setAdminToken }}
    >
      {children}
    </adminContext.Provider>
  );
}
