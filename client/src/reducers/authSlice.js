import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {notify} from "./notificationSlice";

const initialState = {
    token: null,
    user: null,
    tokenValid: false,
    tokenChecked : false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        saveUserAndToken: (state, action) => {
            window.localStorage.setItem(
                `${process.env.REACT_APP_LOGGED_IN_USER}`,
                JSON.stringify(action.payload)
            )
        },
        setTokenValid: (state, action) => {
            state.tokenValid = action.payload
        },
        setTokenChecked: (state, action) => {
            state.tokenChecked = action.payload
        },
        logout: (state) => {
            window.localStorage.removeItem(
                `${process.env.REACT_APP_LOGGED_IN_USER}`
            )
            state.user = null
            state.token = null
        }
    }
})

export const {setUser, setToken, saveUserAndToken, setTokenValid, setTokenChecked, logout} = authSlice.actions

export const login = (email, password) => {
    return async dispatch => {
        try {
            const data = new FormData()
            data.append('username', email)
            data.append('password', password)
            const tokenResponse = await axios.post(
                `${process.env.REACT_APP_API_URL}/token`,
                data
            )
            const loginResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/users/me`,
                {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.data.access_token}`
                    }
                }
            )
            dispatch(setUser(loginResponse.data))
            dispatch(setToken(tokenResponse.data.access_token))
            dispatch(saveUserAndToken({
                token: tokenResponse.data.access_token,
                user: loginResponse.data
            }))
            dispatch(notify('Login Successful', true))
        } catch (e) {
            dispatch(notify('Login Failed. Check you credentials', false))
        }
    }
}

export const checkValidityOf = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/users/me`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            dispatch(setTokenValid(true))
        } catch (e) {
            dispatch(setTokenValid(false))
        }
    }
}

export default authSlice.reducer