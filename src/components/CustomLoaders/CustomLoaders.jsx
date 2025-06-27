import PuffLoader from "react-spinners/PuffLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import { RingLoaderStyled, LoaderStyled } from "./CustomLoaders.styled";
import { Html, useProgress } from "@react-three/drei";
import { useWindowSize } from "../../custom-hooks/hooks";



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
    const { renderMob } = useWindowSize();  

    return (
        <Html>
            <span></span>
            {renderMob ? (
                <p style={{fontSize: "24px",
                    color:"#ededed",
                    fontWeight:"800",
                    marginTop:"-120px",
                    marginLeft:"-40px"
                }}>
                    {progress.toFixed(2)}%
                </p>
            ) : (
                <p style={{fontSize: "48px",
                    color:"#ededed",
                    fontWeight:"800",
                    marginTop:"-120px",
                    marginLeft:"-100px"
                }}>
                    {progress.toFixed(2)}%
                </p>
            )}
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


export const FormLoading = () => {
    return (
        <FormStyled
            style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)'}}
        >
            <PuffLoader
                color={"#f1f1f1"}
                loading = {true} 
                size={150}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader" 
            />
        </FormStyled>
    );
};
