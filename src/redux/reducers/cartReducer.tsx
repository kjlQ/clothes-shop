import {ICart} from "../../types";
const defaultState:ICart = {
    cart:[],
}
function getProper(state:any,action:any) {
    return state.cart.find((item:any)=>item.id === action.payload.id)
}
export const cartReducer = (state=defaultState,action:any) => {
    switch (action.type) {
        case "CART__ADD" :
            const findProperItem = getProper(state,action)
            if(findProperItem) {
                findProperItem.count++
                return {...state}
            } else {
                return {
                    ...state,
                    cart: [...state.cart , {...action.payload , count:1} ]
                }
            }
        default:
            return state
    }
}