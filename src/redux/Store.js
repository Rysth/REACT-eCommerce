import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './Header/HeaderSlice';

const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
  },
});

export default store;
