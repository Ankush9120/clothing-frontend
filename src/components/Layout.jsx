import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen max-w-[767px] mx-auto bg-primary-500 flex flex-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
