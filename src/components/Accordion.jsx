import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Accordion = ({ trigger, children, open = false, autoScroll = false }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [wasManuallyToggled, setWasManuallyToggled] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    if (isOpen && autoScroll && wasManuallyToggled && contentRef.current) {
      // Delay scrolling to ensure content is rendered
      setTimeout(() => {
        const yOffset = -20; // Adjust this value to fine-tune scroll position
        const element = contentRef.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        // Try scrollIntoView first
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        // Use window.scrollTo as a fallback
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 300); // Adjust delay as needed
    }
  }, [isOpen, autoScroll, wasManuallyToggled]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setWasManuallyToggled(true);
  };

  return (
    <div>
      <button onClick={handleToggle} aria-expanded={isOpen} className="flex items-center justify-between w-full text-secondary-100">
        {trigger}
        <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={contentRef}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
