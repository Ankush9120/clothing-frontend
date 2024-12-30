import { createSlice } from '@reduxjs/toolkit';
import { productData, similar_products } from '../../libs/data';

const initialState = {
  products: productData,
  similarProducts: similar_products
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export default productSlice.reducer;
