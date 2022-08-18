export interface IProducts {
    products:clothes[]
    loading:boolean
}
export type clothes = {
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

export interface ICart {
    cart:clothesCart[]
    totalPrice:number
    totalAmount?:number
    changeQuantityItem:any
}

export interface IReducers {
    clothesReducer:IProducts
    filterReducer:IFilter
    cartReducer:ICart
}

export type clothesCart = {
    price: string
    brand: string
    category: string
    id: string
    imageURL: string
    name: string
    count: number
    setShowOverlay?:any
    selectedSize:string
}