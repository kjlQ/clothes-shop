import {combineReducers, createStore} from "redux";
import {clothesReducer} from "./reducers/clothesReducer";

export const store = createStore(clothesReducer)
