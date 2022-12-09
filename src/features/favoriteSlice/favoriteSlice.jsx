import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorite: false,
    favoriteList: []

}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        setFavorite: (state) => {
            state.favorite = !state.favorite
        },
        setFavoriteList: (state, { payload }) => {
            state.favoriteList = payload
        }


    }
});

export const { setFavorite, setFavoriteList } = favoriteSlice.actions

export default favoriteSlice.reducer