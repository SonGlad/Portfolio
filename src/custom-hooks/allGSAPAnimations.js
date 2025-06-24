// import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "./hooks";


gsap.registerPlugin(ScrollTrigger, useGSAP);


export const useScrollAnimation = ({groupRef, containerRef}) => {
    const { renderPC, renderMob } = useWindowSize();

        
    useGSAP(() => {
        if(renderPC){
            if (groupRef?.current) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: '#descriptionCont',
                        start: 'top bottom',
                        end: 'bottom center',
                        scrub: true,
                    }
                })
                .to(groupRef.current.scale, 
                    {
                        x: 0.6,
                        y: 0.6,
                        z: 0.6,
                        ease: 'power2.inOut'
                    },
                )
        
                gsap.timeline({
                    scrollTrigger: {
                        trigger: '#descriptionOne',
                        start: 'top bottom',
                        end: 'top center',
                        scrub: true,
                    }
                })
                .to(groupRef.current.position, 
                    {
                        x: -1.5,
                        ease: 'power2.inOut'
                    },
                    "<"
                )
                .to(groupRef.current.rotation, 
                    {
                        x: Math.PI / 15,
                        ease: 'power2.inOut'
                    },
                    "<"
                )
                .to(groupRef.current.rotation, 
                    {
                        y: Math.PI * 0.4,
                        ease: 'power2.inOut'
                    },
                    "<"
                )

                gsap.timeline({
                    scrollTrigger: {
                        trigger: '#descriptionTwo',
                        start: 'center bottom',
                        end: 'center center',
                        scrub: true,
                    }
                })
                .to(groupRef.current.position, 
                    {
                        x: 1.5,
                        ease: 'power2.inOut'
                    },
                    "<"
                )
                .to(groupRef.current.rotation, 
                    {
                        x: Math.PI / 12,
                        ease: 'power2.inOut'
                    },
                    "<"
                )
                .to(groupRef.current.rotation, 
                    {
                        y: Math.PI * -0.25,
                        ease: 'power2.inOut'
                    },
                    "<"
                )
        
                gsap.timeline({
                    scrollTrigger: {
                        trigger: '#descriptionThree',
                        start: 'center bottom',
                        end: 'center center',
                        scrub: true,
                    }
                })
                .to(groupRef.current.position, 
                    {
                        x: -1.5,
                        ease: 'power2.inOut'
                    },
                    "<"
                )
                .to(groupRef.current.rotation, 
                    {
                        x: Math.PI / 15,
                        ease: 'power2.inOut'
                    },
                    "<"
                )
                .to(groupRef.current.rotation, 
                    {
                        y: Math.PI * -1.75,
                        ease: 'power2.inOut'
                    },
                    "<"
                )
            }
        }
        if (renderMob) {
            if (containerRef?.current) {                
                gsap.utils.toArray('.phases-content-cont').forEach((el) => {
                    console.log(el);
                    
                    gsap.fromTo(
                        el,
                        { opacity: 0 },
                        {
                        opacity: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            end: 'top 40%',
                            scrub: true,
                            markers: true
                        },
                        }
                    );
                });
                ScrollTrigger.refresh();
            }
        }
        // return () => {
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // };
       
    }, { scope: containerRef })
}