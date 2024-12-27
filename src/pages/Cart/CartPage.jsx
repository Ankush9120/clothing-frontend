import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/slices/cartSlice';
import { motion } from 'framer-motion';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="pb-24">
      <h1 className="text-[18px] font-semibold p-[18px]">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-secondary-100 p-[18px]">Your cart is empty</p>
      ) : (
        <>
          <div className="grid gap-4 p-[18px]">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center gap-4 border-b pb-4"
              >
                <div className="w-1/3">
                  <img src={item.image} alt={item.title} className="w-full h-auto object-cover rounded-md" />
                </div>
                <div className="w-2/3 space-y-2">
                  <h2 className="text-[14px] font-semibold">{item.title}</h2>
                  <p className="text-[12px] text-secondary-100">Size: {item.size}</p>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-6 h-6 border rounded-full"
                      onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </button>
                    <span className="text-[14px]">{item.quantity}</span>
                    <button
                      className="w-6 h-6 border rounded-full"
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[14px] font-semibold">₹{item.price * item.quantity}</p>
                  <button
                    className="text-red-500 text-[12px]"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-[18px]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[16px] font-semibold">Total:</span>
              <span className="text-[18px] font-bold">₹{calculateTotal()}</span>
            </div>
            <button className="w-full bg-primary-100 text-white py-[10px] rounded">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

