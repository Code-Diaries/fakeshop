import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice/categorySlice";
import productReducer from "../features/productSlice/productSlice"
import filterReducer from "../features/filterSlice/filterSlice"


const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    filter: filterReducer

  },
});
export default store;