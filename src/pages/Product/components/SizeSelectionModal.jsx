import { motion, AnimatePresence } from "framer-motion";
import { BagColoredIcon, CloseIcon } from "../../../libs/icons";

const SizeSelectionModal = ({ open, onClose, onConfirm, selectedSize, sizes, product, setSelectedSize }) => {
  if (!product) return null;

  const { price, discount } = product;
  
  const handleAddToBag = () => {
    if(!selectedSize) return
    
    onClose?.()
    onConfirm?.()
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-secondary-200 z-50" onClick={onClose} />
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }} className="fixed bottom-0 left-0 right-0 bg-primary-500 rounded-t-[20px] z-50">
            <div className="p-[14px] px-[18px]">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[16px] font-medium">Select Size</h2>
                <button onClick={onClose} >
                  <CloseIcon className="text-primary-200 text-[18px]" />
                </button>
              </div>

              {/* Size Selection */}
              <div className="flex gap-3 mb-4">
                {sizes?.map((size) => (
                  <div key={size.label} className="flex flex-col items-center">
                    <button
                      className={`size-10 border border-secondary-100 text-secondary-100 rounded-[5px] grid place-items-center text-[15px] font-albert
                        ${selectedSize === size.label ? "bg-primary-100 border-priamr10bg-primary-100 text-white" : "border-gray-300"}
                        ${size.count <= 2 ? "border-red-100" : ""}`}
                      onClick={() => setSelectedSize(size.label)}
                    >
                      {size.label}
                    </button>
                    {size.count <= 2 && <span className="text-red-100 text-[10px] mt-1 font-albert">{size.count} left</span>}
                  </div>
                ))}
              </div>

              {/* Measurements */}
              <div className="text-secondary-100 mb-4 font-albert text-[12px]">
                Garment: <span className="opacity-50">Chest (in inch):</span> 54.0 <span className="opacity-50">| Front Length (in inch):</span> 29.5 <span className="opacity-50">| Sleeve Length (in inch):</span> 23.0
              </div>

              {/* Price and Discount */}
              <div className="flex items-center gap-3 mb-1.5 text-[12px]">
                <span className="text-secondary-100 line-through">₹{"8,000"}</span>
                <span className="font-bold">₹{price}</span>
                <span className="text-green-100">{discount}% OFF</span>
              </div>

              {/* Delivery Info */}
              <div className="text-[12px] text-secondary-100 mb-1 font-albert">Delivery by Sat, 21 Dec - 110020</div>
              <div className="text-[12px] text-secondary-100 mb-6 font-albert">Seller: <b>LOREM TEXTILES PVT LTD</b></div>

              <button onClick={handleAddToBag} className="w-full py-3 bg-primary-100 text-primary-500 rounded-lg flex items-center justify-center gap-2 ripple">
                <img src={BagColoredIcon} />
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
