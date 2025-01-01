import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setActiveFilter } from "../../../store/slices/productSlice";

const FlashSale = () => {
  const { filters, activeFilter } = useSelector(state => state.products.flashSale);
  const dispatch = useDispatch();

  const handleFilterClick = (filter) => {
    dispatch(setActiveFilter(filter));
  };

  return (
    <div className="pl-4 grid gap-[18px] mt-[32px]">
      <div>Flash Sale</div>
      <div className="flex ml-0.5 gap-2 overflow-x-auto overflow-y-hidden">
        {filters.map((filter, idx) => (
          <div key={idx} className={`border-[1px] border-solid border-colorBorder-200 rounded-full text-center h-[34px] w-max flex justify-center items-center px-[14px] cursor-pointer ${filter === activeFilter ? "bg-primary-100 text-white bg-opacity-60" : ""}`} onClick={() => handleFilterClick(filter)}>
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;

