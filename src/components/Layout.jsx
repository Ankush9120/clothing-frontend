import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen max-w-[767px] mx-auto bg-primary-500 flex flex-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
