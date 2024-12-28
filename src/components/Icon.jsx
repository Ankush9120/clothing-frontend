import React from "react";
import { IconType } from "../libs/types";

const Icon = ({ children, variant = IconType.DEFAULT, icon: Icon, className = "", iconStyle = "", ...props }) => {
  
  return (
    <div {...props} className={`p-1.5 relative rounded-full w-max !size-[30px] grid place-items-center ${className} ${variant === IconType.FILLED && "bg-white"}`}>
      <img src={Icon} alt="" className={iconStyle} />
      {children}
    </div>
  );
};

export default Icon;
