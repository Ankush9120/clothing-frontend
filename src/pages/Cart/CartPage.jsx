import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiShoppingBag, FiTruck, FiShield, FiSettings } from "react-icons/fi";
import Header from "../../components/Header";
import { HeartIcon } from "../../libs/icons";
import StickyButton from "../../components/StickyButton";
import StatusBar from "../../components/StatusBar";
import AddressSection from "./components/AddressSection";
import CartCard from "./components/CartCard";
import { formatPrice } from "../../utils/utils";

const mockCoupons = [
  {
    id: 1,
    code: "LRFLAT10",
    description: "10% off on minimum purchase of Rs. 1499",
    discount: 10,
    minPurchase: 1499,
  },
  {
    id: 2,
    code: "LRFLAT10",
    description: "10% off on minimum purchase of Rs. 1499",
    discount: 10,
    minPurchase: 1499,
  },
];

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateSubTotal = () => {
    return cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  const calculateTotalMRP = () => {
    return cartItems.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
  };

  const calculateDiscount = () => {
    if (selectedCoupon) {
      const subtotal = calculateSubTotal();
      return Math.floor((subtotal * selectedCoupon.discount) / 100);
    }
    return 0;
  };

  const calculateMRPDiscount = () => {
    return calculateTotalMRP() - calculateSubTotal();
  };

  const applyCoupon = (coupon) => {
    setSelectedCoupon(coupon);
  };

  const removeCoupon = () => {
    setSelectedCoupon(null);
  };

  const totalAmount = calculateSubTotal() - calculateDiscount() + 20;

  return (
    <div>
      <Header
        title="SHOPPING BAG"
        links={[
          {
            icon: HeartIcon,
            to: "/liked-products",
          },
        ]}
      />

      <StatusBar />

      <hr className="border-[5px] border-primary-600" />
      {/* Delivery Info */}

      <AddressSection />

      {/* Product Cards */}
      {cartItems.map((item) => (
        <CartCard key={item?.id} product={item} />
      ))}

      {/* Coupons Section */}
      <div className="p-4 mb-4">
        <div className="mb-[14px]">Coupons</div>
        <div className="flex justify-between items-center mb-4 font-albert">
          <div className="flex items-center gap-2">
            <FiShoppingBag />
            <span className="font-semibold text-[12px]">Best Coupons For You</span>
          </div>
          <button className="text-primary-100 font-semibold text-[12px]">All Coupons</button>
        </div>

        {selectedCoupon ? (
          <div className="border border-primary-300 p-2 rounded-md flex justify-between items-center ">
            <div>
              <span className="border border-dashed border-green-100 bg-green-300 px-2 py-0.5 text-[12px] rounded">{selectedCoupon.code}</span>
              <span className="text-green-100 ml-3 text-[12px]">Saved ₹{calculateDiscount()}</span>
            </div>
            <button className="text-primary-100 font-albert" onClick={removeCoupon}>
              Remove
            </button>
          </div>
        ) : (
          mockCoupons.map((coupon) => (
            <div key={coupon.id} className="border border-primary-300 p-2 rounded-md mb-3 ">
              <div className="grid gap-3">
                <div>
                  <p className="text-sm">Extra 10% off</p>
                  <p className="text-secondary-100 opacity-60 text-sm font-albert">{coupon.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="border border-dashed border-green-100 bg-green-300 px-2 py-0.5 text-[12px] rounded">{coupon.code}</span>
                  <button className="text-primary-100 font-medium border border-primary-100 px-[9px] py-[5px] rounded-[4px] font-albert text-sm leading-[16px]" onClick={() => applyCoupon(coupon)}>
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Price Details */}
      <div className="p-4 mb-4">
        <h3 className="font-medium mb-4">
          Price Details ({cartItems.length} {cartItems.length === 1 ? "Item" : "Items"})
        </h3>
        <div className="space-y-3 text-secondary-100 text-sm">
          <div className="flex justify-between">
            <span className="font-albert">Total MRP</span>
            <span>₹{formatPrice(calculateTotalMRP())}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-albert">Discount on MRP</span>
            <span className="text-green-100">-₹{formatPrice(calculateMRPDiscount())}</span>
          </div>
          {selectedCoupon && (
            <div className="flex justify-between">
              <span className="font-albert">Coupon Discount</span>
              <span className="text-green-100">-₹{formatPrice(calculateDiscount())}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="font-albert">Platform Fee</span>
            <span>₹20</span>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="font-albert">Shipping Fee</span>
              <p className="text-[10px]">Free shipping for you</p>
            </div>
            <span className="text-green-100 font-albert">FREE</span>
          </div>
          <div className="border-t pt-3 flex justify-between">
            <span>Total Amount</span>
            <span>₹{formatPrice(totalAmount)}</span>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex justify-around p-4">
        <div className="flex flex-col items-center text-center max-w-[100px]">
          <div className="bg-primary-300 p-3 rounded-full">
            <FiShield size={24} />
          </div>
          <p className="text-xs mt-2">100% SECURE PAYMENT</p>
        </div>
        <div className="flex flex-col items-center text-center max-w-[100px]">
          <div className="bg-primary-300 p-3 rounded-full">
            <FiTruck size={24} />
          </div>
          <p className="text-xs mt-2">EASY RETURNS & INSTANT REFUNDS</p>
        </div>
        <div className="flex flex-col items-center text-center max-w-[100px]">
          <div className="bg-primary-300 p-3 rounded-full">
            <FiSettings size={24} />
          </div>
          <p className="text-xs mt-2">QUALITY ASSURANCE</p>
        </div>
      </div>

      <p className="text-center text-sm text-secondary-100 px-4 mb-4 font-albert">
        By placing the order, you agree to Luxeora&apos;s <b>Terms of Use</b> and <b>Privacy Policy</b>
      </p>

      <StickyButton>Place Order</StickyButton>
    </div>
  );
};

export default CartPage;
