import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkmode: false,
}

const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkmode = !state.darkmode
    }
  }
});

export const { setDarkMode } = darkmodeSlice.actions

export default darkmodeSlice.reducer