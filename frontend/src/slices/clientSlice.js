// features/client/clientSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clientId : null,
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  isAuthentificated : false
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClientInfo: (state, action) => {
      state.clientId = action.payload.clientId;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.isAuthentificated = true;
    },
    clearClientInfo: (state) => {
      state.clientId = null;
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.address = '';
      state.isAuthentificated = false;
    },
  },
});

export const { setClientInfo, clearClientInfo } = clientSlice.actions;

export default clientSlice.reducer;
