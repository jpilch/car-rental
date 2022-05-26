import {createSlice} from "@reduxjs/toolkit";
import agreementService from "../services/agreementService";
import {notify} from "./notificationSlice";

const initialState = {
    chosenAgreementId: null,
    userAgreements: []
}

const agreementSlice = createSlice({
    name: 'agreement',
    initialState,
    reducers: {
        chooseAgreement: (state, action) => {
            state.chosenAgreementId = action.payload
        },
        setUserAgreements: (state, action) => {
            state.userAgreements = action.payload
        },
        removeUserAgreement: (state, action) => {
            state.userAgreements = state.userAgreements
                .filter(agreement => agreement.id !== action.payload)
        }
    }
})

export const {
    chooseAgreement,
    setUserAgreements,
    removeUserAgreement
} = agreementSlice.actions

export default agreementSlice.reducer

export const deleteAgreement = (id, authToken) => {
    return async dispatch => {
        const response = await agreementService
            .deleteAgreementById(id, authToken)
        if (response.status === 204) {
            dispatch(notify('Successfully deleted agreement', true))
            dispatch(removeUserAgreement(id))
            dispatch(chooseAgreement(null))
        } else {
            dispatch(notify('Something went wrong'))
        }
    }
}