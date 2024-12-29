import React, { useState, useEffect } from "react";
import { MdArrowBack, MdSearch, MdLocalShipping, MdCheck, MdClose, MdChevronRight, MdStar, MdStarBorder } from "react-icons/md";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { formatPrice } from "../../utils/utils";
import { ArrivingIcon, CancelledIcon, DeliveredIcon } from "../../libs/icons";

// Simulated API data
const initialOrders = [
  {
    id: 1,
    status: "arriving",
    date: "By Sat, 21 Dec",
    product: {
      name: "Wine Coloured Saree",
      size: "S",
      quantity: 1,
      price: 1699,
      image: "/assets/images/p-1-1.png",
    },
  },
  {
    id: 2,
    status: "delivered",
    date: "On Sat, 21 Dec",
    product: {
      name: "Yellow Jacket",
      size: "S",
      quantity: 1,
      price: 1699,
      image: "/assets/images/p-1-2.png",
    },
    rating: 4,
  },
  {
    id: 3,
    status: "cancelled",
    product: {
      name: "Beige Suit",
      size: "S",
      quantity: 1,
      price: 1699,
      image: "/assets/images/p-1-3.png",
    },
  },
  {
    id: 4,
    status: "delivered",
    date: "On Sat, 21 Dec",
    product: {
      name: "Red Dress",
      size: "S",
      quantity: 1,
      price: 1699,
      image: "/assets/images/p-1-4.png",
    },
    rating: 4,
  },
];

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

const OrderItem = ({ order }) => (
  <div>
    <div className="flex items-center gap-3 px-4">
      <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center">
        <img src={getStatusIcon(order.status)} alt="" />
      </div>
      <div>
        <h2 className={`text-[14px] ${order.status === "delivered" ? "text-green-100" : order.status === "cancelled" ? "text-red-100" : ""}`}>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</h2>
        {order.date && <p className="text-[12px] text-secondary-300 font-albert">{order.date}</p>}
      </div>
    </div>

    <div className="flex items-center gap-[18px] bg-primary-600 rounded-lg py-3 px-4 mt-2.5 cursor-pointer">
      <img src={order.product.image} alt={order.product.name} className="w-16 h-16 rounded-lg object-cover object-top" />
      <div className="flex-1 text-[14px]">
        <span>{order.product.name}</span>
        <p className="text-secondary opacity-80 font-albert">
          Size: {order.product.size} | Qty: {order.product.quantity}
        </p>
        <p className="mt-1">₹{formatPrice(order.product.price)}</p>
      </div>
      <MdChevronRight className="w-6 h-6 text-primary-100" />
    </div>

    {order.status === "delivered" && (
      <div className="px-4 py-1.5">
        <span className="text-secondary-100 opacity-60 mb-2 text-[14px]">Rate this product</span>
        <div className="flex gap-0.5 mt-1.5">{[1, 2, 3, 4, 5].map((star) => (star <= order.rating ? <MdStar key={star} className="w-6 h-6 text-yellow-400" /> : <MdStarBorder key={star} className="w-6 h-6 text-primary-200" />))}</div>
      </div>
    )}
  </div>
);

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulating API call
    setOrders(initialOrders);
  }, []);

  const filteredOrders = orders.filter((order) => order.product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <Header title="ORDERS" />

      <SearchBar />

      {/* Scrollable Orders List */}
      <div className="space-y-6 py-6">
        {filteredOrders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
