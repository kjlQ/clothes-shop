import React, {useState} from "react";

export default function Home() {
    const video =  require("../assets/video/walkin-girl.mp4");
    const img =  require("../assets/video/Preloader.gif");
    const [load,setLoad] = useState<boolean>(true)
    setTimeout(()=> {
        setLoad(false)
    },2500)
    // if(load) {
    //     return(
    //         <div className="site-preloader">
    //             <img src={img} alt=""/>
    //         </div>
    //     )
    // }
    return (
        <div className="home">
            <div className="video">
                <video src={video} loop muted autoPlay />
                <div className="overlay" />
                <div className="video__text">
                    Clothes Scope
                </div>
            </div>
            <span className="video-height">video</span>
        </div>
    )
}