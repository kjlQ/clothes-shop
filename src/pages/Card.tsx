import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import {clothes, IReducers} from '../types'
import AddButton from "../components/AddButton";
import {internationalSizes,englishSizes} from "../assets/info/sizes";
import WishlistButton from "../components/WishlistButton";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../components/Loading";

const Card = () => {
    let {id} = useParams()
    const [item,setItem] = useState<clothes>()
    const [availableSizes,setAvailableSizes] = useState<string[]>([])
    const [selectedSize,setSelectedSize] = useState<string>("")
    const {wishlist} = useSelector((state:IReducers)=>state.wishlistReducer)
    const dispatch = useDispatch()
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
        if(item && item.category==='Jeans') {
            setAvailableSizes(englishSizes)
            setSelectedSize(englishSizes[0])
        } else {
            setAvailableSizes(internationalSizes)
            setSelectedSize(internationalSizes[0])
        }
    },[id])

    if(!item){
        return (
            <Loading />
        )
    }

    return(
        <div className="card">

            <div className="card__container">
                <div className="tilt-box-wrap">
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <span className="t_over"></span>
                    <div className="tilt-box">
                        <img src={item.imageURL} alt=""/>
                    </div>
                </div>

                <div className="info">
                    <h1>{item.name}</h1>
                    <h2>{item.brand}</h2>
                    <h1>{item.price}$</h1>
                    <div className="sizes round">
                        <ul>
                            {availableSizes.map((size:string)=><li className={size===selectedSize ? "selected-size":''} onClick={()=>setSelectedSize(size)}>{size}</li>)}
                        </ul>
                    </div>
                    <div className="card__buttons">
                        <AddButton item={item} selectedSize={selectedSize} />
                        <WishlistButton item={item} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card