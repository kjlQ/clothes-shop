import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IReducers} from "../types";
interface IOverlay {
    setShowOverlay:any
}
const Overlay = ({setShowOverlay}:IOverlay) => {
    const [quantity,setQuantity] = useState<number>(0)
    const dispatch = useDispatch()
    const {changeQuantityItem,cart} = useSelector((state:IReducers)=>state.cartReducer)

    const numberClick = (index:number) => {
        setQuantity(index+1)
        setTimeout(()=> {
            setShowOverlay(false)
        },0)
    }

    useEffect(()=> {
        quantity !== 0 && dispatch({type:'CHANGE__QUANTITY__ITEM',payload:quantity})
    },[quantity])

    useEffect(()=> {
        cart.map(item=>item.id===changeQuantityItem && setQuantity(item.count))
    },[])

    return(
        <div className="overlay">
            <div className="overlay__container">
                <div className="overlay__block">
                    <div className="delete" onClick={()=>setShowOverlay((prev:boolean)=>!prev)}>
                        <span>✕</span>
                    </div>
                    <h1>Choose</h1>
                    <div className="numbers round">
                        <ul>
                            {[...new Array(10)].map((_,index)=><li className={quantity === index+1 ? 'lox' :''} onClick={()=>numberClick(index)}>{index+1}</li> )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Overlay