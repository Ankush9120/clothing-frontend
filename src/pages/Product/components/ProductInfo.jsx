import React from 'react';
import LikeIcon from "../../../components/LikeIcon";
import Icon from "../../../components/Icon";
import { DiscountIcon } from "../../../libs/icons";

const ProductInfo = ({ title, description, price, originalPrice, category }) => {
  const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="p-[18px]">
      <div className="flex justify-between items-center gap-2.5">
        <div className="grid gap-1.5">
          <div className="uppercase leading-[22px]">{title}</div>
          <div className="text-[12px] leading-[14px]">{description}</div>
          <div className="text-[12px] leading-[14px] text-secondary-100">Category: {category}</div>
        </div>
        <LikeIcon product={{ title, description, price, originalPrice }} className="bg-white *:stroke-black" />
      </div>

      <div className="mt-[13px]">
        <div className="flex items-center">
          <div className="text-[18px]">₹{price}</div>
          <div className="text-secondary-100 opacity-50 ml-[14px] text-sm line-through">₹{originalPrice}</div>
          <div className="text-green-100 ml-[9px]">{discountPercentage}% OFF</div>
        </div>
        <div className="text-secondary-100 opacity-50 text-[10px] leading-[12px]">Inclusive of all taxes</div>
      </div>

      <div className="py-[11px] px-[9px] rounded-[4px] bg-gradient-to-r from-green-200 to-green-300 flex justify-between mt-3 text-[12px] items-center">
        <div className="flex items-center gap-[14px] text-green-100">
          <Icon icon={DiscountIcon} className="p-0" />
          <span>Get it for</span>
        </div>
        <span className="text-primary-100 font-semibold">How ?</span>
      </div>
    </div>
  );
};

export default ProductInfo;

