import {combineReducers, createStore} from "redux";
import {clothesReducer} from "./reducers/clothesReducer";
import {filterReducer} from "./reducers/filterReducer";
import {cartReducer} from "./reducers/cartReducer";
import {wishlistReducer} from "./reducers/wishlistReducer";

export const store = createStore(combineReducers({clothesReducer,filterReducer,cartReducer,wishlistReducer}))
