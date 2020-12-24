import * as constant from '../constants/productConstants';
import axios from 'axios';

// thunk middleware empowers action creators:
// allows to return function instead of an action
// recieves store methods 'dispatch' & 'getStore' as parameters
// can call api requests & fire dispatch actions based on response
export const listProducts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: constant.PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products')

        dispatch({
            type: constant.PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: constant.PRODUCT_LIST_FAIL,
            // getting error from backend endpoints if custom error
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message 
        })
    }
}

export const listProductDeatails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: constant.PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: constant.PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: constant.PRODUCT_DETAILS_FAIL,
            // getting error from backend endpoints if custom error
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message 
        })
    }
}