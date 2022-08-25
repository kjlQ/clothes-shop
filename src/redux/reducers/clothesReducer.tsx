import {IProducts} from "../../types";

const defaultState:IProducts = {
    products:[],
    loading:true,
    page:1,
    loadNew:false,

}
export const clothesReducer = (state=defaultState,action:any) => {
    switch (action.type) {
        case "setClothes" :
            if(state.loadNew) {
                return {...state,
                    products:[...state.products,...action.payload],
                    loadNew:false
                }
            }
            else {
                return {...state,products:action.payload}
            }
        case "setLoading" :
            return {...state,loading:action.payload}
        case "setPage" :
            return {...state,
                page:action.payload,
                loadNew:true
            }
        case "changePage" :
            return {...state, page:action.payload,}
        default:
            return state
    }
}