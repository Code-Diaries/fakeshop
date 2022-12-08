//apiden tüm ürünleri çek
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    AllProducts: [],
    loading: false,
    error: false,
  };

  export const getProduct = createAsyncThunk(
    "getProduct", //! action types
  
    async (thunkAPI, { rejectWithValue }) => {
      //! asyn callback function
      const url = `https://fakestoreapi.com/products`;
      try {
        const { data } = await axios(url);
        console.log(data)
        return data;
      } catch (error) {
        console.log(error);
        return rejectWithValue("Something went wrong");
      }
    }
  );

  const productSlice = createSlice({
    name: "products",
    initialState,
    reducer: {
        clearAllProducts : (state) => {
            state.AllProducts = [];
          },
        },

        extraReducers: (builder) => {
            builder
              .addCase(getProduct.pending, (state) => {
                state.loading = true;
              })
              .addCase(getProduct.fulfilled, (state, { payload }) => {
                state.AllProducts = payload;
                state.loading = false;
              })
              .addCase(getProduct.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
              });
          },
    
  })

  export const { clearAllProducts } = productSlice.actions;

export default productSlice.reducer;