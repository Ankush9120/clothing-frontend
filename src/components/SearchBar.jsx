import React from "react";
import { CloseIcon } from "../libs/icons";

const SearchIcon = "/assets/icons/search.svg";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleReset = () => {
    setSearchQuery("");
  };

  return (
    <div className="border-[1px] border-solid border-colorBorder-100 px-1.5 py-1 rounded-full flex mx-[18px] relative">
      <div className="bg-secondary-100 size-6 rounded-full grid place-items-center">
        <img src={SearchIcon} alt="" className="size-[13px]" />
      </div>
      <input type="text" className="bg-transparent pl-3 w-full rounded-full outline-none text-[12px] text-secondary placeholder:text-secondary font-raleway" placeholder="Search for products" value={searchQuery} onChange={handleInputChange} />
      {searchQuery && (
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2" onClick={handleReset}>
          <CloseIcon size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
