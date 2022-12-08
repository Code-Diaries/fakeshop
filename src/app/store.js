import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import productReducer from "../features/productSlice";
import selectReducer from "../features/selectSlice";

export const store = configureStore({
  reducer: {
    auth : authReducer,
    products : productReducer,
    selects : selectReducer,
  },
});