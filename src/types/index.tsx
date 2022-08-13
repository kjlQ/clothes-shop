import {clothesReducer} from "../redux/reducers/clothesReducer";

export interface IProducts {
    products:clothes[]
    loading:boolean
}
type clothes = {
    price: string
    brand: string
    category: string
    id: string
    imageURL: string
    name: string
}

export interface IFilter {
    brand:string[],
    category:string[],
    sort_by:string,
}

export interface IReducers {
    clothesReducer:IProducts
    filterReducer:IFilter
}