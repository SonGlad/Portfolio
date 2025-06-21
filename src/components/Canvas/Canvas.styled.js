import styled from "styled-components";


export const CanvasStyled = styled.div `
    height: 75dvh;
    width: 100%;
    position: ${p => p.$renderPC ? "fixed": "relative"};
    pointer-events: auto;
    z-index: 3;

    @media screen and (min-width: 1200px){
        height: 100dvh;
    }
`