import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { FaUser, FaTshirt, FaChild, FaGem, FaMitten, FaRing, FaShoppingBag, FaHeart, FaQuestionCircle, FaComments } from "react-icons/fa";
import { setSidebar } from "../store/slices/sidebarSlice";
import SwipeIndicator from "./SwipeIndicator";
import { Link, useLocation } from "react-router-dom";
import { BrandLogo } from "../libs/icons";

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "ease-in-out",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "ease-in-out",
      stiffness: 300,
      damping: 30,
    },
  },
};

const backdropVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.1, // Slight delay to ensure it fades out after the sidebar closes
    },
  },
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  //const [isAnimating, setIsAnimating] = useState(false) // Removed isAnimating state
  const sidebarRef = useRef(null);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
      const deltaX = touchEndX - touchStartX;

      if (!isOpen && deltaX > 50 && touchStartX < 30) {
        dispatch(setSidebar(true));
      } else if (isOpen && deltaX < -50) {
        dispatch(setSidebar(false));
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [dispatch, isOpen]);

  const menuItems = [
    {
      heading: "EXPLORE",
      items: [
        { icon: <FaTshirt />, label: "Men" },
        { icon: <FaTshirt />, label: "Women" },
        { icon: <FaChild />, label: "Kids" },
        { icon: <FaGem />, label: "Accessories" },
        { icon: <FaMitten />, label: "Winterwear Store" },
        { icon: <FaRing />, label: "Bridal Collection" },
      ],
    },
    {
      heading: "MY ACCOUNT",
      items: [
        { icon: <FaShoppingBag />, label: "Orders", to: "/orders" },
        { icon: <FaHeart />, label: "Wishlist" },
      ],
    },
    {
      heading: "CONTACT US",
      items: [
        { icon: <FaQuestionCircle />, label: "Help & Support" },
        { icon: <FaComments />, label: "Feedback & Suggestions" },
      ],
    },
  ];

  return (
    <>
      {!isHomePage && <SwipeIndicator />}

      <AnimatePresence mode="wait">{isOpen && <motion.div key="backdrop" initial="closed" animate="open" exit="closed" variants={backdropVariants} onClick={() => dispatch(setSidebar(false))} className="fixed inset-0 bg-secondary-200 z-40" />}</AnimatePresence>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div key="sidebar" ref={sidebarRef} initial="closed" animate="open" exit="closed" variants={sidebarVariants} className="fixed top-0 left-0 h-full w-[300px] bg-primary-500 z-50 overflow-y-auto rounded-tr-[24px] rounded-br-[24px] px-[18px] py-[32px]">
            <p className="text-[24px] text-primary-100 flex items-center gap-[9px] mb-5">
              <img src={BrandLogo} alt="" className="min-w-[24px] max-w-[24px] aspect-square" /> Luxeora
            </p>

            <p>Login/Sign Up</p>

            <div className="mt-[30px] font-albert grid gap-5">
              {menuItems.map((section, idx) => (
                <div key={idx}>
                  <p className="text-sm text-secondary-100 opacity-50 !font-alata mb-4">{section.heading}</p>
                  {section.items.map((item, itemIdx) => (
                    <Link key={itemIdx} to={item?.to} onClick={() => dispatch(setSidebar(false))}>
                      <button className="flex items-center w-full hover:bg-black/5 py-[18px] px-[15px] rounded-[10px]">
                        <span className="mr-3 text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
