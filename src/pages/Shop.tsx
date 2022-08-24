import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {IReducers} from "../types";
import Checkbox from "../components/Checkbox";
import Sort from "../components/Sort";
import Filter from "../components/Filter";

export default function Shop() {
    const {products,loading} = useSelector((state:IReducers) => state.clothesReducer)
    const {brand,sort_by} = useSelector((state:IReducers) => state.filterReducer)
    const dispatch = useDispatch()
    useEffect(()=> {
        const brandFactory = brand.map((item:any,i:any)=>`${item}${i+1!==brand.length ? `|`:'' }`).join('')
        async function fetchData() {
            const data = await axios.get(`https://62b1890ec7e53744afbb3fa1.mockapi.io/clothes?brand=${brandFactory}&sortBy=${sort_by}`)
                .then(res=> {
                    dispatch({type:'setClothes',payload:res.data})
                    dispatch({type:'setLoading',payload:false})
                })
                .catch((e) => {
                    console.log(e)
                    dispatch({type:'setLoading',payload:false})
                })
        }
        fetchData()
    },[brand,sort_by])
    return(
        <div className="shop">
            <div className="shop__container">
                <Filter />
                <div className="sort__prod">
                    <Sort />
                    <div className="products">
                        {
                            loading?
                                [...new Array(8)].map(( _,index ) => <Loader key={index} />)
                                :
                                products && products.map((item:any)=><ProductCard {...item} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}