import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: "user",
    initialState: {
        Goods: 2,
    },
    reducers: {
        incrementByAmount: (state, action) => {
            state.Goods += 1
        },
    },
})

export const { incrementByAmount } = counterSlice.actions
export default counterSlice.reducer