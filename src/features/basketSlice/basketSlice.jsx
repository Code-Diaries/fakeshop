import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    basketItem: JSON.parse(localStorage.getItem('basket')) || [],
    basketPiece: "",
    basketOpen: false,
    basketCount: (JSON.parse(localStorage.getItem('basket')))?.length || ""
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setBasketItem: (state, { payload }) => {
            state.basketItem = state.basketItem.filter(item => item.id !== payload.id)
            localStorage.setItem('basket', JSON.stringify(state.basketItem))

        },
        setBasketCount: (state, { payload }) => {
            state.basketPiece = [...state.basketPiece, payload];
            state.basketCount = state.basketPiece.length
            localStorage.setItem('basketCount', JSON.stringify(state.basketCount))

        },
        setBasketOpen: (state) => {
            state.basketOpen = !state.basketOpen;
        },
    }
});

export const { setBasketItem, setBasketPiece, setBasketOpen } = basketSlice.actions

export default basketSlice.reducer