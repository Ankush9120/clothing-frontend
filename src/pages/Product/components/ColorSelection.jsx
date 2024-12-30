import React from 'react';

const ColorSelection = ({ selectedColor, setSelectedColor, colors, image }) => (
  <div className="p-[18px] pr-0">
    <div className="grid gap-4">
      <div className="flex gap-1.5">
        Color <div className="text-secondary-100 opacity-50">· {selectedColor}</div>
      </div>
      <div className="flex gap-2 overflow-x-auto pr-[18px]">
        {colors.map((color, idx) => (
          <div
            key={idx}
            className={`min-w-[80px] w-[80px] h-[100px] border-[1px] ${
              selectedColor === color ? "border-primary-100" : "border-transparent"
            }`}
            onClick={() => setSelectedColor(color)}
          >
            <img src={image} alt={color} className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ColorSelection;

