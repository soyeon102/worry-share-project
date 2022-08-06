import { configureStore } from '@reduxjs/toolkit';
import worrySlice from '../modules/worrySlice';

export const store = configureStore({
  reducer: {
    worrys: worrySlice,
  },
});
