import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basketItem: JSON.parse(localStorage.getItem('basket')) || [],
    basketPiece: (JSON.parse(localStorage.getItem('basket')))?.length || "",
    basketOpen: false,
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setBasketItem: (state, { payload }) => {
            state.basketItem = [...state.basketItem, payload]
            localStorage.setItem('basket', JSON.stringify(state.basketItem))
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