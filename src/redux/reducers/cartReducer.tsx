import {ICart} from "../../types";
const defaultState:ICart = {
    cart:[],
    totalPrice:0,
    changeQuantityItem:undefined,
}
function getProper(state:any,id:any,size:any) {
    return state.cart.find((item:any)=>item.id === id && item.selectedSize === size)
}
export const cartReducer = (state=defaultState,action:any) => {
    switch (action.type) {
        case "CART__ADD" :
            const findProperItem = getProper(state,action.payload.id,action.payload.selectedSize)
            if(findProperItem) {
                findProperItem.count++
                return {...state}
            } else {
                return {
                    ...state,
                    cart: [...state.cart , {...action.payload , count:1} ]
                }
            }
        case "TOTAL__PRICE" :
            return {...state,totalPrice:action.payload}
        case "CHANGE__QUANTITY__ID" :
            return {...state,changeQuantityItem:action.payload}
        case "GET__LOCAL__STORAGE" :
            return {...state,cart:action.payload}
        case "CHANGE__QUANTITY__ITEM" :
            const findProperItem1 = getProper(state,state.changeQuantityItem.id,state.changeQuantityItem.selectedSize)
            if(findProperItem1) {
                findProperItem1.count = action.payload
                return {...state,cart:state.cart}
            } else {
                return {...state,cart:state.cart}
            }
        case "REMOVE__ITEM" :
            return {...state,cart:state.cart.filter(item=>item.id !== action.payload.id || item.selectedSize !== action.payload.selectedSize)}
        default:
            return state
    }
}