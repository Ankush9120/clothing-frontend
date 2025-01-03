import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useLocation, useNavigationType, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout";
import HomePage from "../pages/Home/HomePage";
import ProductPage from "../pages/Product/ProductPage";
import CartPage from "../pages/Cart/CartPage";
import OrdersPage from "../pages/Orders/OrdersPage";
import OrderStatusPage from "../pages/OrderStatus/OrderStatusPage";
import AddressPage from "../pages/Address/AddressPage";
import LikedProductsPage from "../pages/LikedProducts/LikedProductsPage";

const pageVariants = {
  initial: {
    x: 0,
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      type: "tween", ease: "easeInOut", duration: 0.2
    }
  },
  out: (direction) => ({
    x: direction > 0 ? "-50%" : "50%",
    opacity: 0,
    transition: {
      type: "tween", ease: "easeInOut", duration: 0.15
    }
  }),
};

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = React.useState(o);

  return <>{outlet}</>;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const direction = navigationType === "POP" ? -1 : 1;

  useEffect(() => {
    history.scrollRestoration = 'manual';
  }, [])

  return (
    <AnimatePresence initial={false} mode="wait" custom={direction}>
      <motion.div
        key={location.pathname}
        custom={direction}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        onAnimationStart={(animationType) => {
          if(animationType === "in") {
            window.scroll(0, 0);
          }
        }}
        className="grow flex flex-col"
      >
        <AnimatedOutlet />
      </motion.div>
    </AnimatePresence>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AnimatedRoutes />,
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
            path: "/order-status/:orderId",
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
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

