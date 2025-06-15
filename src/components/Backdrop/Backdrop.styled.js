import styled from "styled-components";
import BackGroundImage from "../../assets/images/bg_image.webp";


export const BackdropStyled = styled.div `
    overflow-x: hidden;
    background: linear-gradient(rgba(8, 27, 41, 1), rgba(8, 27, 41, 0.5)), 
                url(${BackGroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100dvh;
    position: fixed;
    z-index: 0;
` 