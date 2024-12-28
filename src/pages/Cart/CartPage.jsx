import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiShoppingBag, FiTruck, FiShield, FiSettings } from "react-icons/fi";
import { updateQuantity } from "../../store/slices/cartSlice";
import Header from "../../components/Header";
import { HeartIcon } from "../../libs/icons";
import { useNavigate } from "react-router-dom";
import { IoMdRadioButtonOn as RadioIcon } from "react-icons/io";

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
  const { addresses, selectedAddressId } = useSelector((state) => state.user);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedAddress = addresses.find((addr) => addr.id === selectedAddressId);

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

  const handleQuantityChange = (id, value) => {
    dispatch(updateQuantity({ id, quantity: value }));
  };

  const applyCoupon = (coupon) => {
    setSelectedCoupon(coupon);
  };

  const removeCoupon = () => {
    setSelectedCoupon(null);
  };

  const navigateToAddress = () => {
    navigate("/address");
  };

  const totalAmount = calculateSubTotal() - calculateDiscount() + 20; // 20 is platform fee

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

      {/* Progress Bar */}
      <div className="p-4">
        <div className="flex items-center text-sm">
          <div className="h-[1px] grow w-max bg-primary-100 relative">
            <RadioIcon className="absolute -right-1.5 -top-1.5 text-primary-100" />
          </div>
          <span className="text-primary-100 font-medium mx-2">Bag</span>

          <div className="h-[1px] grow w-max bg-secondary-100 relative opacity-50">
            <div className="absolute -right-1.5 -top-1 bg-secondary-100 rounded-full size-2" />
          </div>
          <span className="text-secondary-100 opacity-50 mx-2">Address</span>
          <div className="h-[1px] grow w-max bg-secondary-100 relative opacity-50">
            <div className="absolute -right-1.5 -top-1 bg-secondary-100 rounded-full size-2" />
          </div>
          <span className="text-secondary-100 opacity-50 mx-2">Payment</span>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="p-4 mb-4">
        {selectedAddress ? (
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Deliver to:</p>
              <p className="font-medium">
                {selectedAddress.name}, {selectedAddress.pincode}
              </p>
              <p className="text-gray-500 text-sm">{selectedAddress.address}</p>
            </div>
            <button className="text-primary-100 font-medium" onClick={navigateToAddress}>
              Change
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Deliver to:</p>
              <p className="text-gray-500 text-sm">Please add an address to proceed</p>
            </div>
            <button className="text-primary-100 font-medium border border-primary-100 px-4 py-1.5 rounded" onClick={navigateToAddress}>
              Add
            </button>
          </div>
        )}
      </div>

      {/* Product Cards */}
      {cartItems.map((item) => (
        <div key={item.id} className="p-4 bg-primary-600 mb-4">
          <div className="flex gap-4">
            <img src={item.image} alt={item.title} className="w-24 h-32 object-cover" />
            <div className="flex-1">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
              <p className="text-gray-500 text-sm">Sold by: {item.soldBy}</p>

              <div className="flex gap-4 mt-2">
                <select className="bg-primary-300 px-3 py-1 rounded" value={item.size}>
                  <option>Size: S</option>
                  <option>Size: M</option>
                  <option>Size: L</option>
                </select>

                <select className="bg-primary-300 px-3 py-1 rounded" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      Qty: {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="font-semibold">₹{calculateItemTotal(item)}</span>
                <span className="text-gray-500 line-through">₹{item.originalPrice * item.quantity}</span>
                <span className="text-green-600">{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF</span>
              </div>

              <div className="mt-2 text-sm text-gray-600 flex items-center gap-1">
                <FiTruck />
                <span>7-day return and size exchange</span>
              </div>
              <div className="text-sm text-gray-600">Delivery by {item.deliveryDate}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Coupons Section */}
      <div className="p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <FiShoppingBag />
            <span className="font-medium">Best Coupons For You</span>
          </div>
          <button className="text-primary-100 font-medium">All Coupons</button>
        </div>

        {selectedCoupon ? (
          <div className="border border-primary-300 p-2 rounded-md flex justify-between items-center ">
            <div>
              <span className="border border-dashed border-green-100 bg-green-300 px-3 py-1.5 text-sm rounded">{selectedCoupon.code}</span>
              <span className="text-green-100 ml-3">Saved ₹{calculateDiscount()}</span>
            </div>
            <button className="text-primary-100 font-medium" onClick={removeCoupon}>
              Remove
            </button>
          </div>
        ) : (
          mockCoupons.map((coupon) => (
            <div key={coupon.id} className="border border-primary-300 p-2 rounded-md mb-3 ">
              <div className="grid gap-3">
                <div>
                  <p className="text-[14px]">Extra 10% off</p>
                  <p className="text-gray-600 text-[14px] font-albert">{coupon.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="border border-dashed border-green-100 bg-green-300 px-2 py-0.5 text-sm rounded">{coupon.code}</span>
                  <button className="text-primary-100 font-medium border border-primary-100 px-[9px] py-[5px] rounded-[4px] font-albert" onClick={() => applyCoupon(coupon)}>
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
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Total MRP</span>
            <span>₹{calculateTotalMRP()}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount on MRP</span>
            <span className="text-green-600">-₹{calculateMRPDiscount()}</span>
          </div>
          {selectedCoupon && (
            <div className="flex justify-between">
              <span>Coupon Discount</span>
              <span className="text-green-600">-₹{calculateDiscount()}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Platform Fee</span>
            <span>₹20</span>
          </div>
          <div className="flex justify-between">
            <div>
              <span>Shipping Fee</span>
              <p className="text-gray-500 text-sm">Free shipping for you</p>
            </div>
            <span className="text-green-600">FREE</span>
          </div>
          <div className="border-t pt-3 flex justify-between font-semibold">
            <span>Total Amount</span>
            <span>₹{totalAmount}</span>
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

      {/* Terms */}
      <p className="text-center text-sm text-secondary-100 px-4 mb-4 font-albert">
        By placing the order, you agree to Luxeora's <b>Terms of Use</b> and <b>Privacy Policy</b>
      </p>

      {/* Place Order Button */}
      <div className="px-4 sticky bottom-0">
        <button className="w-full bg-primary-100 text-white py-3 rounded font-medium" disabled={!selectedAddress || cartItems.length === 0}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
