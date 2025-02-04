import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchMoreProducts = createAsyncThunk(
  'products/fetchMoreProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://fakestoreapi.com/products?limit=8',
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchProductByID = createAsyncThunk(
  'products/fetchProductByID',
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
  productsArray: [],
  isLoading: true,
  error: '',
  productSelected: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.productsArray = action.payload;
    });
    builder.addCase(fetchMoreProducts.fulfilled, (state, action) => {
      state.productsArray.push(...action.payload);
    });
    builder.addCase(fetchProductByID.fulfilled, (state, action) => {
      state.productSelected = action.payload;
    });
  },
});

export const productsAction = productsSlice.actions;

export default productsSlice;
