import React, { useEffect, useRef } from "react";
import Icon from "./Icon";
import { IconType } from "../libs/types";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";

const BagIcon = "/assets/icons/bag.svg";

const CartIcon = () => {
  const cartItems = useSelector(state => state.cart.items);
  const count = cartItems?.length || 0;
  const controls = useAnimation();
  const prevCountRef = useRef(count);

  useEffect(() => {
    if (count > prevCountRef.current) {
      controls.start({
        scale: [1, 1.2, 0.9, 1.1, 1],
        rotate: [0, -10, 10, -5, 5, 0],
        transition: { duration: 0.6, ease: 'easeInOut' }
      });
    }
    prevCountRef.current = count;
  }, [count, controls]);

  return (
    <motion.div animate={controls}>
      <Icon icon={BagIcon} variant={IconType.FILLED}>
        {count > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute text-[6px] rounded-full bg-primary-100 text-white size-[9.5px] flex flex-col items-center top-1.5 left-[3px]"
          >
            <p>{count}</p>
          </motion.div>
        )}
      </Icon>
    </motion.div>
  );
};

export default CartIcon;

