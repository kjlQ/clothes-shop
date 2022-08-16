import {Link} from "react-router-dom";
import React, {useState} from "react";
import HeaderButton from "./HeaderButton";

export default function Header() {
    const [ show , setShow] = useState(false)
    function changeShow() {
        setShow((prev:boolean)=>!prev)
    }
    return(
        <div className={`${!show && 'not-show'} header`}>
            <div className="links">
                <HeaderButton action={changeShow} link={'/'} title={'Home'} />
                <HeaderButton action={changeShow} link={'/shop'} title={'Shop'} />
                <HeaderButton action={changeShow} link={'/'} title={'About us'} />
                <HeaderButton action={changeShow} link={'/cart'} title={'Cart'} />
                <div className="show__header" onClick={()=>changeShow()}>
                    <button>
                        Menu
                    </button>
                </div>
            </div>
        </div>
    )
}