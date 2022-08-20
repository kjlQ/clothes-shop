import {Link} from "react-router-dom";
import React from "react";

export interface IProps {
    title:string
    action:()=>void
    link:string
    count?:any
}

const headerButton = ({title,action,link,count}:IProps) => {
    return(
        <div className="links__button">
            <button onClick={()=>action()}>
                <Link to={link} >
                    {title}
                </Link>
            </button>
            {count ? <span className='header-count'>{count}</span> :''}
        </div>
    )
}
export default headerButton