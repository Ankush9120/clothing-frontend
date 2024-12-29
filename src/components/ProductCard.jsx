import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LikeIcon from "./LikeIcon";
import { StarIcon } from "../libs/icons";
import { formatPrice } from "../utils/utils";

const ProductCard = ({ data }) => {
  return (
    <div>
      <div className="relative">
        <Link to={`/product/${data.id}`}>
          <motion.div className="h-min select-none grid gap-[9px]" whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <img src={data.image} className="aspect-auto object-contain rounded-[8px]" alt={data.title} />
          </motion.div>
        </Link>
        <LikeIcon product={data} className="absolute bottom-2 right-2 backdrop-blur-[20px]" />
      </div>
      <div className="p-0">
        <span className="text-[10px] leading-[14px] font-semibold">{data.title}</span>
        <p className="line-clamp-2 text-[10px] leading-[12px]">{data.description}</p>
        <div className="text-[8px] bg-green-100 rounded-[2px] text-white w-min flex items-center py-[1px] px-0.5 gap-0.5 my-1 mb-1.5">
          4 <StarIcon /> <div className="bg-white w-[1px] h-2 mx-[1px]"></div>
          1.6K
        </div>
        <div className="flex items-center gap-1.5">
          <div className="text-sm leading-[19px]">₹{formatPrice(data.price)}</div>
          <div className="line-through opacity-60 text-[12px] leading-[16.56px]">₹{formatPrice(data.originalPrice)}</div>
          <div className="text-green-100 text-[12px] leading-[16px]">{data.discount}% off</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
