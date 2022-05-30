import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    defaultVal: true,
    priceAsc: false,
    priceDesc: false
}

const sortSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        sortDefault: (state) => {
            state.defaultVal = true
            state.priceDesc = false
            state.priceAsc = false
        },
        sortPriceDesc: (state) => {
            state.defaultVal = false
            state.priceAsc = false
            state.priceDesc = true
        },
        sortPriceAsc: (state) => {
            state.defaultVal = false
            state.priceDesc = false
            state.priceAsc = true
        }
    }
})

export const {
    sortDefault,
    sortPriceDesc,
    sortPriceAsc
} = sortSlice.actions

export default sortSlice.reducer