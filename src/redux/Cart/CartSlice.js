import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';

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
    incrementItemCounter(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.cartCounter += 1;
      }
    },
    decrementItemCounter(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.cartCounter -= 1; // Decrement the cart counter
      }

      if (item.quantity === 0) {
        const updatedArray = state.cartItems.filter(
          (item) => item.id !== action.payload,
        );
        state.cartItems = updatedArray;
      }
    },
    removeItem(state, action) {
      const removedItem = state.cartItems.find(
        (item) => item.id === action.payload,
      );
      const updatedArray = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
      state.cartCounter -= removedItem.quantity;
      state.cartItems = updatedArray;
      NotificationManager.info('Product Removed', 'Information', 1000);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (!item) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        item.quantity += 1;
      }
      NotificationManager.success('Product Added', 'Successfull', 1000);
    });
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
