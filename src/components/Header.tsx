import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import HeaderButton from "./HeaderButton";
import {useDispatch, useSelector} from "react-redux";
import {IReducers} from "../types";

export default function Header() {
    const [ show , setShow] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:'GET__LOCALSTORAGE__WISHLIST',payload:JSON.parse(localStorage.getItem('wishlistLocal')||'[]')})
        dispatch({type:"GET__LOCAL__STORAGE",payload:JSON.parse(localStorage.getItem('cart') || '[]')})
    },[])
    function changeShow() {
        setShow((prev:boolean)=>!prev)
    }
    const {cart} = useSelector((state:IReducers)=>state.cartReducer)
    const {wishlist} = useSelector((state:IReducers)=>state.wishlistReducer)
    return(
        <div className={`${!show && 'not-show'} header`}>
            <div className="links">
                <HeaderButton action={changeShow} link={'/'} title={'Home'} />
                <HeaderButton action={changeShow} link={'/shop'} title={'Shop'} />
                <HeaderButton action={changeShow} link={'/cart'} title={'Cart'} count={cart.reduce((sum,obj)=>sum+obj.count,0)} />
                <HeaderButton action={changeShow} link={'/wishlist'} title={'Wishlist'} count={wishlist.length}/>
                <HeaderButton action={changeShow} link={'/profile'} title={'Profile'}/>
                <div className="show__header" onClick={()=>changeShow()}>
                    <button>
                        Menu
                    </button>
                </div>
            </div>
        </div>
    )
}