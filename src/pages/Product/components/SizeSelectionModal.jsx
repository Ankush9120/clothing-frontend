import { motion, AnimatePresence } from "framer-motion";
// import { X } from 'lucide-react';
import { BagIcon } from "../../../libs/icons";

const SizeSelectionModal = ({ 
  open, 
  onClose, 
  onConfirm, 
  selectedSize, 
  sizes,
  product,
  setSelectedSize
}) => {
  if (!product) return null;

  const { price, originalPrice, discount } = product;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="fixed bottom-0 left-0 right-0 bg-[#FAF9F8] rounded-t-[20px] z-50"
          >
            <div className="p-5">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[16px] font-medium">Select Size</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {/* <X size={20} /> */}
                </button>
              </div>

              {/* Size Selection */}
              <div className="flex gap-3 mb-6">
                {sizes?.map((size) => (
                  <div key={size.label} className="flex flex-col items-center">
                    <button
                      className={`w-[60px] h-[60px] border-2 rounded-lg grid place-items-center text-[14px] font-medium
                        ${selectedSize === size.label 
                          ? "bg-[#8B4513] border-[#8B4513] text-white" 
                          : "border-gray-300"}
                        ${size.count <= 2 ? "border-red-500" : ""}`}
                      onClick={() => setSelectedSize(size.label)}
                    >
                      {size.label}
                    </button>
                    {size.count <= 2 && (
                      <span className="text-red-500 text-[12px] mt-1">
                        {size.count} left
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Measurements */}
              <div className="text-[14px] text-gray-600 mb-6">
                <span className="font-medium text-gray-700">Garment:</span>{' '}
                Chest (in inch): 54.0 | Front Length (in inch): 29.5 | 
                Sleeve Length (in inch): 23.0
              </div>

              {/* Price and Discount */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gray-400 line-through">₹{originalPrice}</span>
                <span className="text-[18px] font-semibold">₹{price}</span>
                <span className="text-green-600">{discount}% OFF</span>
              </div>

              {/* Delivery Info */}
              <div className="text-[14px] text-gray-600 mb-1">
                Delivery by Sat, 21 Dec - 110020
              </div>
              <div className="text-[14px] text-gray-600 mb-6">
                Seller: LOREM TEXTILES PVT LTD
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={() => selectedSize && onConfirm(selectedSize)}
                className="w-full py-3 bg-[#8B4513] text-white rounded-lg flex items-center justify-center gap-2"
              >
                <img src={BagIcon} />
                Add To Bag
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SizeSelectionModal;

