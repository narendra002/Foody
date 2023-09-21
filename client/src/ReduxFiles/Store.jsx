import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Features/AuthenticateSlice'; // Import the default export

export const store = configureStore({
  reducer: {
    auth: authReducer, // Use the default export here
  },
});
