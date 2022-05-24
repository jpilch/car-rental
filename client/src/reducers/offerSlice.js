import {createSlice} from "@reduxjs/toolkit";
import agreementService from "../services/agreementService";
import axios from "axios";
import {notify} from "./notificationSlice";

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

export const createAgreement = (data, authToken, navigate) => {
    return async dispatch => {
        const response = await agreementService.createAgreement({
            car_id: data.car.id,
            rental_id: data.rental.id,
            starts_on: data.startDate,
            ends_on: data.endDate
        }, authToken)
        if (response.status === 201) {
            dispatch(notify('Successfully created an agreement', true))
            navigate('/my-account')
        } else {
            dispatch(notify('Something went wrong', false))
            console.log(response.status, response.data)
        }
    }
}