// features/checkout/checkoutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    startCheckout: (state) => {
      state.status = 'loading';
    },
    checkoutSuccess: (state) => {
      state.status = 'succeeded';
    },
    checkoutFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { startCheckout, checkoutSuccess, checkoutFailure } = checkoutSlice.actions;

export default checkoutSlice.reducer;
