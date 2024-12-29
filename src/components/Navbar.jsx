import React from "react";
import { useDispatch } from "react-redux";
import { setSidebar } from "../store/slices/sidebarSlice";
import { Link } from "react-router-dom";

const Avatar = "/assets/images/avatar.png";
const Menu = "/assets/images/menu.png";
const Bag = "/assets/images/bag.png";
const Heart = "/assets/images/heart.png";

const Navbar = () => {
  const dispatch = useDispatch();
  
  return (
    <div className="flex items-center justify-between px-[18px] py-3.5 sticky top-0 z-10 bg-primary-500">
      <img onClick={() => dispatch(setSidebar(true))} src={Menu} className="size-[30px] cursor-pointer" />
      <div className="flex gap-2.5 items-center *:size-[30px] *:cursor-pointer">
        <Link to="liked-products">
          <img src={Heart} alt="" />
        </Link>
        <Link to="/cart">
          <img src={Bag} alt="" />
        </Link>
        {/* <img src={Avatar} alt="" /> */}
      </div>
    </div>
  );
};

export default Navbar;
