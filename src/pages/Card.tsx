import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import {clothes} from '../types'
import AddButton from "../components/AddButton";
import {internationalSizes,englishSizes} from "../assets/sizes";

const Card = () => {
    let {id} = useParams()
    const [item,setItem] = useState<clothes>()
    const [availableSizes,setAvailableSizes] = useState<string[]>([])
    useEffect(()=> {
        async function fetchData() {
            const data = await axios.get(`https://62b1890ec7e53744afbb3fa1.mockapi.io/clothes?id=${id}`)
                .then(res=> {
                    setItem(res.data[0])
                })
                .catch((e) => {
                    console.log(e)
                });
        }
        fetchData()
        item && item.category==='Jeans' ? setAvailableSizes(englishSizes) : setAvailableSizes(internationalSizes)
    },[id])

    if(!item){
        return (
            <>
                wait...
            </>
        )
    }
    return(
        <div className="card">
            <div className="card__container">
                <img src={item.imageURL} alt=""/>
                <div className="info">
                    <h1>{item.name}</h1>
                    <h2>{item.brand}</h2>
                    <h1>{item.price}$</h1>
                    <p className="select-size">
                        Select Size
                        <span>Size Chart</span>
                    </p>
                    <div className="sizes">
                        <ul>
                                {availableSizes.map((size:string)=><li>{size}</li>)}
                        </ul>
                    </div>
                    <AddButton item={item} />
                </div>
            </div>
        </div>
    )
}
export default Card