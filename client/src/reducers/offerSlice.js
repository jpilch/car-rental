import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    carModel: null,
    car: null,
    rental: null,
    startDate: null,
    endDate: null,
    days: null
}

const offerSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        chooseCarModel: (state, action) => {
            state.carModel = action.payload
        },
        chooseCar: (state, action) => {
            state.car = action.payload
        },
        chooseRental: (state, action) => {
            state.rental = action.payload
        },
        chooseDays: (state, action) => {
            state.days = action.payload
        },
        chooseStartDate: (state, action) => {
            state.startDate = action.payload
        },
        chooseEndDate: (state, action) => {
            state.endDate = action.payload
        }
    }
})

export const {
    chooseCar,
    chooseRental,
    chooseCarModel,
    chooseDays,
    chooseStartDate,
    chooseEndDate
} = offerSlice.actions

export default offerSlice.reducer

export const fetchCarModelInfo = (id) => {
    return async dispatch => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/car-models/${id}`
            )
            dispatch(chooseCarModel(response.data))
            dispatch(chooseCar(response.data.cars[0]))
            dispatch(chooseRental(response.data.cars[0].rental))
            dispatch(chooseDays(3))
        } catch (e) {
            console.log('error', e)
        }
    }
}