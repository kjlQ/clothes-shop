import {useDispatch, useSelector} from "react-redux";
import {clothesCart, IReducers} from "../types";
import CartPosition from "../components/CartPosition";
import {useEffect, useState} from "react";
import Overlay from "../components/Overlay";
const emptyImage = require('../assets/image/empty-cart.png')

const Cart = () => {
    const [showOverlay , setShowOverlay] = useState(false)
    const {cart,totalPrice} = useSelector((state:IReducers)=>state.cartReducer)
    const dispatch = useDispatch()
    useEffect(()=> {
        const total = cart.reduce((sum,obj)=>sum+(obj.count*Number(obj.price)),0)
        dispatch({type:'TOTAL__PRICE',payload:total})
    },[showOverlay])
    if(!cart.length) {
        return(
            <img className="empty-cart" src={emptyImage} alt=""/>
        )
    }
    return (
        <div className="cart">
            {showOverlay && <Overlay setShowOverlay={setShowOverlay} />}
            <div className="cart__container">
                <div className="cart__items">
                    <h1>Cart</h1>
                    {cart.map((item:clothesCart)=><CartPosition setShowOverlay={setShowOverlay} {...item} />)}
                </div>
                <div className="cart__price-details">
                    <h1>Price details</h1>
                    <div className="price">
                        <span>price</span>
                        <span>{totalPrice}$</span>
                    </div>
                    <div className="shipping">
                        <span>shipping</span>
                        <span>FREE</span>
                    </div>
                    <div className="total-price">
                        <span>Total Amount</span>
                        <span>{totalPrice}$</span>
                    </div>
                    <div className="submit-order">
                        <button>
                            place order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart