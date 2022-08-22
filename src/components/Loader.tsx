import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => (
    <ContentLoader
        speed={2}
        viewBox="0 0 230 371"
        backgroundColor="#c2c2c2"
        foregroundColor="#ecebeb"
        height='100%'
        width='202px'
    >
        <rect x="0" y="0" rx="6" ry="6" width="228" height="292" />
        <rect x="-1" y="299" rx="5" ry="5" width="162" height="22" />
        <rect x="-1" y="326" rx="5" ry="5" width="128" height="20" />
        <rect x="0" y="350" rx="5" ry="5" width="93" height="20" />
    </ContentLoader>
)

export default Loader