import React from "react";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
          <motion.div className="bg-white rounded-2xl w-[90%] max-w-md p-6" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <MdClose className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium font-albert">{title}</h3>
                <p className="text-gray-600 font-albert">{message}</p>
              </div>
            </div>
            <div className="space-y-3">
              <motion.button onClick={onConfirm} className="w-full py-3 bg-red-600 text-white rounded-lg font-medium font-albert" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                Yes, Delete
              </motion.button>
              <motion.button onClick={onClose} className="w-full py-3 border border-gray-200 rounded-lg font-medium font-albert" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                No, Keep It
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationModal;
