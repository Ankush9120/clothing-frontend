import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home/HomePage";
import ProductPage from "../pages/Product/ProductPage";
import CartPage from "../pages/Cart/CartPage";
import OrdersPage from "../pages/Orders/OrdersPage";
import OrderStatusPage from "../pages/OrderStatus/OrderStatusPage";
import AddressPage from "../pages/Address/AddressPage";
import LikedProductsPage from "../pages/LikedProducts/LikedProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
      {
        path: "/order-status",
        element: <OrderStatusPage />,
      },
      {
        path: "/address",
        element: <AddressPage />,
      },
      {
        path: "/liked-products",
        element: <LikedProductsPage />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
