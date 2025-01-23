import { configureStore } from "@reduxjs/toolkit";
import countReducer from './Counter/countSlice'


export const Store = configureStore({
    reducer: {

        count : countReducer

    }
})