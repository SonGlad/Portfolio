import { styled } from "styled-components";


export const HeroSectionStyle = styled.section`
    width: 100%;
    @media screen and (min-width: 768px){
        /* position: relative; */
        /* z-index: 2; */
        height: 75dvh;
        background: transparent;
        pointer-events: auto;

        @media screen and (min-width: 1200px){
            height: 100dvh;
        }
    }
`


export const AboutSectionStyled = styled.section`
    width: 100%;
    background-color: transparent;
    position: relative;
    overflow: hidden;
    pointer-events: auto;

    @media screen and (min-width: 768px){

    }
`

export const StackSectionStyled = styled.section`
    width: 100%;
    height: 1000px;
    background: transparent;
    pointer-events: auto;
    position: relative;
    z-index: 4;

    @media screen and (min-width: 768px){
    }
`

export const PortfolioSectionStyled = styled.section`
    width: 100%;
    height: 1000px;
    background-color: transparent;
    pointer-events: auto;
    /* position: relative; */
    /* z-index: 2; */

    @media screen and (min-width: 768px){
    }
`

export const ContactSectionStyled = styled.section`
    width: 100%;
`