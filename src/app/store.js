import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice/categorySlice";
import productReducer from "../features/productSlice/productSlice"
import filterReducer from "../features/filterSlice/filterSlice"
import searchReducer from "../features/searchSlice/searchSlice";

import authReducer from "../features/authSlice";
import favoriteSliceReducer from "../features/favoriteSlice/favoriteSlice";


const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    filter: filterReducer,
    search: searchReducer,
    
    auth: authReducer,
    favorite: favoriteSliceReducer

  },
});
export default store;
