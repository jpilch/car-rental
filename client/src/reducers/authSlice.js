import {createSlice} from "@reduxjs/toolkit";
import userService from "../services/userService";
import axios from "axios";
import {notify} from "./notificationSlice";

const initialState = {
    user: null,
    token: null
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
        extractUserAndToken: (state, action) => {
            const savedUserAndToken = JSON.parse(
                window.localStorage.getItem(
                    `${process.env.REACT_APP_LOGGED_IN_USER}`
                )
            )
            if (savedUserAndToken) {
                state.user = {
                    username: savedUserAndToken.username,
                    full_name: savedUserAndToken.full_name
                }
                state.token = savedUserAndToken.token
            }
        },
        resetUserInfo: (state) => {
            window.localStorage.removeItem(
                `${process.env.REACT_APP_LOGGED_IN_USER}`
            )
            state.user = null
            state.token = null
        }
    }
})

export const {
    setUser,
    setToken,
    saveUserAndToken,
    extractUserAndToken,
    resetUserInfo
} = authSlice.actions

export const login = (username, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/login`,
                {username, password}
            )
            if (response.status === 200) {
                dispatch(setUser({
                    username: response.data.username,
                    full_name: response.data.full_name
                }))
                dispatch(setToken(response.data.token))
                dispatch(saveUserAndToken(response.data))
                dispatch(notify('Login Successful', true))
            }
        } catch (e) {
            dispatch(notify('Login Failed. Check you credentials', false))
        }
    }
}

export const register = (fullName, username, password, navigate) => {
    return async dispatch => {
        try {
            const data = { fullName, username, password }
            const response = await userService.register(data)
            if (response.status === 201) {
                dispatch(notify('Registration successful', true))
                navigate('/login')
            }
        } catch (e) {
            dispatch(notify('Username already taken', false))
        }
    }
}

export default authSlice.reducer