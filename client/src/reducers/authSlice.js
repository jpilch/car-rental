import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {notify} from "./notificationSlice";

const initialState = {
    token: null,
    user: null,
    tokenValid: false
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
        }
    }
})

export const {setUser, setToken, saveUserAndToken, setTokenValid} = authSlice.actions

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
            console.log('error', e)
            dispatch(notify('Login Failed. Check you credentials', false))
        }
    }
}

export const checkValidityOf = (token) => {
    return async dispatch => {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/users/me`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        console.log(response)
        if (response.status !== 200) {
            dispatch(setTokenValid(false))
            return
        }
        dispatch(setTokenValid(true))
    }
}

export default authSlice.reducer