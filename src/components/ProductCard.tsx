import React from "react";
import {Link} from "react-router-dom";

const ProductCard = ({brand ,category , id , imageURL , name , price} :any) => {
    return (
        <Link to={"#"} >
            <div className="products__item">
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
            </div>
        </Link>
    )
}
export default ProductCard