import {Link} from "react-router-dom";
import React, {useState} from "react";

export default function Header() {
    const [ show , setShow] = useState(false)
    return(
        <div className={show ? "header" : "header not-show"}>
            <div className="links">
                <div className="links__button">
                    <button onClick={()=>setShow(!show)}>
                        <Link to={'/'} >
                            Home
                        </Link>
                    </button>
                </div>
                <div className="links__button">

                    <button onClick={()=>setShow(!show)}>
                        <Link to={'/shop'} >
                            Shop
                        </Link>
                    </button>

                </div>

                <div className="links__button">
                    <button onClick={()=>setShow(!show)} >
                        About us
                    </button>
                </div>
                <div className="show__header" onClick={()=>setShow(!show)}>
                    <button>
                        Menu
                    </button>
                </div>
            </div>
        </div>
    )
}