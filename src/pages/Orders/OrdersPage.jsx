import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import OrderItem from "./components/OrderItem";


export default function OrdersPage() {
  const orders = useSelector(state => state.orders);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredOrders = orders.filter((order) => order.product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleOrderClick = (orderId) => {
    navigate(`/order-status/${orderId}`);
  };

  return (
    <div>
      <Header title="ORDERS" />

      <SearchBar onSearch={setSearchTerm} />

      {/* Scrollable Orders List */}
      <div className="space-y-6 py-6">
        {filteredOrders.map((order) => (
          <OrderItem key={order.id} order={order} onOrderClick={handleOrderClick} />
        ))}
      </div>
    </div>
  );
}

