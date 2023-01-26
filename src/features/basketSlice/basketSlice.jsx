import { createSlice } from '@reduxjs/toolkit'

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

            state.basketItem = [...state.basketItem, payload]
            localStorage.setItem('basket', JSON.stringify(state.basketItem))
            console.log(state.basketItem);

        },
        setBasketCount: (state) => {

            state.basketCount = state.basketItem.length
            localStorage.setItem('basketCount', JSON.stringify(state.basketCount))

        },
        setBasketOpen: (state) => {
            state.basketOpen = !state.basketOpen;
        },
    }
});

export const { setBasketItem, setBasketPiece, setBasketOpen } = basketSlice.actions

export default basketSlice.reducer