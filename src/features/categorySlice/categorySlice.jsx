import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    categoryList: [],
    choosen: "",
    loadingCategory: false,
    errorCategory: false,
};
console.log("here")
export const getCategory = createAsyncThunk(
    "getCategory", //! action types
    async (thunkAPI, { rejectWithValue }) => {
        //! asyn callback function
        const url = `https://fakestoreapi.com/products/categories`;

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

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setChoosen: (state, { payload }) => {
            state.choosen = payload;

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategory.fulfilled, (state, { payload }) => {
                state.categoryList = payload;
                state.loadingCategory = false;
            })
            .addCase(getCategory.rejected, (state, { payload }) => {
                state.loading = false;
                state.errorCategory = payload;
            });
    },
});

export const { setChoosen } = categorySlice.actions;

export default categorySlice.reducer;