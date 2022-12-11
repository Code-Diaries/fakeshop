import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import authReducer from "../features/authSlice";

=======
import categoryReducer from "../features/categorySlice/categorySlice";
import productReducer from "../features/productSlice/productSlice"
import filterReducer from "../features/filterSlice/filterSlice"
import searchReducer from "../features/searchSlice/searchSlice";
import favoriteSliceReducer from "../features/favoriteSlice/favoriteSlice";
>>>>>>> 47ae9b059f70c6e5e8489e5608be2f48b60a20e7


const store = configureStore({
  reducer: {
<<<<<<< HEAD
    auth : authReducer,
   
  },
});
=======
    product: productReducer,
    category: categoryReducer,
    filter: filterReducer,
    search: searchReducer,
    favorite: favoriteSliceReducer

  },
});
export default store;
>>>>>>> 47ae9b059f70c6e5e8489e5608be2f48b60a20e7
