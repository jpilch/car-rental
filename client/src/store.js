import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import notificationReducer from "./reducers/notificationSlice";
import offerReducer from './reducers/offerSlice'
import modalReducer from "./reducers/modalSlice";
import agreementReducer from "./reducers/agreementSlice";
import paginationReducer from "./reducers/paginationSlice";

export const store = configureStore({
    reducer: {
        authReducer,
        notificationReducer,
        offerReducer,
        modalReducer,
        agreementReducer,
        paginationReducer
    }
})