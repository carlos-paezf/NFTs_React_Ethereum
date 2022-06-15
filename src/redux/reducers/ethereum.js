import { LOAD_WEB3_FAIL, LOAD_WEB3_SUCCESS } from "../actions/types";


const initialState = {
    web3: null
}

export default function ethereum(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case LOAD_WEB3_SUCCESS:
            return {
                ...state,
                web3: payload
            }
        case LOAD_WEB3_FAIL:
            return {
                ...state,
                web3: null
            }
        default:
            return state
    }
}