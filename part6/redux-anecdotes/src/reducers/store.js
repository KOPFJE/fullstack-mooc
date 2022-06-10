import {configureStore} from '@reduxjs/toolkit'
import areducer from './anecdoteReducer';
import nreducer from './notificationReducer';

export const createStore = configureStore({
    reducer: {
        anecdoteReducer : areducer,
        notificationReducer : nreducer
    }
});