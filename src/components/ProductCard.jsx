import React, { useState } from "react";
import { IoMdStar as Star } from "react-icons/io";
import { Link } from "react-router-dom";
import LikeIcon from "./LikeIcon";

const ProductCard = ({ data }) => {
  return (
    <Link to={`/product/${data.id}`}>
      <div className="h-min select-none grid gap-[9px]">
        <div className="relative">
          <img src={data.image} className="aspect-auto object-contain rounded-[8px]" />
          <LikeIcon product={data} className="absolute bottom-2 right-2 backdrop-blur-[20px]" />
        </div>
        <div className="p-0">
          <span className="text-[10px] leading-[14px]">{data.title}</span>
          <p className="line-clamp-2 text-[10px] leading-[12px]">{data.description}</p>
          <div className="text-[8px] bg-green-100 rounded-[2px] text-white w-min flex items-center py-[1px] px-0.5 gap-0.5 my-1 mb-1.5">
            4 <Star /> <div className=" bg-white w-[1px] h-2 mx-[1px]"></div>
            1.6K
          </div>
          <div className="flex  items-center gap-1.5">
            <div className="text-[14px] leading-[19px]">₹{data.price}</div> <div className=" line-through opacity-60 text-[12px] leading-[16.56px]">₹{data.price}</div>
            <div className="text-green-100 text-[12px] leading-[16px]">{data.discount}% off</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
