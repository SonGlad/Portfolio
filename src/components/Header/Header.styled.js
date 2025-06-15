import { styled } from "styled-components";


export const StyledHeader = styled.header`
    position: fixed;
    z-index: 100;
    width: 100%;
    border-radius: none;
    backdrop-filter: ${p => p.$isScrolled && "blur(10px)"};
    
    
    .header-container{
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & .order-one{
            order: 2;
        }
        & .order-two{
            order: 1;
        }
        & .order-three{
            order: 3;
        }

        @media screen and (min-width: 768px){
            & .order-one{
                order: 1;
            }
            & .order-two{
                order: 3;
            }
            & .order-three{
                order: 2;
            }
        }
    }

    .logo-link{
        position: relative;
        width: 65px;
        height: 34px;
        cursor: pointer;
    }

    .header-logo{
        position: absolute;
        max-width: 65px;
        height: auto;
        z-index: 1;
        top: -60%;
        left: 0;
        fill: ${p => p.theme.color.text_color};
        transition: fill ${p => p.theme.transition.main_transition};
        animation: slideLogoRight 1s ease forwards;

        &:hover, &:focus{
            fill: ${p => p.theme.color.main_color};
        } 
    }

    @keyframes slideLogoRight {
        0%{
            opacity: 0;
            transform: translateX(-100px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .lang-cont{
        position: relative;
        
        @media screen and (min-width: 768px){
            margin-left: 30px;
            /* margin-left: auto; */
        }
    }

    .lang-btn{
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 18px;
        font-weight: 700;
        background-color: ${p => p.theme.color.text_color};
        color: ${p => p.theme.color.main_color};

        @media screen and (min-width: 768px){
            font-size: min(calc(18px + (6 * ((100vw - 768px) / 672))), 24px);
        }
    }

    .chose-lang-cont{
        position: absolute;
        z-index: 10;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) scale(0);
        margin-top: 5px;
        transform-origin: top;
        transition: transform ${p => p.theme.transition.main_transition};
    }
    
    .open{
        transform: translateX(-50%) scale(1);
    }
    
    
    .lang-list{
        background-color: ${p => p.theme.color.second_bg_color};
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px 5px;
        font-size: 18px;

        @media screen and (min-width: 768px){
            font-size: min(calc(18px + (6 * ((100vw - 768px) / 672))), 24px);
        }
    }

    
    .lang-item{
        padding: 5px 10px;
        margin-bottom: 10px;
        cursor: pointer;
        background-color: transparent;
        color: ${p => p.theme.color.text_color};
        transition: color ${p => p.theme.transition.main_transition};

        &:hover{
            color: ${p => p.theme.color.main_color};
        }

        &:last-child{
            margin-bottom: 0;
        }
    }




    .mob-menu-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        animation: slideButtonLeft 1s ease forwards;
       
        .burger-icon{
            stroke: ${p => p.theme.color.text_color};
        }

        .menu-close-icon{
            fill: transparent;
            stroke: ${p => p.theme.color.text_color};
        }
    }

    @keyframes slideButtonLeft {
        0%{
            opacity: 0;
            transform: translateX(100px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .mob-menu{
        top: 58px;
        left: 0;
        position: absolute;
        z-index: 999;
        width: 100vw;
        height: auto;
        padding-bottom: 20px;
        padding-left: 15px;
        background-color: ${p => p.theme.color.second_bg_color};
        transform: translateX(-100%);
        transition: transform ${p => p.theme.transition.main_transition};
        
        @media screen and (min-width: 768px){
            display: none;
        }
    }

    .is-active{
        transform: translateX(0);
    }
` 