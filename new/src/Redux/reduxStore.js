import { configureStore } from "@reduxjs/toolkit";
import countReducer from './Counter/countSlice'


export const reduxStore = configureStore({
    reducer: {

        count : countReducer

    }
})