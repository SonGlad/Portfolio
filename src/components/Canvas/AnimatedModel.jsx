import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { TextComponent } from './TextComponent';


gsap.registerPlugin(ScrollTrigger, useGSAP);


export const AnimatedModel = ({langToShow, renderPC}) => {
    const { scene } = useGLTF('/Portfolio/macbook/scene.gltf');
    const groupRef = useRef();
    const floatRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();        
        floatRef.current.position.y = -0.5 + Math.sin(t * 1.2) * 0.05;
        floatRef.current.rotation.y = Math.PI + Math.sin(t * 0.7) * 0.05;
        floatRef.current.rotation.x = Math.sin(t * 0.5) * 0.02;        
    });


    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh && child.material) {
                const materials = Array.isArray(child.material) ? child.material : [child.material];
                materials.forEach((mat) => {
                    if (mat.map) {
                        mat.map.anisotropy = 16;
                        mat.map.minFilter = THREE.LinearMipmapLinearFilter;
                        mat.map.magFilter = THREE.LinearFilter;
                        mat.map.generateMipmaps = true;
                        mat.map.needsUpdate = true;
                    }
                });
            }
        });
    }, [scene]);


    useGSAP(() => {
        if(!groupRef.current) return
        if(renderPC){
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
    
    
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    },[])
 

    return (
        <group ref={groupRef}>
            <group ref={floatRef}>
                <mesh>
                    <primitive
                        object={scene}
                        scale={9.5}
                        rotation={[0, -Math.PI / 2, 0]}
                    />
                </mesh>
                <TextComponent langToShow={langToShow}/>
            </group>   
        </group>
    );
};