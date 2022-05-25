import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import notificationReducer from "./reducers/notificationSlice";
import offerReducer from './reducers/offerSlice'
import modalReducer from "./reducers/modalSlice";

export const store = configureStore({
    reducer: {
        authReducer,
        notificationReducer,
        offerReducer,
        modalReducer
    }
})