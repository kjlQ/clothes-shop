import {clothesReducer} from "../redux/reducers/clothesReducer";

export interface IProducts {
    products:clothes[]
    loading:boolean
}
type clothes = {
    amount: string
    brand: string
    category: string
    id: string
    imageURL: string
    name: string
}
export interface IFilter {
    brand:any,
}

export interface IReducers {
    clothesReducer:IProducts
    filterReducer:IFilter
}