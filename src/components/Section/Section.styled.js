import { styled } from "styled-components";


export const HeroSectionStyle = styled.section`
    width: 100%;
    @media screen and (min-width: 768px){
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
`

export const StackSectionStyled = styled.section`
    width: 100%;
    background: transparent;
    pointer-events: auto;
    position: relative;
    z-index: 4;
    overflow: hidden;
`

export const PortfolioSectionStyled = styled.section`
    width: 100%;
    background-color: transparent;
    pointer-events: auto;
    position: relative;
    z-index: 4;
`

export const ContactSectionStyled = styled.section`
    width: 100%;
    background-color: transparent;
    pointer-events: auto;
    position: relative;
    z-index: 4;
`