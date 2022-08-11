import {IProducts} from "../../types";

const defaultState:IProducts = {
    products:[],
    loading:true,
}
export const clothesReducer = (state=defaultState,action:any) => {
    switch (action.type) {
        case "setClothes" :
            return {...state,products:action.payload}
        case "setLoading" :
            return {...state,loading:action.payload}
        default:
            return state
    }
}