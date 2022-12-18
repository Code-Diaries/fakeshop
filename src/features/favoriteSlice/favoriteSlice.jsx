import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoriteList: []
}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavoriteList: (state, { payload }) => {
            state.favoriteList = [...state.favoriteList, payload]
            localStorage.setItem('items', JSON.stringify(state.favoriteList))

        },
        removeFromFavouriteList: (state, { payload }) => {
            state.favoriteList = state.favoriteList.filter(item => item.id !== payload.id)
            localStorage.setItem('items', JSON.stringify(state.favoriteList))
        }
    }
});

export const { addToFavoriteList,
    removeFromFavouriteList } = favoriteSlice.actions

export default favoriteSlice.reducer