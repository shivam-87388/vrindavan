import React, { createContext, useEffect, useState } from "react";
const AdminContext = createContext("");
export function AdminContext({ children }) {
  const [adminuser, setAdminUser] = useState("");
  const [admintoken, setAdminToken] = useState("");
  useEffect(() => {
 const saveAdminuser = localStorage.getItem("adminuser")
 const saveAdmintoken = localStorage.getItem("admintoken")
 setAdminUser(saveAdminuser||"");
 setAdminToken(saveAdmintoken||"");
  return () => {
   
  };
}, []);
  return (
    <AdminContext.Provider
      value={{ adminuser, setAdminUser, admintoken, setAdminToken }}
    >
      {children}
    </AdminContext.Provider>
  );
}
