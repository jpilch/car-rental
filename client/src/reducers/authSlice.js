import {createSlice} from "@reduxjs/toolkit";

const initialState = {}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        log: state => {
            console.log(state)
        }
    }
})

export const {log} = authSlice.actions

export default authSlice.reducer