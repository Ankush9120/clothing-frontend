import React from "react";
import { ArrivingIcon, CancelledIcon, DeliveredIcon } from "../../../libs/icons";

const getStatusIcon = (status) => {
  switch (status) {
    case "arriving":
      return ArrivingIcon;
    case "delivered":
      return DeliveredIcon;
    case "cancelled":
      return CancelledIcon;
    default:
      return null;
  }
};
const OrderStatus = ({ status, date }) => {
  const statusClasses = {
    delivered: "text-green-100",
    cancelled: "text-red-100",
    default: "text-secondary-100",
  };


  return (
    <div className="flex items-center gap-3">
      {/* Status Icon */}
      <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center">
        <img src={getStatusIcon(status)} alt={`${status} icon`} />
      </div>

      {/* Status Details */}
      <div>
        <h2 className={`text-sm ${statusClasses[status] || statusClasses.default}`}>{status?.charAt(0).toUpperCase() + status?.slice(1)}</h2>
        {date && <p className="text-[12px] text-secondary-300 font-albert">{date}</p>}
      </div>
    </div>
  );
};

export default OrderStatus;
