import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: 0,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    incrementCounter(state) {
      state.cartItems += 1;
    },
  },
});

export const headerActions = headerSlice.actions;

export default headerSlice;
