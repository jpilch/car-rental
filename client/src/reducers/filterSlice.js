import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    default: true,
    priceAsc: false,
    priceDesc: false
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        sortDefault: (state) => {
            state.default = true
            state.priceDesc = false
            state.priceAsc = false
        },
        sortPriceDesc: (state) => {
            state.default = false
            state.priceDesc = true
        },
        sortPriceAsc: (state) => {
            state.default = false
            state.priceAsc = true
        }
    }
})

export const {
    sortDefault,
    sortPriceDesc,
    sortPriceAsc
} = filterSlice.actions

export default filterSlice.reducer