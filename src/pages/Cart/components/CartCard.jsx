import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../../store/slices/cartSlice";
import { FiTruck } from "react-icons/fi";
import { calculateDiscount, formatPrice } from "../../../utils/utils";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const { id, title, description, image, price, originalPrice, size, quantity, soldBy, deliveryDate } = product;

  const itemTotal = price * quantity;
  const handleQuantityChange = (id, value) => {
    dispatch(updateQuantity({ id, quantity: value }));
  };

  return (
    <div className="p-4 bg-primary-600 mb-4">
      <div className="flex items-center gap-[18px]">
        <img src={image} alt={title} className="w-[80px] rounded-[4px] object-cover" />
        <div className="flex-1 text-secondary-100 text-[12px]">
          <p>{title}</p>
          <p className="opacity-80">{description}</p>
          <p className="text-[10px] opacity-50">Sold by: {soldBy}</p>

          <div className="flex gap-4 mt-2">
            <select className="bg-primary-300 px-3 py-1 rounded" defaultValue={size}>
              <option>Size: S</option>
              <option>Size: M</option>
              <option>Size: L</option>
            </select>

            <select className="bg-primary-300 px-3 py-1 rounded" value={quantity} onChange={(e) => handleQuantityChange(id, Number(e.target.value))}>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  Qty: {num}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-2 flex items-center gap-2 text-secondary-100 text-[12px]">
            <span className="text-[14px]">₹{formatPrice(itemTotal)}</span>
            <span className="opacity-50 font-albert">₹{formatPrice(originalPrice * quantity)}</span>
            <span className="text-green-100 font-albert">{calculateDiscount(originalPrice, price)}% OFF</span>
          </div>

          <div className="mt-2 text-[12px] text-secondary-100 flex items-center gap-1 font-albert">
            <span>
              <b>7-day</b> return and size exchange
            </span>
          </div>
          <div className="flex items-center gap-1 text-[12px] text-secondary-100">
            <FiTruck /> Delivery by <b>{deliveryDate}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
