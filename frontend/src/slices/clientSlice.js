// features/client/clientSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  address: '',
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClientInfo: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
    },
    clearClientInfo: (state) => {
      state.name = '';
      state.email = '';
      state.address = '';
    },
  },
});

export const { setClientInfo, clearClientInfo } = clientSlice.actions;

export default clientSlice.reducer;
