import {clothesCart} from "../types";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const CartPosition = ({imageURL,name,brand,count,price,setShowOverlay,id,selectedSize}:clothesCart) => {
    const dispatch=useDispatch()
    const setItem = () => {
        setShowOverlay(true)
        dispatch({type:'CHANGE__QUANTITY__ID',payload:{id, selectedSize}})
    }
    return (
        <div className="cart__position">
            <Link to={`/product/${id}`} >
                <img className="cart__position-image" src={imageURL} alt=""/>
            </Link>
            <div className="info">
                <div className="delete" onClick={()=>dispatch({type:'REMOVE__ITEM',payload:{id,selectedSize}})}>
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
                        Size:{selectedSize}
                    </button>
                    <button className="quantity" onClick={()=>setItem()}>
                        Quantity : {count}
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2.38 7h12l-6 7-6-7z"/><path d="M10.37 8.11h-4v-6h4z"/></svg>
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