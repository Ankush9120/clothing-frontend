import { Link } from "react-router-dom";
import { RightArrowIcon, StarFilledIcon, StarOutlinedIcon } from "../../../libs/icons";
import { formatPrice } from "../../../utils/utils";
import OrderStatus from "./OrderStatus";

const OrderItem = ({ order }) => (
  <div>
    <div className=" px-4">
      <OrderStatus status={order.status} date={order.date} />
    </div>

    <Link to={`/order-status/${order.id}`}>
      <div className="flex items-center gap-[18px] bg-primary-600 rounded-lg py-3 px-4 mt-2.5 cursor-pointer">
        <img src={order.product.image} alt={order.product.name} className="w-16 h-16 rounded-lg object-cover object-top" />
        <div className="flex-1 text-sm">
          <span>{order.product.name}</span>
          <p className="text-secondary opacity-80 font-albert">
            Size: {order.product.size} | Qty: {order.product.quantity}
          </p>
          <p className="mt-1">₹{formatPrice(order.product.price)}</p>
        </div>
        <RightArrowIcon className="w-6 h-6 text-primary-100" />
      </div>
    </Link>

    {order.status === "delivered" && (
      <div className="px-4 py-1.5">
        <span className="text-secondary-100 opacity-60 mb-2 text-sm">Rate this product</span>
        <div className="flex gap-0.5 mt-1.5">{[1, 2, 3, 4, 5].map((star) => (star <= order.rating ? <StarFilledIcon key={star} className="w-6 h-6 text-yellow-400" /> : <StarOutlinedIcon key={star} className="w-6 h-6 text-primary-200" />))}</div>
      </div>
    )}
  </div>
);

export default OrderItem;
