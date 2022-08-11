import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";


export default function Shop() {
    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(()=> {
        async function fetchData() {
            const data = await axios.get('https://62b1890ec7e53744afbb3fa1.mockapi.io/clothes')
                .then(res=> {
                    setProducts(res.data)
                    setLoading(false)
                })
                .catch((e) => {
                    console.log(e)
                    setLoading(false);
                });
        }
        fetchData()
    },[])
    return(
        <div className="shop">
            <div className="shop__container">
                <div className="filter">
                    <h1>Filter</h1>
                    <div className="brands">
                        <h2>
                            Brands
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
                                <span>American Eagle</span>
                            </label>
                        </div>

                        <div className="checkbox">
                            <input type="checkbox" name={'Hollister'} className="check"/>
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
                                <span>Hollister</span>
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
                                <span>Pull & Bear</span>
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
                                <span>Zara</span>
                            </label>
                        </div>
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
                            // [...new Array(8)].map(( _,index ) => <Loader key={index} />)

                    }
                </div>
            </div>
        </div>
    )
}