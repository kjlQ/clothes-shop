import {IFilter} from "../../types";

const defaultState:IFilter = {
    brand:[],
    category:[],
    sort_by:'',
}
export const filterReducer = (state=defaultState,action:any) => {
    switch (action.type) {
        case "changeBrand" :
            return {...state , brand: !state.brand.includes(action.payload) ?  [...state.brand , action.payload] : state.brand.filter((value:string)=>value!==action.payload)}
        case"changeSortBy":
            return{...state , sort_by: action.payload}
        default:
            return state
    }
}