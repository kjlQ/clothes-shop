import ProductCard from "../components/ProductCard";
import React from "react";
import {useSelector} from "react-redux";
import {IReducers} from "../types";
const wishlistEmpty = require('../assets/image/wishlist-empty.png')

const Wishlist = () => {
    const {wishlist} = useSelector((state:IReducers)=>state.wishlistReducer)
    if(!wishlist[0]) {
        return(
            <img className="empty-cart" src={wishlistEmpty} alt=""/>
        )
    }
    return(
        <div className="wishlist">
            <div className="wishlist__text">
                <h1>wishlist</h1><span>({wishlist.length} items)</span>
            </div>
            <div className="sort__prod">
                <div className="products">
                    {wishlist && wishlist.map((item: any) => <ProductCard cross={true} {...item} /> )}
                </div>
            </div>
        </div>
    )
}
export default Wishlist