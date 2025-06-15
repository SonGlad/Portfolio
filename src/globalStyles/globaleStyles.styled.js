import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import BackGroundImage from "../assets/images/bg_image.webp";

export const GlobalStyle = createGlobalStyle`
   
    html,
    body {
        height: 100%;
        font-family: 'Poppins', 'Racing Sans One', sans-serif; 
        font-weight: 500;
        font-size: 62,5%;
        overflow-x: hidden;
        letter-spacing: 0.02em;
        color: ${(props) => props.theme.color.text_color};
        background-color: ${(props) => props.theme.color.bg_color};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: linear-gradient(rgba(8, 27, 41, 1), rgba(8, 27, 41, 0.5)), 
                    url(${BackGroundImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    

    a {
        text-decoration: none;
        color: inherit;
    }

    ul,
    ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6, 
    p {
        margin: 0;
    }

    button{
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
    }

    *{
        box-sizing: border-box;
    }

    /* ::-webkit-scrollbar {
        display: none;
        width: 6px;
        background-color: ${p => p.theme.color.main_color_rust_lighter};
    }
    ::-webkit-scrollbar-thumb {
        display: none;
        border-radius: 5px;
        background-color: ${p => p.theme.color.main_color};
    } */

    #particles canvas{
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
    }
`;
