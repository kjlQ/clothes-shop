import {clothesCart} from "../types";

const CartPosition = ({imageURL,name,brand,count,price}:clothesCart) => {
    return (
        <div className="cart__position">
            <img className="cart__position-image" src={imageURL} alt=""/>
            <div className="info">
                <div className="delete-position">
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
                    <button>
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