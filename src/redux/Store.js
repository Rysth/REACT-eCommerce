import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './Header/HeaderSlice';
import productsSlice from './Products/ProductsSlice';

const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
