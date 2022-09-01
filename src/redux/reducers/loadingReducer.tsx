import {ILoading} from "../../types";

const defaultState:ILoading = {
    loading:true,
}
export const loadingReducer = (state=defaultState,action:any) => {
    switch (action.type) {
        case "changeLoad" :
            return {...state,loading:action.payload}
        default:
            return state
    }
}