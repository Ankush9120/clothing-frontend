import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bannerData = [
  {
    id: 1,
    title: "WINTER SALE",
    subtitle: "WEEKEND ONLY",
    discount: "UP TO 50%",
    description: "Torem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/images/banner.png"
  },
  {
    id: 2,
    title: "SUMMER COLLECTION",
    subtitle: "NEW ARRIVALS",
    discount: "UP TO 30%",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/images/banner.png"
  },
  {
    id: 3,
    title: "SPRING STYLES",
    subtitle: "FRESH LOOKS",
    discount: "UP TO 40%",
    description: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    image: "/assets/images/banner.png"
  },
  {
    id: 4,
    title: "AUTUMN TRENDS",
    subtitle: "COZY COMFORT",
    discount: "UP TO 35%",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "/assets/images/banner.png"
  }
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToNextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000);
    return () => clearInterval(timer);
  }, [goToNextSlide, currentIndex]);

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentBanner = bannerData[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <>
      <div className="relative overflow-hidden h-[300px] rounded-[12px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentBanner.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset"
          >
            <motion.div className="absolute h-full max-w-[216px] flex flex-col justify-center items-center text-center ml-[13px]">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-secondary-100 text-sm max-[400px]:text-[12px]"
              >
                {currentBanner.subtitle}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-[900] text-primary-100 text-[26px] leading-[39px] max-[400px]:text-[22px]"
              >
                {currentBanner.title}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-secondary-100 font-semibold leading-[24px] mt-1 max-[400px]:text-sm max-[400px]:leading-[18px]"
              >
                {currentBanner.discount}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-secondary-100 text-[18px] leading-[18px] mt-2.5 max-[400px]:text-sm max-[400px]:leading-[18px]"
              >
                {currentBanner.description}
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-[118px] h-[32px] flex justify-center items-center bg-primary-100 text-white gap-[15px] rounded-[7.3px] mt-3 text-sm max-[400px]:scale-75"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore <img src="/assets/images/arrow.png" className="h-[7px]" alt="arrow" />
              </motion.button>
            </motion.div>
            <motion.img
              src={currentBanner.image}
              alt="banner"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* dots  */}
      <div className="flex gap-[5px] justify-center mt-3">
        {bannerData.map((_, index) => (
          <motion.div
            key={index}
            className={`min-h-2 min-w-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-primary-100" : "bg-primary-300"
            }`}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          ></motion.div>
        ))}
      </div>
    </>
  );
};

export default Banner;

