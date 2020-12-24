import { createStore, combineReducers, applyMiddleware } from 'redux'

// to define asynchronous action creators
import thunk from 'redux-thunk'

// to connect to redux-devtools-chrome browser
import { composeWithDevTools } from 'redux-devtools-extension';

import { productListReducer, productDetailsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    // apply thunk middle to store & compose with redux-dev-tools to work with browser
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store