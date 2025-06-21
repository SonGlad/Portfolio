import { useState, useEffect } from "react";



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



function useResponsiveFov() {
    const [fov, setFov] = useState(60);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const minWidth = 320;
            const maxWidth = 1200;
            const minFov = 38;
            const maxFov = 60;

            const clampedWidth = Math.min(Math.max(width, minWidth), maxWidth);

            const ratio = (clampedWidth - minWidth) / (maxWidth - minWidth);
            const newFov = maxFov - ratio * (maxFov - minFov);

            setFov(newFov);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return fov;
};

  
export { useWindowSize, useResponsiveFov };
