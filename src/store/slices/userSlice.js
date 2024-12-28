import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addresses: [],
  selectedAddressId: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addAddress: (state, action) => {
      const isFirstAddress = state.addresses.length === 0;
      state.addresses.push({
        ...action.payload,
        id: Date.now(),
        isDefault: isFirstAddress
      });
      if (isFirstAddress) {
        state.selectedAddressId = state.addresses[0].id;
      }
    },
    updateAddress: (state, action) => {
      const index = state.addresses.findIndex(addr => addr.id === action.payload.id);
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },
    deleteAddress: (state, action) => {
      state.addresses = state.addresses.filter(addr => addr.id !== action.payload);
      if (state.selectedAddressId === action.payload) {
        state.selectedAddressId = state.addresses[0]?.id || null;
      }
    },
    setSelectedAddress: (state, action) => {
      state.selectedAddressId = action.payload;
    }
  }
});

export const { addAddress, updateAddress, deleteAddress, setSelectedAddress } = userSlice.actions;
export default userSlice.reducer;
