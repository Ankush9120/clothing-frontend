import React, { useState } from 'react';
import { motion } from "framer-motion";

const DeliveryInfo = () => {
  const [pincode, setPincode] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckPincode = () => {
    setLoading(true);
    // Simulate API call with random response
    setTimeout(() => {
      const isDeliverable = Math.random() > 0.3;
      if (isDeliverable) {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        const delivery_date = date.toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
        });
        setDeliveryInfo({
          status: "success",
          delivery_date,
          cod_available: true,
          free_delivery: true,
        });
      } else {
        setDeliveryInfo({
          status: "error",
          message: "Delivery unavailable for this pincode. Please try another.",
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-[18px]">
      <h3 className="mb-1">Check delivery date</h3>
      <p className="text-secondary-100 opacity-60 text-[12px] mb-1">
        Enter pincode to know exact delivery dates/charges
      </p>

      <div className="flex items-center gap-2 mb-4 bg-primary-300 rounded-[4px] p-2">
        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="flex-grow rounded text-sm focus:outline-none bg-transparent placeholder-secondary-100 placeholder:font-normal"
        />
        <button
          onClick={handleCheckPincode}
          disabled={loading || !pincode}
          className="text-secondary-100 text-sm font-medium"
        >
          {loading ? "Checking..." : "Check"}
        </button>
      </div>

      {deliveryInfo && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded p-4 ${
            deliveryInfo.status === "success" ? "bg-green-50" : "bg-red-50"
          }`}
        >
          {deliveryInfo.status === "success" ? (
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 font-albert">
                <span>Delivery by {deliveryInfo.delivery_date}</span>
              </div>
              <div className="flex items-center gap-2 font-albert">
                <span>Pay on Delivery available</span>
              </div>
              <div className="flex items-center gap-2 font-albert">
                <span>7-day return and exchange</span>
              </div>
            </div>
          ) : (
            <div className="text-red-600 text-sm">{deliveryInfo.message}</div>
          )}
        </motion.div>
      )}

      <ul className="mt-4 space-y-2 text-sm">
        <li className="flex items-center">
          <span className="text-secondary-100 font-albert">• Free delivery on Rs 999+ orders</span>
        </li>
        <li className="flex items-center">
          <span className="text-secondary-100 font-albert">• COD on Rs 500+ orders</span>
        </li>
        <li className="flex items-center">
          <span className="text-secondary-100 font-albert">• 7-day return and size exchange</span>
        </li>
      </ul>
    </div>
  );
};

export default DeliveryInfo;

