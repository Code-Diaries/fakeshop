import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basketItem: [],
    basketPiece: "",
    basketOpen: false,
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setBasketItem: (state, { payload }) => {
            state.basketItem = payload;
        },
        setBasketPiece: (state) => {
            state.basketPiece = state.basketItem.length;
        },
        setBasketOpen: (state) => {
            state.basketOpen = !state.basketOpen;
        },
    }
});

export const { setBasketItem, setBasketPiece, setBasketOpen } = basketSlice.actions

export default basketSlice.reducer