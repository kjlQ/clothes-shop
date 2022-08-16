import {Link} from "react-router-dom";
import React from "react";

export interface IProps {
    title:string
    action:()=>void
    link:string
}

const headerButton = ({title,action,link}:IProps) => {
    return(
        <div className="links__button">
            <button onClick={()=>action()}>
                <Link to={link} >
                    {title}
                </Link>
            </button>
        </div>
    )
}
export default headerButton