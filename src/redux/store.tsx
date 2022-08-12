import {combineReducers, createStore} from "redux";
import {clothesReducer} from "./reducers/clothesReducer";
import {filterReducer} from "./reducers/filterReducer";

export const store = createStore(combineReducers({clothesReducer,filterReducer}))
