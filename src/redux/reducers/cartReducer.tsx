import {ICart,clothesCart} from "../../types";

const defaultState:ICart = {
    cart:[],
}
export const cartReducer = (state=defaultState,action:any) => {
    switch (action.type) {
        case "CART__ADD" :
            return {...state, cart : [...state.cart , {...action.payload,count:1} ]}
        default:
            return state
    }
}