import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedModal = ({ isOpen, onClose, children, className }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="fixed inset-0 bg-secondary-200 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} onClick={onClose} />
          <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[60] w-full max-w-[90%]">
            <motion.div className={`bg-primary-500 w-full p-4 rounded-lg z-[60] ${className}`} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AnimatedModal;
