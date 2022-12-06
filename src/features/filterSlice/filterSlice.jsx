import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import store from "../../app/store";


const initialState = {
    filteredList: [],
    loadingFilter: false,
    errorFilter: false,
};


console.log("here");
export const getFilter = createAsyncThunk(


    "getFilter", //! action types

    async (thunkAPI, { rejectWithValue }) => {

        console.log(store.getState().category.choosen);
        const selected = store.getState().category.choosen

        //! asyn callback function
        const url = `https://fakestoreapi.com/products/category/${selected}`;
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

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFind: (state, { payload }) => {
            state.find = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFilter.pending, (state) => {
                state.loadingFilter = true;
            })
            .addCase(getFilter.fulfilled, (state, { payload }) => {
                state.filteredList = payload;
                state.loadingFilter = false;
            })
            .addCase(getFilter.rejected, (state, { payload }) => {
                state.loadingFilter = false;
                state.errorFilter = payload;
            });
    },
});

export const { setFind } = filterSlice.actions;

export default filterSlice.reducer;