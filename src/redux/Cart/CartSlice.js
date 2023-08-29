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

const storedCartCounter = localStorage.getItem('cartCounter');
const storedCartItems = localStorage.getItem('cartItems');

const initialState = {
  cartCounter:
    storedCartCounter !== null ? Number.parseInt(storedCartCounter, 10) : 0,
  cartItems: storedCartItems !== null ? JSON.parse(storedCartItems) : [],
};

const handleLocalStorageCart = (state) => {
  localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  localStorage.setItem('cartCounter', JSON.stringify(state.cartCounter));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCounter(state) {
      state.cartCounter += 1;
      handleLocalStorageCart(state);
    },
    incrementItemCounter(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.cartCounter += 1;
      }
      handleLocalStorageCart(state);
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
        NotificationManager.info('Product Removed', 'Information', 1000);
      }
      handleLocalStorageCart(state);
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
      handleLocalStorageCart(state);
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
      state.cartCounter += 1;
      NotificationManager.success('Product Added', 'Successfull', 1000);
      handleLocalStorageCart(state);
    });
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
