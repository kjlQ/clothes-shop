import React from 'react'
import {useDispatch} from "react-redux";
const Checkbox = ({type,title}:any) => {
    const dispatch = useDispatch()

    const handleBrand = () => {
        type==='brand'&& dispatch({type:'changeBrand',payload:title.split(" ")[0]})
        type==='category'&& dispatch({type:'changeCategory',payload:title.split(" ")[0]})
    }

    return (
        <div className="checkbox">
            <input type="checkbox" className="check" onChange={()=>handleBrand()}/>
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
                <span>{title}</span>
            </label>
        </div>
    )
}
export default Checkbox