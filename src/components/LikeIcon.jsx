import React from "react";
import { HeartIcon } from "../libs/icons";
import { toggleLikeProduct } from "../store/slices/likedProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";


const LikeIcon = ({ product, className }) => {
  const dispatch = useDispatch();
  const likedProducts = useSelector((state) => state.likedProducts);
  const isLiked = likedProducts.some((item) => item?.id == product?.id);

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(toggleLikeProduct(product));
  };

  return (
    <motion.div className={`bg-white bg-opacity-[26%] size-6 grid place-items-center rounded-full cursor-pointer ${className}`} onClick={handleLike} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <motion.div animate={isLiked ? { scale: [1, 1.2, 1] } : { scale: 1 }} transition={{ duration: 0.3, type: "spring", stiffness: 500 }}>
        <HeartIcon className={`text-sm stroke-white ${isLiked ? "*:fill-red-100 !stroke-red-100" : ""}`} />
      </motion.div>
    </motion.div>
  );
};

export default LikeIcon;
