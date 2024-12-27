import React, { useState } from "react";

const Shirt = "/assets/images/shirt.png";
const Pant = "/assets/images/pant.png";
const Dress = "/assets/images/dress.png";
const Coat = "/assets/images/coat.png";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([
    {
      icon: Shirt,
      label: "Shirt",
      active: false,
    },
    {
      icon: Pant,
      label: "Pant",
      active: false,
    },
    {
      icon: Dress,
      label: "Dress",
      active: false,
    },
    {
      icon: Coat,
      active: false,
    },
  ]);

  const handleCategoryClick = (index) => {
    setCategoriesData((prevData) =>
      prevData.map((category, idx) => ({
        ...category,
        active: idx === index ? !category.active : false,
      }))
    );
  };

  return (
    <div className="px-4 grid gap-[18px]">
      <div className="flex justify-between items-center">
        <span>Category</span>
        <span className="text-primary-100">See All</span>
      </div>
      <div className="flex justify-between">
        {categoriesData.map((d, idx) => (
          <div key={idx} className={`grid place-items-center size-[70px] rounded-full ${d.active ? "bg-primary-100" : "bg-primary-200"}`} onClick={() => handleCategoryClick(idx)}>
            <img src={d.icon} alt={d.label} className="size-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
