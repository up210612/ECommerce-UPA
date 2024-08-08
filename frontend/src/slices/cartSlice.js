import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.idProduct === action.payload.idProduct && item.size === action.payload.size);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.idProduct !== action.payload.idProduct || item.size !== action.payload.size);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateItemQuantity: (state, action) => {
      const { idProduct, size, quantity } = action.payload;
      const existingItem = state.items.find(item => item.idProduct === idProduct && item.size === size);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, clearCart, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
