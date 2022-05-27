import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    page: 0,
    pageCount: 0
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setPageCount: (state, action) => {
            state.pageCount = action.payload
        }
    }
})

export const {
    setPage,
    setPageCount
} = paginationSlice.actions

export default paginationSlice.reducer