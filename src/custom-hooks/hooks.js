import { useState, useEffect, useRef, useCallback } from "react";

function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderTab = windowWidth < 1200 && windowWidth >= 768;
    const renderMob = windowWidth < 768;
    const renderPC = windowWidth >= 1200;


    return { renderTab, renderMob, windowWidth, renderPC};
};


function useScroll(delay= 500) {
    const [isScrolling, setIsScrolling] = useState(false);
    const timeoutRef = useRef(null);
  

    const handleScroll = useCallback(() => {
        setIsScrolling(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, delay);
    }, [delay]);

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('touchmove', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
            clearTimeout(timeoutRef.current);
        };
    },[handleScroll]);

    return { isScrolling };
}
  
export { useWindowSize, useScroll };
