import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {notify} from "./notificationSlice";

const initialState = {
    token: null,
    user: null
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
        saveUser: (state, action) => {
            window.localStorage.setItem(
                `${process.env.REACT_APP_LOGGED_IN_USER}`,
                JSON.stringify(action.payload)
            )
        }
    }
})

export const {setUser, setToken, saveUser} = authSlice.actions

// export const getToken = ({email, password}) => {
//     return async dispatch => {
//
//         } catch (e) {
//             console.log('error', e)
//             dispatch(notify('Login Failed. Check you credentials', false))
//         }
//     }
// }

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
            await dispatch(setUser(loginResponse.data))
            await dispatch(setToken(tokenResponse.data.access_token))
            await dispatch(saveUser({
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

export default authSlice.reducer