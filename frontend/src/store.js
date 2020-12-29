import { createStore, combineReducers, applyMiddleware } from 'redux'

// to define asynchronous action creators
import thunk from 'redux-thunk'

// to connect to redux-devtools-chrome browser
import { composeWithDevTools } from 'redux-devtools-extension';

import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    // apply thunk middleWare to store & compose with redux-dev-tools to work with browser
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store