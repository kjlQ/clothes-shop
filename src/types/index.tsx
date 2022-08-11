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