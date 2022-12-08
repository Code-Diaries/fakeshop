import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    choosenList : [],
    selectList: [],
    choosen: "",
    loadingSelect: false,
    errorSelect: false,
};

export const getSelects = createAsyncThunk(
    "getSelects", //! action types
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

export const getChoosens = createAsyncThunk(

    "getChoosens", //! action types

    async (thunkAPI, { rejectWithValue }) => {

        //! asyn callback function
        const url = `https://fakestoreapi.com/products/category/${choosen}`;
        try {
            const { data } = await axios(url);
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue("Something went wrong");
        }
    }

);


const selectSlice = createSlice({
    name: "selects",
    initialState,
    reducers: {
        setChoosen: (state, { payload }) => {
            state.choosen = payload;

        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getSelects.pending || getChoosens.pending, (state) => {
                state.loadingCategory = true;
            })
            .addCase(getSelects.fulfilled || getChoosens.fulfilled, (state, { payload }) => {
                state.selectList = payload;
                state.choosenList= payload;
                state.loadingCategory = false;
            })
            .addCase(getSelects.rejected || getChoosens.rejected, (state, { payload }) => {
                state.loading = false;
                state.errorCategory = payload;
            });
    },
});

export const { setChoosen } = selectSlice.actions;

export default selectSlice.reducer;