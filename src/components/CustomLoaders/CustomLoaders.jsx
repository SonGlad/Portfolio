import PuffLoader from "react-spinners/PuffLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import { RingLoaderStyled, LoaderStyled } from "./CustomLoaders.styled";
import { Html, useProgress } from "@react-three/drei";



export const Loader = () => {
    return (
        <RingLoaderStyled>
            <PuffLoader 
                color={"#877356"} 
                loading = {true} 
                size={250}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </RingLoaderStyled>
    );
};


export const CanvasLoader = () => {
    const { progress } = useProgress();  

    return (
        <Html>
            <span></span>
            <p style={{fontSize: "48px",
                color:"#f1f1f1",
                fontWeight:"800",
                marginTop:"-120px",
                marginLeft:"-100px"
            }} 
            >{progress.toFixed(2)}%</p>
        </Html>
    );
};


export const Loading = () => {
    return (
        <LoaderStyled>
            <ScaleLoader
                color={"#f1f1f1"} 
                loading = {true} 
                height={35}
                width={4}
                radius={2}
                margin={2}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </LoaderStyled>
    );
};
