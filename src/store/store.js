import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';
import likedProductsReducer from './slices/likedProductsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    likedProducts: likedProductsReducer,
  },
});

