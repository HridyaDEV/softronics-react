
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
    
  },
});
