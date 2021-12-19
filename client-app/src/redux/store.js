import {combineReducers, createStore, applyMiddleware} from "redux";
import authReducer from "./authReducer";
import ThunkMiddleware from "redux-thunk"


let reducers = combineReducers({ // Создаём state
    auth: authReducer
})



let store = createStore(reducers, applyMiddleware(ThunkMiddleware)); // Создаём store

export default store;