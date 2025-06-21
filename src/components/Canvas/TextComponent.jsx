import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Fonts from "/fonts/Poppins-Regular.ttf";


export const TextComponent = ({langToShow}) => {
    const [textOne, setTextOne] = useState();
    const [textTwo, setTextTwo] = useState();
    const [textThree, setTextThree] = useState();
    const { t } = useTranslation();
    const [textPositions, _] = useState([[0, 0.35, 0.59],[0, 0.35, 0.59]]);
    const [textFontSize, setTextFontSize]= useState([0.15, 0.11]);


    useEffect(() => {
        setTextOne(t('profile.name2'));
        setTextTwo(t('profile.text1'));
        setTextThree(t('profile.text2'));
    },[t]);
    

    useEffect(() => {
        switch(langToShow){
            case "EN":
                setTextFontSize([0.15, 0.11]);
            break;
            case "UA":
                setTextFontSize([0.14, 0.08]);
            break;
            case "RU":
                setTextFontSize([0.14, 0.08]);
            break;
            default:
                setTextFontSize([0.15, 0.11]);
        }
    },[langToShow])


    return (
        <group scale={[-1, 1, 2]}>
            <Text
                font={Fonts}
                fontSize={0.25}
                fontWeight={700}
                anchorY="top"
                anchorX="center"
                lineHeight={1.2}
                position={[0, 2.2, 0.59]}
                material-toneMapped={false}
                color="white"
            >
                {textOne}
            </Text>
            <FadingText
                font={Fonts}
                texts={[textTwo, textThree]}
                positions={textPositions}
                fontSizes={textFontSize}
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
            anchorX="center"
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