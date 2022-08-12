import {IFilter} from "../../types";

const defaultState:IFilter = {
    brand:[]
}
export const filterReducer = (state=defaultState,action:any) => {
    switch (action.type) {
        case "changeBrand" :
            return {...state , brand: [...state.brand , action.payload]}
        default:
            return state
    }
}