import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {IReducers} from "../types";
import Sort from "../components/Sort";
import Filter from "../components/Filter";
import {BottomScrollListener} from 'react-bottom-scroll-listener';

export default function Shop() {
    const [load,setLoad] = useState<boolean>(true)
    const {products,loading,page} = useSelector((state:IReducers) => state.clothesReducer)
    const {brand,sort_by} = useSelector((state:IReducers) => state.filterReducer)
    const dispatch = useDispatch()
    useEffect(()=> {
        setLoad(true)
        const brandFactory = brand.map((item:any,i:any)=>`${item}${i+1!==brand.length ? `|`:'' }`).join('')
        async function fetchData() {
            const data = await axios.get(`https://62b1890ec7e53744afbb3fa1.mockapi.io/clothes?brand=${brandFactory}&sortBy=${sort_by}&page=${page}&limit=8`)
                .then(res=> {
                    dispatch({type:'setClothes',payload:res.data})
                    dispatch({type:'setLoading',payload:false})
                    setLoad(false)
                })
                .catch((e) => {
                    console.log(e)
                    dispatch({type:'setLoading',payload:false})
                })
        }
        fetchData()
    },[brand,sort_by,page])

    useEffect(()=>{
        console.log(load)
    },[load])

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
                    {load&&
                        <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>}
                </div>
            </div>
            {/*@ts-ignore*/}
            <BottomScrollListener onBottom={()=>setTimeout(()=>dispatch({type:"setPage",payload:page+1}),400)} />
        </div>
    )
}