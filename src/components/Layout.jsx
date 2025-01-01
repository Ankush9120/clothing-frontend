import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "../pages/Home/components/Footer";

const Layout = () => {
  const isHomePage = useLocation().pathname === "/";
  return (
    <div className="max-w-[767px] mx-auto bg-primary-500 flex flex-col">
      <Sidebar />
      <div className="min-h-screen flex flex-col">
        <Outlet />
      </div>
      {isHomePage && <Footer />}
    </div>
  );
};

export default Layout;
