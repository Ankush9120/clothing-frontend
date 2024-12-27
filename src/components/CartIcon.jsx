import React from "react";
import Icon from "./Icon";
import { IconType } from "../libs/types";

const BagIcon = "/assets/icons/bag.svg";

const CartIcon = ({ count = 0 }) => {
  return (
    <div>
      <Icon icon={BagIcon} variant={IconType.FILLED}>
        {count >= 0 && <div className="absolute text-[6px] rounded-full bg-primary-100 text-white size-[9.5px] grid place-items-center top-1.5 left-[3px]">{count}</div>}
      </Icon>
    </div>
  );
};

export default CartIcon;
