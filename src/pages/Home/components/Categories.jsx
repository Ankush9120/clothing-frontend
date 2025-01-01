import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleCategoryActive } from "../../../store/slices/productSlice";

const Categories = () => {
  const categoriesData = useSelector(state => state.products.categories);
  const dispatch = useDispatch();

  const handleCategoryClick = (index) => {
    dispatch(toggleCategoryActive(index));
  };

  return (
    <div className="px-4 grid gap-[18px]">
      <div className="flex justify-between items-center">
        <span>Category</span>
        <span className="text-primary-100 cursor-pointer">See All</span>
      </div>
      <div className="flex justify-between">
        {categoriesData.map((d, idx) => (
          <div key={idx} className={`grid place-items-center size-[70px] rounded-full cursor-pointer ${d.active ? "bg-primary-100" : "bg-primary-200"}`} onClick={() => handleCategoryClick(idx)}>
            <img src={d.icon} alt={d.name} className="size-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

