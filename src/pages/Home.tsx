import React from "react";

export default function Home() {
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
        </>
    )
}