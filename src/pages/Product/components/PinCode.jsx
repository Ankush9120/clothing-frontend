import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MdArrowBack, MdClose, MdLocalShipping, MdPayments, MdLoop } from 'react-icons/md'

const PinCode = () => {
  const [showSizeModal, setShowSizeModal] = useState(false)
  const [selectedSize, setSelectedSize] = useState("")
  const [pincode, setPincode] = useState("")
  const [deliveryStatus, setDeliveryStatus] = useState(null)
  const [isFirstClick, setIsFirstClick] = useState(true)

  const sizes = [
    { label: "XS", count: 5 },
    { label: "S", count: 4 },
    { label: "M", count: 6 },
    { label: "L", count: 3 },
    { label: "XL", count: 2 },
  ]

  const handleAddToBag = () => {
    if (isFirstClick || !selectedSize) {
      setShowSizeModal(true)
      setIsFirstClick(false)
    } else {
      // Handle add to cart logic
      console.log("Adding to bag with size:", selectedSize)
    }
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
    if (!isFirstClick) {
      setShowSizeModal(false)
    }
  }

  const checkPincode = () => {
    // Random delivery availability logic
    const isDeliverable = Math.floor(Math.random() * 11) > 5
    
    setDeliveryStatus({
      available: isDeliverable,
      message: isDeliverable 
        ? "Delivery by Sat, 21 Dec"
        : "Delivery unavailable for this pincode. Please try another.",
      date: "Sat, 21 Dec"
    })
  }

  return (
    <div className="min-h-screen bg-[#FDF8F3] relative">
      {/* Your existing product page content */}
      
      {/* Pincode Check Section */}
      <div className="p-4 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Check delivery date</h2>
        <p className="text-gray-600 mb-4">
          Enter pincode to know exact delivery dates/charges
        </p>
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="w-full p-3 bg-[#F5F5F5] rounded-lg"
              placeholder="Enter Pincode"
              maxLength={6}
            />
            {pincode && (
              <button 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B4513]"
                onClick={() => setPincode("")}
              >
                Change
              </button>
            )}
          </div>
          <button
            onClick={checkPincode}
            className="px-6 py-2 bg-[#8B4513] text-white rounded-lg"
          >
            Check
          </button>
        </div>

        {deliveryStatus && (
          <div className={`mb-4 ${deliveryStatus.available ? 'text-green-600' : 'text-red-500'}`}>
            {deliveryStatus.message}
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MdLocalShipping className="w-6 h-6" />
            <span>Free delivery on Rs 999+ orders</span>
          </div>
          <div className="flex items-center gap-3">
            <MdPayments className="w-6 h-6" />
            <span>COD on Rs500+ orders</span>
          </div>
          <div className="flex items-center gap-3">
            <MdLoop className="w-6 h-6" />
            <span>7-day return and size exchange</span>
          </div>
        </div>
      </div>

      {/* Size Selection Modal */}
      <AnimatePresence>
        {showSizeModal && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => !isFirstClick && setShowSizeModal(false)}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] z-50 p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium">Select Size</h3>
                {!isFirstClick && (
                  <button onClick={() => setShowSizeModal(false)}>
                    <MdClose className="w-6 h-6" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-5 gap-3 mb-6">
                {sizes.map((size) => (
                  <button
                    key={size.label}
                    onClick={() => handleSizeSelect(size.label)}
                    className={`relative p-3 rounded-lg border ${
                      selectedSize === size.label
                        ? 'border-[#8B4513] bg-[#8B4513] text-white'
                        : 'border-gray-300'
                    }`}
                  >
                    {size.label}
                    {size.count <= 2 && (
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-red-500">
                        {size.count} left
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="text-sm text-gray-600 mb-6">
                <p>Garment: Chest (in inch): 54.0 | Front Length (in inch): 29.5 |</p>
                <p>Sleeve Length (in inch): 23.0</p>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-2xl font-bold">₹1,699</span>
                  <span className="ml-2 text-gray-500 line-through">₹3,699</span>
                  <span className="ml-2 text-green-600">48% OFF</span>
                </div>
              </div>

              <button
                onClick={handleAddToBag}
                className="w-full py-3 bg-[#8B4513] text-white rounded-lg font-medium"
              >
                Add To Bag
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Fixed Add to Bag Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button
          onClick={handleAddToBag}
          className="w-full py-3 bg-[#8B4513] text-white rounded-lg font-medium"
        >
          {selectedSize ? 'Add To Bag' : 'Select Size'}
        </button>
      </div>
    </div>
  )
}

export default PinCode

