import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favItems: []
}

const favSlice = createSlice({
    name: "favSlice",
    initialState,
    reducers: {
        setFavItems: (state, { payload }) => {
            state.favItems = [...state.favItems, payload]
            console.log("set", payload);
        },
        setDeleteFavItem: (state, { payload }) => {
            state.favItems = state.favItems.filter((e) => e.id !== payload.id)
            console.log("delete", payload);
        },

    }
});

export const { setDeleteFavItem, setFavItems } = favSlice.actions

export default favSlice.reducer