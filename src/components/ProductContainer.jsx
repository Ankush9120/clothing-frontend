import React from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { HiOutlineSquares2X2 as Squares } from "react-icons/hi2";
import Dropdown from "./Dropdown";

const ProductContainer = () => {
  const products = [];
  const dropdownItems = [
    { label: "Latest", value: "latest" },
    { label: "Trending", value: "trending" },
    { label: "Most Searched", value: "most_searched" },
    { label: "Top 100", value: "top_100" },
  ];
  return (
    <div className="grow">
      <div className="flex justify-between items-center px-3.5 py-4">
        <div className="flex gap-2">
          <Squares className="size-5" /> <p className="text-sm">Showing 1 - 20 of 50 results</p>
        </div>

        <Dropdown items={dropdownItems} />
      </div>
      <div className="grow grid gap-10 p-4">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
          {products.map((d, idx) => (
            <ProductCard key={idx} data={d} />
          ))}
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default ProductContainer;
