import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "./hooks";
import { useTranslation } from "react-i18next";


gsap.registerPlugin(ScrollTrigger, useGSAP);


export const useScrollAnimation = ({groupRef, containerRef}) => {
    const { renderPC } = useWindowSize();
    const { t } = useTranslation();

        
    useGSAP(() => {
        if (!renderPC) {
            if (containerRef?.current) { 
                gsap.utils.toArray('.phases-item').forEach((el) => {
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                            end: 'top 20%',
                            scrub: true,
                        },
                    })
                    .to(el.querySelector('.phases-content-cont'), {
                        opacity: 1,
                        ease: 'power2.inOut'
                    })
                    gsap.timeline({
                        scrollTrigger:{
                            trigger: el,
                            start: 'top bottom',
                            end: 'bottom 80%',
                            scrub: true,
                        }
                    })
                    .to(el.querySelector('.absolute'), {
                        yPercent: 100,
                        ease: 'power2.inOut'
                    })
                });            
            }
        } else {
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

                

                gsap.utils.toArray('.phases-item').forEach((el) => {
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            end: 'center center',
                            scrub: true,
                        },
                    })
                    .to(el.querySelector('.left-animation-block'), {
                        opacity: 1,
                        translateX: 0,
                        ease: 'power2.inOut'
                    })
                    .to(el.querySelector('.right-animation-block'), {
                        opacity: 1,
                        translateX: 0,
                        ease: 'power2.inOut'
                    },"<")
                    gsap.timeline({
                        scrollTrigger:{
                            trigger: el,
                            start: 'top 85%',
                            end: 'bottom 80%',
                            scrub: true,
                        }
                    })
                    .to(el.querySelector('.absolute'), {
                        yPercent: 100,
                        ease: 'power2.inOut'
                    })
                }); 
            }
        }

        requestAnimationFrame(() => {
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 200);
        });
        // return () => {
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // };
       
    }, { scope: containerRef, dependencies: [renderPC, t]})
}