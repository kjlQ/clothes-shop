import React from "react";

export default function Home() {
    const video =  require("../assets/video/walkin-girl.mp4");
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

            123
            <div className="tilt-box-wrap">
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <span className="t_over"></span>
                <div className="tilt-box">
                    <strong>Tilt <br/> Effect</strong>
                </div>
            </div>
            123
        </div>
    )
}