import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {setUser} = authSlice.actions

export const login = ({email, password}) => {
    return async dispatch => {
        const data = new FormData()
        data.append('username', email)
        data.append('password', password)
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/token`,
                data
            )
            dispatch(setUser(response.data))
        } catch (e) {
            console.log('error', e)
        }
    }
}

export default authSlice.reducer