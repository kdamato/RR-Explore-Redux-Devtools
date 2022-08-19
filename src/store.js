import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import todoReducer from './features/todoSlice'

//create and export store with reducers
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
})