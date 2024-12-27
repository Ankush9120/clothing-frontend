import React from "react";

const Avatar = "/assets/images/avatar.png";
const Menu = "/assets/images/menu.png";
const Bag = "/assets/images/bag.png";
const Heart = "/assets/images/heart.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[18px] pt-3.5">
      <img src={Menu} className="size-[30px]" />
      <div className="flex gap-2.5 items-center *:size-[30px]">
        <img src={Heart} alt="" />
        <img src={Bag} alt="" />
        <img src={Avatar} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
