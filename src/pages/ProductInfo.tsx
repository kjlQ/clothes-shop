import React from 'react'
import {useParams} from "react-router-dom";

const ProductInfo = () => {
    let {id} = useParams()
    return(
        <div className="product">
            {id}
        </div>
    )
}
export default ProductInfo