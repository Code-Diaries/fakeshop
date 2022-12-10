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
        },
        removeFromFavouriteList: (state, { payload }) => { 
            state.favoriteList =  state.favoriteList.filter(item => item.id != payload.id)
        } 
    }
});

export const { addToFavoriteList,
    removeFromFavouriteList } = favoriteSlice.actions

export default favoriteSlice.reducer