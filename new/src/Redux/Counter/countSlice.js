import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    value: 0,
    items: []
}


const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1
            state.items = [...state.items ,action.payload]

        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer