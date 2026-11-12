import React, { createContext, useState } from "react";
const AdminContext = createContext("");
export function AdminContext({ children }) {
  const [adminuser, setAdminUser] = useState("");
  const [admintoken, setAdminToken] = useState("");

  return (
    <AdminContext.Provider
      value={{ adminuser, setAdminUser, admintoken, setAdminToken }}
    >
      {children}
    </AdminContext.Provider>
  );
}
