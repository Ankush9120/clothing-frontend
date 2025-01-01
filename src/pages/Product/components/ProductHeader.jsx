import React from "react";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import CartIcon from "../../../components/CartIcon";
import Icon from "../../../components/Icon";
import { IconType } from "../../../libs/types";

const HeartIcon = "/assets/icons/heart.svg";
const ShareIcon = "/assets/icons/share.svg";

const ProductHeader = () => {
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this product',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      console.log('Web Share not supported');
      // You could implement a custom share dialog here
    }
  };

  return (
    <div className="flex justify-between py-2.5 items-center px-4 sticky top-0 bg-primary-500 z-10">
      <BackButton />
      <div className="flex gap-2.5 items-center">
        <button onClick={handleShare}>
          <Icon icon={ShareIcon} variant={IconType.FILLED} />
        </button>
        <Link to="/liked-products">
          <Icon icon={HeartIcon} variant={IconType.FILLED} />
        </Link>
        <Link to="/cart" className="relative">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default ProductHeader;

