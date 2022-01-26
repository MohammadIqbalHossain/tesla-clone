import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/car/carsSice"

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
