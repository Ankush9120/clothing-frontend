import React from "react";

const SearchIcon = "/assets/icons/search.svg";
const SearchBar = () => {
  return (
    <div className="border-[1px] border-solid border-colorBorder-100 px-1.5 py-1 rounded-full flex mt-[14px] mx-[18px]">
      <div className="bg-secondary-100 size-6 rounded-full grid place-items-center">
        <img src={SearchIcon} alt="" className="size-[13px]" />
      </div>
      <input type="text" className="bg-transparent pl-3 w-full rounded-full outline-none text-[12px] text-secondary placeholder:text-secondary font-raleway" placeholder="Search for products" />
    </div>
  );
};

export default SearchBar;
