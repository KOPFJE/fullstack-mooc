import { createSlice } from "@reduxjs/toolkit";

const initialState = {    
    value : 'Hoplaa'
}

const notificationSlice = createSlice({
    name : 'notification',
    initialState,
    reducers: {
        add(state, action) {
            state.value = action.payload;
        }
    }
})

const nreducer = notificationSlice.reducer;

export const { add } = notificationSlice.actions
export default nreducer