import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, ContactShadows, OrbitControls, Text} from '@react-three/drei';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CanvasLoader } from '../CustomLoaders/CustomLoaders';
import Fonts from "/fonts/Poppins-Regular.ttf";
import { useScroll } from '../../custom-hooks/hooks';


export const CanvasComponent = () => {
    const { isScrolling } = useScroll(); 

   
    return(
        <div className="canvas" style={{ height: "100dvh", width: "100%", position: "fixed", zIndex: isScrolling ? "1" : "3", pointerEvents:"auto"}}>
            <Canvas 
                dpr={[1, 2]}
                camera={{ position: [0, 2, 5], fov: 35 }}
                frameloop="always"
                // frameloop="demand"
                shadows
                gl={{preserveDrawingBuffer: true}}
            >
                <ambientLight intensity={0.15} />
                <pointLight 
                    position={[2, 4, 5]} 
                    intensity={2.5} 
                    color="yellow"
                    castShadow
                />
                <pointLight 
                    position={[-2, 2, -3]} 
                    intensity={0.8} 
                    color="white" 
                />
                <Suspense fallback={<CanvasLoader/>}>
                    <AnimatedModel />
                    <Environment preset="city" />
                </Suspense>
                <ContactShadows 
                    position={[0, -1.0, 0.0]}
                    scale={10} 
                    blur={2} 
                    far={3.5} 
                />
                <OrbitControls 
                    enablePan={false} 
                    enableZoom={false}
                    target={[0, 0.5, 0]} 
                    // minPolarAngle={Math.PI / 2.2} 
                    // maxPolarAngle={Math.PI / 2.2} 
                />
            </Canvas>
        </div>
    )
};


const AnimatedModel = () => {
    const groupRef = useRef();
    const { scene } = useGLTF('/Portfolio/macbook/scene.gltf');

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


    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        groupRef.current.position.y = -0.5 + Math.sin(t * 1.2) * 0.05;
        groupRef.current.rotation.y = Math.PI + Math.sin(t * 0.7) * 0.05;
        groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.02;
    });


    return (
        <group ref={groupRef} position={[0, -0.5, 0]} rotation={[0, Math.PI, 0]}>
            <primitive
                object={scene}
                scale={9.5}
                rotation={[0, -Math.PI / 2, 0]}
            />
            <TextComponent/>
        </group>
    );
};


const TextComponent = () => {
    const [textOne, setTextOne] = useState();
    const [textTwo, setTextTwo] = useState();
    const [textThree, setTextThree] = useState();
    const { t } = useTranslation();


    useEffect(() => {
        setTextOne(t('profile.name2'));
        setTextTwo(t('profile.text1'));
        setTextThree(t('profile.text2'));
    },[t]);


    return (
        <group scale={[-1, 1, 2]}>
            <Text
                font={Fonts}
                fontSize={0.25}
                // fontSize={fonrSizeOne}
                fontWeight={700}
                anchorY="top"
                anchorX="center"
                lineHeight={1.2}
                position={[0, 2.2, 0.59]}
                material-toneMapped={false}
                color="white"
                // outlineWidth={0.0022}
                // outlineColor="white"
                >
                {textOne}
            </Text>
            <FadingText
                font={Fonts}
                texts={[textTwo, textThree]}
                positions={[
                    [1.25, 0.35, 0.59],
                    [1.6, 0.35, 0.59],
                ]}
                fontSizes={[0.15, 0.11]}
                lineHeight={1.2}
                fontWeight={700}
            />
        </group>
    )
};


const FadingText = ({ texts, positions, fontSizes, lineHeight, fontWeight, font }) => {
    const [index, setIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [phase, setPhase] = useState('waiting');
    const timerRef = useRef(0);

    const fadeSpeed = 1.5;
    const pauseDuration = 2.5;

    useFrame((_, delta) => {
        timerRef.current += delta;

        if (phase === 'waiting' && timerRef.current >= pauseDuration) {
            setPhase('fadeOut');
            timerRef.current = 0;
        }

        if (phase === 'fadeOut') {
            const newOpacity = Math.max(0, opacity - delta * fadeSpeed);
            setOpacity(newOpacity);

            if (newOpacity <= 0) {
                setIndex((prev) => (prev + 1) % texts.length);
                setPhase('fadeIn');
            }
        }

        if (phase === 'fadeIn') {
            const newOpacity = Math.min(1, opacity + delta * fadeSpeed);
            setOpacity(newOpacity);

            if (newOpacity >= 1) {
                setPhase('waiting');
                timerRef.current = 0;
            }
        }
    });

    return (
        <Text
            font={font}
            fontSize={fontSizes[index]}
            anchorY="bottom"
            anchorX="right"
            position={positions[index]}
            material-toneMapped={false}
            color="white"
            transparent
            opacity={opacity}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
        >
            {texts[index]}
        </Text>
    );
};