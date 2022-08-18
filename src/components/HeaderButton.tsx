import {Link} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {IReducers} from "../types";

export interface IProps {
    title:string
    action:()=>void
    link:string
    cartLength?:any
}

const headerButton = ({title,action,link,cartLength}:IProps) => {
    return(
        <div className="links__button">
            <button onClick={()=>action()}>
                <Link to={link} >
                    {title}
                </Link>
            </button>
            {cartLength ? <span className='header-count'>{cartLength}</span> :''}
        </div>
    )
}
export default headerButton