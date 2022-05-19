import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    chosenCarId: null
}

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        chooseCar: (state, action) => {
            state.chosenCarId = action.payload
        }
    }
})

export const { chooseCar } = carSlice.actions