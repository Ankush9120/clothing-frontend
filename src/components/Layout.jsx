import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen max-w-[767px] mx-auto pb-[32px] bg-[#f0eadc]">
      <Outlet />
    </div>
  );
};

export default Layout;
