import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    productList: [],
    loading: false,
    error: false,
};

//? State'lerin API gibi async kaynaklardan gelen verilere gore guncellenmesi gerekebilir.
//? Ancak boyle bir durumda async islem tamamlandiktan sonra state guncellenmelidir.
//? Gonderilen api istegi ile dogrudan state guncellememelidir.
//? Islemin tamamlanmasi ile gelen veriye gore state'in guncellenemsini saglamak
//? adina bir arabirim kullanilmaktadir.
//? Bu arabirim middleware denilir.Redux-Toolkit, default olarak Thunk kullanmaktadir.
//! Thunk'ın amaci reducers'a islenmis sonuclari gondermeden once gecikmeli asenkron ismlerinin yurutulmesini saglamaktir.

export const getProduct = createAsyncThunk(
    "getProduct", //! action types

    async (thunkAPI, { rejectWithValue }) => {
        //! asyn callback function
        const url = `https://fakestoreapi.com/products`;
        try {
            const { data } = await axios(url);
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue("Something went wrong");
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addBasket: (state) => {
            // state.newsList = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProduct.fulfilled, (state, { payload }) => {
                state.productList = payload;
                state.loading = false;
            })
            .addCase(getProduct.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const { clearProductList } = productSlice.actions;

export default productSlice.reducer;