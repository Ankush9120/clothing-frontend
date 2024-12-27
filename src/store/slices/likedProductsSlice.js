import { createSlice } from '@reduxjs/toolkit';

const likedProductsSlice = createSlice({
  name: 'likedProducts',
  initialState: [],
  reducers: {
    toggleLikeProduct: (state, action) => {
      const product = action.payload;
      const index = state.findIndex(item => item?.id === product?.id);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(product);
      }
    },
  },
});

export const { toggleLikeProduct } = likedProductsSlice.actions;
export default likedProductsSlice.reducer;

