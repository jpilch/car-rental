import {createSlice} from "@reduxjs/toolkit";
import agreementService from "../services/agreementService";
import {notify} from "./notificationSlice";

const initialState = {
    chosenAgreementId: null
}

const agreementSlice = createSlice({
    name: 'agreement',
    initialState,
    reducers: {
        chooseAgreement: (state, action) => {
            state.chosenAgreementId = action.payload
        }
    }
})

export const { chooseAgreement } = agreementSlice.actions

export default agreementSlice.reducer

export const deleteAgreement = (id, authToken) => {
    return async dispatch => {
        const response = await agreementService
            .deleteAgreementById(id, authToken)
        if (response.status === 204) {
            dispatch(notify('Successfully deleted agreement', true))
        } else {
            dispatch(notify('Something went wrong'))
        }
    }
}