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