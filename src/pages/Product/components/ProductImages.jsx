import React from 'react';
import Carousel from "../../../components/Carousel";
import { StarIcon } from "../../../libs/icons";

const ProductImages = ({ images }) => (
  <div className="relative">
    <Carousel images={images} />
    <div className="absolute bg-primary-500 rounded-[4px] flex items-center bottom-12 font-albert px-1 left-4 text-sm gap-1">
      4 <StarIcon className="text-yellow-100" /> <div className="w-0.5 bg-secondary-100 h-4  opacity-50" /> 1.6K
    </div>
  </div>
);

export default ProductImages;

