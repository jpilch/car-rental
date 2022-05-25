import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    display: false,
    choice: null
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state.display = !state.display
        },
        makeAChoice: (state, action) => {
            state.choice = action.payload
        }
    }
})

export const { toggleModal, makeAChoice } = modalSlice.actions

export default modalSlice.reducer