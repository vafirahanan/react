import { configureStore } from '@reduxjs/toolkit';
// import { counterReducer } from './slices/counterslice';
import { todoReducer } from './slices/todoslice';

export const Store = configureStore({
    reducer:{
        // counter:counterReducer,
        todo:todoReducer
    }
})


