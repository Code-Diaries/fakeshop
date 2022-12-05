import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice/categorySlice";
import productReducer from "../features/productSlice/productSlice"


const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer

  },
});
export default store;