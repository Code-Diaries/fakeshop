import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorite: true,
    favoriteItem: {},
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
        },
        setFavoriteItem: (state, { payload }) => {
            state.favoriteItem = payload
        }


    }
});

export const { setFavorite, setFavoriteList, setFavoriteItem } = favoriteSlice.actions

export default favoriteSlice.reducer