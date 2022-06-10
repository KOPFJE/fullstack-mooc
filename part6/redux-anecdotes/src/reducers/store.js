import {configureStore} from '@reduxjs/toolkit'
import reducer from './anecdoteReducer';

export const createStore = configureStore({
    reducer: {
        anecdoteReducer : reducer
    }
});