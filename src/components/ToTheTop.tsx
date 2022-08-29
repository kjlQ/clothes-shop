import React, {useEffect, useState} from 'react';
const ToTheTop = () => {
    const upArrow = require('../assets/image/up-arrow.webp')
    const [scrollPosition, setScrollPosition] = useState(false);

    const handleScroll = () => {
        window.pageYOffset > 300 ? setScrollPosition(true) : setScrollPosition(false)
    };

    const scrollToTheTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <img onClick={()=>scrollToTheTop()} className={`${scrollPosition && 'toTheTop-visible'} toTheTop`} src={upArrow} alt="arrow"/>
        </div>
    );
};

export default ToTheTop;
