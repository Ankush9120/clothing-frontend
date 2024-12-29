import React from "react";
import Icon from "./Icon";

const StickyButton = ({ onClick = () => null, icon, children }) => {
  return (
    <div className="sticky bottom-0 left-0 right-0 p-[18px] bg-primary-500">
      <button className="w-full py-[10px] rounded-[8px] bg-primary-100 text-primary-500 flex justify-center items-center gap-3 ripple" onClick={onClick}>
        {icon && <Icon icon={icon} className="text-[18px]" />}
        {children}
      </button>
    </div>
  );
};

export default StickyButton;
