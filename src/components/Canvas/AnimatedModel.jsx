import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { TextComponent } from './TextComponent';
import { useScrollAnimation } from '../../custom-hooks/allGSAPAnimations';


export const AnimatedModel = ({ langToShow }) => {
    const { scene } = useGLTF('/macbook/scene.gltf');
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


    useScrollAnimation({groupRef});
 

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