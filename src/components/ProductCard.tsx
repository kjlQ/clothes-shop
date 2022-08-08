import React from "react";
import {Link} from "react-router-dom";

const ProductCard = ({brand ,category , id , imageURL , name , amount} :any) => {
    return (
        <Link to={"#"} >
            <div className="products__item">
                <img src={imageURL} alt=""/>
                <div className="products__item__text">
                    <div className="title">
                        {name}
                    </div>
                    <div className="brand">
                        {brand}
                    </div>
                    <div className="price">
                        {amount}$
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard