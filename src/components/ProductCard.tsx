import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const ProductCard = ({brand ,category , id , imageURL , name , price , cross} :any) => {
    const dispatch = useDispatch()
    return (
            <div className="products__item">
                {cross &&
                    <div className="delete" onClick={()=>dispatch({type:'WISHLIST__REMOVE',payload:id})}>
                        <span>✕</span>
                    </div>
                }
                <Link to={`/product/${id}`} >

                <div className="products__item__image">
                    <img src={imageURL} alt=""/>
                </div>
                <div className="products__item__text">
                    <div className="title">
                        {name}
                    </div>
                    <div className="brand">
                        {brand}
                    </div>
                    <div className="price">
                        {price}$
                    </div>
                </div>
                </Link>

            </div>
    )
}
export default ProductCard