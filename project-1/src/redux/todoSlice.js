import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name : 'todos',
    initialState : [],
    reducers : {
        addTodo : (state, action) => {
            state.push({text : action.payload, completed : false})
        },
        deleteTodo : (state, action) => {
            state.splice(action.payload,1);
        },
        completeTodo : (state, action) => {
            const todo = state[action.payload];
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        editTodo : (state , action) => {
            const { index , newText } = action.payload;
            if (state[index]){
                state[index].text = newText;
            }
        },
    }
})

export const {addTodo , deleteTodo, completeTodo , editTodo} = todoSlice.actions
export default todoSlice.reducer