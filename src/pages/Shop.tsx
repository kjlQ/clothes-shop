import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import {Link} from "react-router-dom";


export default function Shop() {
    const img = require('../assets/hoodie.webp')
    const [products , setProducts] = useState([])
    useEffect(()=> {
        async function fetchData() {
            const data = await axios.get('https://62b1890ec7e53744afbb3fa1.mockapi.io/clothes').then(res=>setProducts(res.data))
            console.log(data)
        }
        fetchData()
    },[])
    return(
        <div className="shop">
            <div className="shop__container">
                <div className="filter">
                    Filter
                </div>
                <div className="products">
                    {products && products.map((item:any)=><ProductCard {...item} />)}
                </div>
            </div>
        </div>
    )
}