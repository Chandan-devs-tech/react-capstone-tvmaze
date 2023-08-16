import { configureStore } from '@reduxjs/toolkit';
import showsReducer from './show/showSlice';

const store = configureStore({
  reducer: {
    show: showsReducer,
  },
});

export default store;
