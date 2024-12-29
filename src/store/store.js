import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import likedProductsReducer from './slices/likedProductsSlice';
import productReducer from './slices/productSlice';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import ordersReducer from "./slices/ordersSlice";

const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('reduxState', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (typeof window !== 'undefined') {
    const storedState = localStorage.getItem('reduxState');
    if (storedState !== null) {
      return JSON.parse(storedState);
    }
  }
  return undefined;
};

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    likedProducts: likedProductsReducer,
    products: productReducer,
    user: userReducer,
    cart: cartReducer,
    orders: ordersReducer
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(localStorageMiddleware),
});

