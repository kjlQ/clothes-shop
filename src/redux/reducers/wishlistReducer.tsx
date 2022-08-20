import {IWishlist} from "../../types";
const defaultState:IWishlist = {
    wishlist:[]
}
export const wishlistReducer = (state=defaultState, action:any) => {
    switch (action.type) {
        case "WISHLIST__ADD" :
            return {...state,wishlist:state.wishlist.find((obj:any) => obj.id === action.payload.id)  ? state.wishlist.filter((value:any)=>value.id!==action.payload.id) : [...state.wishlist , action.payload] }
        case "WISHLIST__REMOVE" :
            return {...state,wishlist:state.wishlist.filter((item:any)=>item.id!==action.payload)}
        case "GET__LOCALSTORAGE__WISHLIST" :
            return {...state,wishlist:action.payload}
        default:
            return state
    }
}