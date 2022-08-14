import {combineReducers, createStore} from "redux";
import {clothesReducer} from "./reducers/clothesReducer";
import {filterReducer} from "./reducers/filterReducer";
import {cartReducer} from "./reducers/cartReducer";

export const store = createStore(combineReducers({clothesReducer,filterReducer,cartReducer}))
