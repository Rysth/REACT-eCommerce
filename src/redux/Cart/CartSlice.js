import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleProduct = createAsyncThunk(
  'cart/fetchSingleProduct',
  async (ID, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${ID}`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  cartCounter: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCounter(state) {
      state.cartCounter += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cartItems.push(action.payload);
    });
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
