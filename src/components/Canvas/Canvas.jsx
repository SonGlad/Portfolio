import { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls, } from '@react-three/drei';
import { useEffect } from 'react';
import { CanvasLoader } from '../CustomLoaders/CustomLoaders';
import { useWindowSize, useResponsiveFov } from '../../custom-hooks/hooks';
import { CanvasStyled } from './Canvas.styled';
import { AnimatedModel } from './AnimatedModel';


const ResizeHandler = () => {
    const { camera, gl } = useThree();

    useEffect(() => {
        const handleResize = () => {
            gl.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [camera, gl]);

    return null;
};


export const CanvasComponent = ({langToShow, propsId}) => {
    const { renderPC } = useWindowSize();
    const fov = useResponsiveFov();


    return(
        <CanvasStyled $renderPC={renderPC} id={propsId}>
            <Canvas 
                dpr={[1, 2]}
                camera={{ position: [0, 2, 5], fov: fov }}
                frameloop="always"
                // frameloop="demand"
                shadows
                gl={{preserveDrawingBuffer: true}}
            >    
                {/* <axesHelper scale={2}/> */}
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
                    <AnimatedModel langToShow={langToShow} renderPC={renderPC}/>
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
                <ResizeHandler/>    
            </Canvas>
        </CanvasStyled>
    )
};


