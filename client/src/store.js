import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import notificationReducer from "./reducers/notificationSlice";

export const store = configureStore({
    reducer: {
        authReducer,
        notificationReducer
    }
})