import React from 'react';

const SizeSelection = ({ sizes, selectedSize, setSelectedSize }) => (
  <div className="p-[18px] grid gap-[18px]">
    <div className="flex justify-between">
      <span className="text-secondary-100">Select Size</span>
      <span className="text-primary-100 cursor-pointer">Size Guide</span>
    </div>

    <div className="flex gap-2">
      {sizes.map((size) => (
        <div key={size.label} className="flex flex-col items-center">
          <div
            className={`size-10 border rounded grid place-items-center ${
              selectedSize === size.label
                ? "bg-primary-100 !border-primary-100 text-white"
                : "border-[1px] border-secondary-100"
            } ${size.count <= 2 ? "border-red-100" : ""}`}
            onClick={() => setSelectedSize(size.label)}
          >
            {size.label}
          </div>
          {size.count <= 2 && (
            <span className="text-red-500 text-xs mt-1">{size.count} left</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default SizeSelection;

