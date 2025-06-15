import { BackdropStyled } from "./Backdrop.styled";
import { ParticlesComponent }from "../particles/particles";
import { useWindowSize }from "../../custom-hooks/hooks";


export const Backdrop = () => {
    const { renderPC } = useWindowSize();
    

    return (
        <BackdropStyled>
            {renderPC && <ParticlesComponent id='particles'/>}
        </BackdropStyled>
    );
};