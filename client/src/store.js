import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import notificationReducer from "./reducers/notificationSlice";
import carReducer from './reducers/carSlice'

export const store = configureStore({
    reducer: {
        authReducer,
        notificationReducer,
        carReducer
    }
})