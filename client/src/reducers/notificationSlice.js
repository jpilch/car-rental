import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    message: '',
    success: false,
    show: false
}


const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotificationMessage: (state, action) => {
            state.message = action.payload
        },
        setNotificationSuccess: (state, action) => {
            state.success = action.payload
        },
        showNotification: (state, action) => {
            state.show = action.payload
        }
    }
})

export const {setNotificationMessage, setNotificationSuccess, showNotification} = notificationSlice.actions

export const notify = (message, success) => {
    return dispatch => {
        dispatch(setNotificationMessage(message))
        dispatch(setNotificationSuccess(success))
        dispatch(showNotification(true))
        setTimeout(() => {
            dispatch(showNotification(false))
        }, 2000)
    }
}

export default notificationSlice.reducer