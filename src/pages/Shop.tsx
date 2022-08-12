import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {IReducers} from "../types";
import Checkbox from "../components/checkbox";


export default function Shop() {
    const {products,loading} = useSelector((state:IReducers) => state.clothesReducer)
    const {brand} = useSelector((state:IReducers) => state.filterReducer)
    const dispatch = useDispatch()
    console.log(brand)
    useEffect(()=> {
        const brandFactory = brand.map((item:any,i:any)=>`${item}${i+1!==brand.length ? `|`:'' }`).join('')
        async function fetchData() {
            const data = await axios.get(`https://62b1890ec7e53744afbb3fa1.mockapi.io/clothes?brand=${brandFactory}`)
                .then(res=> {
                    dispatch({type:'setClothes',payload:res.data})
                    dispatch({type:'setLoading',payload:false})
                })
                .catch((e) => {
                    console.log(e)
                    dispatch({type:'setLoading',payload:false})
                });
        }
        fetchData()
    },[brand])
    return(
        <div className="shop">
            <div className="shop__container">
                <div className="filter">
                    <h1>Filter</h1>
                    <div className="brands">
                        <h2>
                            Brands
                        </h2>
                        <Checkbox title="American Eagle"/>
                        <Checkbox title="Hollister"/>
                        <Checkbox title="Pull & Bear"/>
                        <Checkbox title="Zara"/>
                    </div>

                    <div className="category">
                        <h2>
                            Category
                        </h2>
                        <div className="checkbox">
                            <input type="checkbox" className="check"/>
                            <label htmlFor="check7" className="label">
                                <svg width="30" height="30" viewBox="0 0 100 100">
                                    <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                    <g transform="translate(0,-952.36218)">
                                        <path d="m 13,983 c 33,6 40,26 55,48 " stroke="black" strokeWidth="3"
                                              className="path1" fill="none"/>
                                        <path d="M 75,970 C 51,981 34,1014 25,1031 " stroke="black" strokeWidth="3"
                                              className="path1" fill="none"/>
                                    </g>
                                </svg>
                                <span>Hoodies</span>
                            </label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" className="check"/>
                            <label htmlFor="check7" className="label">
                                <svg width="30" height="30" viewBox="0 0 100 100">
                                    <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                    <g transform="translate(0,-952.36218)">
                                        <path d="m 13,983 c 33,6 40,26 55,48 " stroke="black" strokeWidth="3"
                                              className="path1" fill="none"/>
                                        <path d="M 75,970 C 51,981 34,1014 25,1031 " stroke="black" strokeWidth="3"
                                              className="path1" fill="none"/>
                                    </g>
                                </svg>
                                <span>Jeans</span>
                            </label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" className="check"/>
                            <label htmlFor="check7" className="label">
                                <svg width="30" height="30" viewBox="0 0 100 100">
                                    <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                    <g transform="translate(0,-952.36218)">
                                        <path d="m 13,983 c 33,6 40,26 55,48 " stroke="black" strokeWidth="3"
                                              className="path1" fill="none"/>
                                        <path d="M 75,970 C 51,981 34,1014 25,1031 " stroke="black" strokeWidth="3"
                                              className="path1" fill="none"/>
                                    </g>
                                </svg>
                                <span>Polos</span>
                            </label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" className="check"/>
                            <label htmlFor="check7" className="label">
                                <svg width="30" height="30" viewBox="0 0 100 100">
                                    <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                    <g transform="translate(0,-952.36218)">
                                        <path d="m 13,983 c 33,6 40,26 55,48 " stroke="black" strokeWidth="3"
                                              className="path1" fill="none"/>
                                        <path d="M 75,970 C 51,981 34,1014 25,1031 " stroke="black" strokeWidth="3"
                                              className="path1" fill="none"/>
                                    </g>
                                </svg>
                                <span>Shirts</span>
                            </label>
                        </div>
                    </div>
                </div>
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
    )
}