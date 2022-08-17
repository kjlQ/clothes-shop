import {clothesCart} from "../types";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const CartPosition = ({imageURL,name,brand,count,price,setShowOverlay,id}:clothesCart) => {
    const dispatch=useDispatch()
    const setItem = () => {
        setShowOverlay(true)
        dispatch({type:'CHANGE__QUANTITY__ID',payload:id})
    }
    return (
        <div className="cart__position">
            <img className="cart__position-image" src={imageURL} alt=""/>
            <div className="info">
                <div className="delete">
                    <span>✕</span>
                </div>
                <div className="title">
                    {name}
                </div>
                <div className="brand">
                    {brand}
                </div>
                <div className="size-n-quantity">
                    <button>
                        Size:L
                    </button>
                    <button className="quantity" onClick={()=>setItem()}>
                        Quantity : {count}
                        &#129055;
                    </button>
                </div>
                <div className="price">
                    {Number(price)*count}$
                </div>
            </div>
        </div>
    )
}
export default CartPosition