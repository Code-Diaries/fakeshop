import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

import categoryReducer from "../features/categorySlice/categorySlice";
import productReducer from "../features/productSlice/productSlice"
import filterReducer from "../features/filterSlice/filterSlice"
import searchReducer from "../features/searchSlice/searchSlice";
import favSliceReducer from "../features/favoriteSlice/favSlice";


const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    filter: filterReducer,
    search: searchReducer,
    fav: favSliceReducer,
    auth: authReducer,


  },
});
export default store;
