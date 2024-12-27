import React from "react";
import { HeartIcon } from "../libs/icons";
import { toggleLikeProduct } from "../store/slices/likedProductsSlice";
import { useDispatch, useSelector } from "react-redux";

const LikeIcon = ({ product, className }) => {
  // console.log(product);
  
  const dispatch = useDispatch();
  const likedProducts = useSelector(state => state.likedProducts);
  const isLiked = likedProducts.some(item => item?.id == product?.id);

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(toggleLikeProduct(product));
  };

  return (
    <div className={`bg-white bg-opacity-[26%] size-6 grid place-items-center rounded-full cursor-pointer ${className}`} onClick={handleLike}>
      <HeartIcon className={`text-[14px] stroke-white ${isLiked ? "*:fill-red-100 !stroke-red-100" : ""}`} />
    </div>
  );
};

export default LikeIcon;
