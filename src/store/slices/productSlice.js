import { createSlice } from '@reduxjs/toolkit';
import { data1, data2, similar_products } from '../../libs/data';

const initialState = {
  products: [...data1, ...data2, ...similar_products]
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export default productSlice.reducer;
