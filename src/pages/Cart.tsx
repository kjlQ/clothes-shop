import {useDispatch, useSelector} from "react-redux";
import {clothesCart, IReducers} from "../types";
import CartPosition from "../components/CartPosition";
import {useEffect, useState} from "react";
import Overlay from "../components/Overlay";
import {Link} from "react-router-dom";
import PlacedOrder from "../components/PlacedOrder";
const emptyImage = require('../assets/image/empty-cart.png')

const Cart = () => {
    const [showOverlay , setShowOverlay] = useState<boolean>(false)
    const [placedOrder , setPlacedOrder] = useState<boolean>(false)
    const {cart,totalPrice} = useSelector((state:IReducers)=>state.cartReducer)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch({type:"GET__LOCAL__STORAGE",payload:JSON.parse(localStorage.getItem('cart') || '[]')})
    },[])
    useEffect(()=> {
        const total = cart.reduce((sum,obj)=>sum+(obj.count*Number(obj.price)),0)
        dispatch({type:'TOTAL__PRICE',payload:total})
        localStorage.setItem("cart",JSON.stringify(cart))
    },[showOverlay,cart])

    const handlePlaceOrder = () => {
        dispatch({type:'PLACE__ORDER'})
        setPlacedOrder(true)
    }

    if(placedOrder){
        return(
            <PlacedOrder />
        )
    }

    if(!cart[0]) {
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
                    <div className="blue-button submit-button">
                        <button onClick={()=>handlePlaceOrder()}>
                            place order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart