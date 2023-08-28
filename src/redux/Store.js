import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Cart/CartSlice';
import productsSlice from './Products/ProductsSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
