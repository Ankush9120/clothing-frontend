import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, data } from "react-router-dom";
import { MdArrowBack, MdCheck, MdStar, MdStarBorder, MdLocalShipping, MdClose, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { updateOrderRating, updateOrderStatus } from "../../store/slices/ordersSlice";
import Header from "../../components/Header";
import OrderStatus from "../Orders/components/OrderStatus";
import Timeline from "./components/Timeline";
import { Accordion } from "../../components/Accordion";
import { formatPrice } from "../../utils/utils";
import { CashIcon } from "../../libs/icons";
import CancellationModal from "./components/CancellationModal";
//import Header from "../../components/Header";

const Rating = ({ value, onChange }) => (
  <div className="space-y-2">
    <h3 className="text-lg font-medium">Rate this product</h3>
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <React.Fragment key={star}>{star <= value ? <MdStar className="w-8 h-8 text-yellow-400 cursor-pointer" onClick={() => onChange(star)} /> : <MdStarBorder className="w-8 h-8 text-yellow-400 cursor-pointer" onClick={() => onChange(star)} />}</React.Fragment>
      ))}
    </div>
  </div>
);

export default function OrderStatusPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orders.find((order) => order.id === orderId));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!order) {
      navigate("/orders");
    }
  }, [order, navigate]);

  if (!order) return null;

  const handleCancelOrder = () => {
    dispatch(updateOrderStatus({ id: order.id, status: "cancelled" }));
    setIsModalOpen(false);
  };

  const handleRatingChange = (newRating) => {
    dispatch(updateOrderRating({ id: order.id, rating: newRating }));
  };

  return (
    <div>
      <Header title="ORDERS" />

      <div className="p-4 space-y-6">
        {/* Product Image */}
        <div className="space-y-2 mb-6">
          <img src={order.product.image} alt={order.product.name} className="max-w-[140px] mx-auto rounded-[4px] object-cover bg-primary-500" />
          <h2 className="text-center font-medium text-secondary-100">{order.product.name}</h2>
          <p className="text-center text-secondary-300 font-albert">
            Size: {order.product.size} | Qty: {order.product.quantity}
          </p>
        </div>

        {/* Status Section */}
        <div className="bg-primary-600 rounded-lg px-3 py-4">
          <OrderStatus status={order.status} date={order.date} />

          <Timeline
            steps={[
              { id: 1, label: "Ordered", completed: true },
              { id: 2, label: "Shipped", completed: order.status !== "cancelled" },
              { id: 3, label: "Out for delivery", completed: order.status === "arriving" || order.status === "delivered" },
              { id: 4, label: "Delivered", completed: order.status === "delivered" },
            ]}
          />

          {order.status === "arriving" && (
            <button onClick={() => setIsModalOpen(true)} className="w-full py-2 mt-4 border border-primary-100 text-primary-100 rounded-lg font-medium">
              Cancel Order
            </button>
          )}
        </div>

        {/* Rating Section */}
        {order.status === "delivered" && (
          <div className="rounded-lg p-4">
            <Rating value={order.rating} onChange={handleRatingChange} />
          </div>
        )}

        <hr className="border-[5px] border-primary-600" />

        {/* Order Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-secondary-100 mb-4">Order Details</h3>
            <div className="space-y-2 text-secondary-100 text-sm">
              <div className="flex justify-between">
                <span className="font-albert">Order Date</span>
                <span>{order.orderDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-albert">Order ID</span>
                <span>{order.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-albert">Order Total</span>
                <span>
                  ₹{order.pricing?.total || order.product.price} <span className="text-secondary-200">(1 item)</span>
                </span>
              </div>
            </div>
          </div>

          <hr className="border-[5px] border-primary-600" />

          <div>
            <h3 className="mb-4">Shipping Address</h3>
            <div className="text-sm font-albert">
              <p>{order.shippingAddress?.name || "John Smith"}</p>
              <p>{order.shippingAddress?.phone || "+91 9587654321"}</p>
              <p>{order.shippingAddress?.address || "E 44/3, Pocket D, Lorem Ipsum, Sit amor, dorem lisum Lorem ipaum"}</p>
              <p>
                {order.shippingAddress?.city || "NEW DELHI"}, {order.shippingAddress?.pincode || "DELHI 110020"}
              </p>
            </div>
          </div>

          <hr className="border-[5px] border-primary-600" />

          <Accordion trigger={<span className="text-secondary-100">Payment Information</span>} open={true} autoScroll={true}>
            <div className="space-y-3 pt-6 text-sm">
              <div className="flex justify-between">
                <span className="font-albert">1 x {order.product.name}</span>
                <span className="text-secondary-100">₹{order.product.originalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-100 font-albert">Discount on MRP</span>
                <span className="text-green-100">-₹{order.product.originalPrice - order.product.price}</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span className="font-albert">Discounted Price</span>
                <span>₹{order.product.price}</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span className="font-albert">Shipping Fee</span>
                <span className="text-secondary-100">₹50</span>
              </div>
              <div className="flex justify-between">
                <span className="font-albert">Cash/Pay on Delivery</span>
                <span className="text-secondary-100">₹100</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span className="font-medium text-secondary-100">Total Amount</span>
                <span className="font-medium text-secondary-100">₹{formatPrice(54512)}</span>
              </div>
              <div className="bg-primary-600 mt-4 p-3 rounded flex items-center gap-2 font-albert">
                <img src={CashIcon} />
                <span className="text-secondary-100 opacity-80">Pay on delivery.</span>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
        
      <CancellationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleCancelOrder} />
    </div>
  );
}
