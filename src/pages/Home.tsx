import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Home() {
    const [ show , setShow] = useState(false)
    const video =  require("../assets/video/walkin-girl.mp4");
    return (
        <>
            <div className="video">
                <video src={video} loop muted autoPlay />
                <div className="overlay" />
                <div className="video__text">
                    Clothes Scope
                </div>
            </div>

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
        </>
    )
}