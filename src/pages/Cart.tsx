import {useSelector} from "react-redux";
import {clothesCart, IReducers} from "../types";
import CartPosition from "../components/CartPosition";

const Cart = () => {
    const {cart} = useSelector((state:IReducers)=>state.cartReducer)
    console.log('cart=>',cart)
    return (
        <div className="cart">
            <div className="cart__container">

                <div className="cart__items">
                    <h1>Cart</h1>
                    {cart.map((item:clothesCart)=><CartPosition {...item} />)}
                </div>
                <div className="cart__price-details">
                    <h1>Price details</h1>
                    <div className="price">
                        <span>price</span>
                        <span>228$</span>
                    </div>
                    <div className="shipping">
                        <span>shipping</span>
                        <span>FREE</span>
                    </div>
                    <div className="total-price">
                        <span>Total Amount</span>
                        <span>228$</span>
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