import { createSlice } from "@reduxjs/toolkit";

const initialOrders = [
  {
    id: "ORD-1001",
    status: "arriving",
    date: "By Sat, 21 Dec",
    orderDate: "Fri, 20 Dec",
    product: {
      name: "Wine Coloured Saree",
      size: "S",
      quantity: 1,
      price: 1699,
      originalPrice: 2020,
      image: "/assets/images/p-1-1.png",
    },
  },
  {
    id: "ORD-1002",
    status: "delivered",
    date: "On Sat, 21 Dec",
    orderDate: "Fri, 20 Dec",
    product: {
      name: "Yellow Jacket",
      size: "S",
      quantity: 1,
      price: 1699,
      originalPrice: 2020,
      image: "/assets/images/p-1-2.png",
    },
    rating: 4,
  },
  {
    id: "ORD-1003",
    status: "cancelled",
    orderDate: "Wed, 18 Dec",
    product: {
      name: "Beige Suit",
      size: "S",
      quantity: 1,
      price: 1699,
      originalPrice: 2020,
      image: "/assets/images/p-1-3.png",
    },
  },
  {
    id: "ORD-1004",
    status: "delivered",
    date: "On Sat, 21 Dec",
    orderDate: "Fri, 20 Dec",
    product: {
      name: "Red Dress",
      size: "S",
      quantity: 1,
      price: 1699,
      originalPrice: 2020,
      image: "/assets/images/p-1-4.png",
    },
    rating: 4,
  },
];

const ordersSlice = createSlice({
  name: "orders",
  initialState: initialOrders,
  reducers: {
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload;
      const order = state.find((order) => order.id === id);
      if (order) {
        order.status = status;
      }
    },
    updateOrderRating: (state, action) => {
      const { id, rating } = action.payload;
      const order = state.find((order) => order.id === id);
      if (order) {
        order.rating = rating;
      }
    },
  },
});

export const { updateOrderStatus, updateOrderRating } = ordersSlice.actions;
export default ordersSlice.reducer;
