import ProductCard from "../components/ProductCard";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IReducers} from "../types";
const wishlistEmpty = require('../assets/image/wishlist-empty.png')

const Wishlist = () => {
    const dispatch = useDispatch()
    const {wishlist} = useSelector((state:IReducers)=>state.wishlistReducer)
    console.log(wishlist)

    try {
        useEffect(()=>{
            dispatch({type:'GET__LOCALSTORAGE__WISHLIST',payload:JSON.parse(localStorage.getItem('wishlistLocal')||'[]')})
        },[])
    }
    catch (e) {
        console.log(e)
    }

    useEffect(()=> {
        localStorage.setItem('wishlistLocal',JSON.stringify(wishlist))
    },[wishlist])

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
                    {wishlist.map((item: any) => <ProductCard cross={true} {...item} /> )}
                </div>
            </div>
        </div>
    )
}
export default Wishlist