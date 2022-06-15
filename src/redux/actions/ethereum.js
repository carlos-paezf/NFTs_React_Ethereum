import Web3 from 'web3'
import { LOAD_WEB3_FAIL, LOAD_WEB3_SUCCESS } from "./types";


export const setLoadWeb3 = () => async dispatch => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
        dispatch({
            type: LOAD_WEB3_SUCCESS
        })
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
        dispatch({
            type: LOAD_WEB3_SUCCESS
        })
    } else {
        dispatch({
            type: LOAD_WEB3_FAIL
        })
    }
}