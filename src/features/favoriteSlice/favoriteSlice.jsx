import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorite: false,

}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        setFavorite: (state) => {
            state.favorite = !state.favorite
        },


    }
});

export const { setFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer