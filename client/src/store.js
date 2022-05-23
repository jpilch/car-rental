import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import notificationReducer from "./reducers/notificationSlice";
import offerReducer from './reducers/offerSlice'

export const store = configureStore({
    reducer: {
        authReducer,
        notificationReducer,
        offerReducer
    }
})