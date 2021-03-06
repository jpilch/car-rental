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
    days: null,
    price: null
}

const offerSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        reset: (state, action) => {
            state.car = null
            state.rental = null
        },
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
        },
        choosePrice: (state, action) => {
            switch (action.payload) {
                case 3:
                    state.price = state.carModel.price_3
                    break
                case 5:
                    state.price = state.carModel.price_5
                    break
                case 9:
                    state.price = state.carModel.price_9
                    break
            }
        }
    }
})

export const {
    chooseCar,
    chooseRental,
    chooseCarModel,
    chooseDays,
    chooseStartDate,
    chooseEndDate,
    choosePrice,
    reset
} = offerSlice.actions

export default offerSlice.reducer

export const fetchCarModelInfo = (id) => {
    return async dispatch => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/car-models/${id}`
            )
            dispatch(chooseCarModel(response.data))
            dispatch(chooseDays(3))
            dispatch(choosePrice(3))
        } catch (e) {
            console.log('error', e)
        }
    }
}

export const fetchAvaiableCarModelInstance = (id, city) => {
    return async dispatch => {
        const today = new Date()
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/car-models/${id}/cars`,
            { today }
        )
        for (let car of response.data) {
            if (car.available) {
                if (city && car.city_en.toLowerCase().includes(city.toLowerCase())) {
                    dispatch(chooseCar(car))
                    dispatch(chooseRental(car.rental))
                    return
                } else if (!city) {
                    dispatch(chooseCar(car))
                    dispatch(chooseRental(car.rental))
                    return
                }
            }
            dispatch(chooseCar('unavailable'))
            dispatch(chooseRental('unavailable'))
        }
    }
}

export const checkout = (data) => {
    return async dispatch => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/create-checkout-session`, 
                {
                    car_id: data.car.id,
                    rental_id: data.rental.id,
                    starts_on: data.startDate,
                    ends_on: data.endDate,
                    price: data.price
                }
            )
            window.location.href = response.data.url
        } catch (e) {
            dispatch(notify('Something went wrong', false))
        }
    }
}

export const createAgreement = (data, authToken) => {
    return async dispatch => {
        console.log(data)
        try {
            const response = await agreementService.createAgreement({
                car_id: data.car.id,
                rental_id: data.rental.id,
                starts_on: data.startDate,
                ends_on: data.endDate,
                price: data.price
            }, authToken)
            console.log(response)
            if (response.status === 201) {
                dispatch(notify('Successfully created an agreement', true))
            } else {
                dispatch(notify('Something went wrong', false))
            }
        } catch (e) {
            dispatch(notify('Something went wrong', false))
        }
    }
}