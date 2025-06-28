import { styled } from "styled-components";


export const CodingChartsStyled = styled.div`

    @media screen and (min-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .phases-list{
        width: 100%;
    }

    .phases-item{
        display: flex;
        gap: 10px;
    }


    .context{
        position: relative;
        padding: 0 3px 0 3px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${p => p.theme.color.bg_color};
        box-shadow: rgba(8, 27, 41, 1) 1px 12px 5px 12px;
        border-radius: 5px;

        @media screen and (min-width: 1200px){
            box-shadow: rgba(8, 27, 41, 1) 1px 12px 20px 15px; 
        }
    }
    
    .border-inner{
        width: 30px;
        height: 30px;
        border: 2px solid ${p => p.theme.color.main_color};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        & p{
            font-size: 12px;
            position: relative;
            z-index: 2;
        }

        @media screen and (min-width: 1200px){
            width: 50px;
            height: 50px;
            border: 4px solid ${p => p.theme.color.main_color};

            & p{
                font-size: 16px;
            }
        }
    }


    .absolute{
        position: absolute;
        z-index: 3;
        top: -1px;
        width: 32px;
        height: 101%;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${p => p.theme.color.bg_color};

        @media screen and (min-width: 1200px){
            width: 52px;
        }
    }

    .border-to-bottom{
        width: 1px;
        border: 1px solid ${p => p.theme.color.main_color};
        flex-grow: 1;

        @media screen and (min-width: 1200px){
            width: 2px;
            border: 2px solid ${p => p.theme.color.main_color};
        }
    }


    .phases-content-cont{
        width: 100%;
        padding: 15px 0;
        opacity: 0;
        
        @media screen and (min-width: 1200px) {
            display: flex;
            gap: 10px;
            padding: 0;
            opacity: 1;
            justify-content: space-between;
        }
    }


    .padding-cont{
        @media screen and (min-width: 1200px) {
            padding: 20px 0;
        }
    }

    .image-cont{
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 2, 0.5) 0px 10px 10px 5px;

        @media screen and (min-width: 468px){
            height: 150px;
        }
        @media screen and (min-width: 768px){
            height: 250px;
        }
        @media screen and (min-width: 1200px){
            height: 350px;
        }
    }


    .image-padding-cont{
        @media screen and (min-width: 1200px){
            width: 45%;
        }
    }
    

    .content-padding-cont{
        @media screen and (min-width: 1200px){
            width: 45%;
            display: flex;
            align-items: center;
        }
    }


    .text-cont{
        margin-top: 20px;
        border-radius: 10px;
        flex: 1 1 auto;

        @media screen and (min-width: 768px){
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .text-title{
        text-align: center;
        margin-bottom: 10px;
        font-size: 24px;
    }

    .text{
        font-size: 12px;
        text-indent: 20px;
        text-align: justify;
        background-color: ${p => p.theme.color.bg_color};
        box-shadow: rgba(0, 0, 2, 0.5) 0px 10px 10px 5px;
        border-radius: 15px;
        padding: 0 5px;

        &::first-letter {
            font-size: 24px;
            color: ${p => p.theme.color.main_color};
        }

        @media screen and (min-width: 768px){
            font-size: 16px;

            &::first-letter {
                font-size: 32px;
            }

        }
    }


    .order-one{
        order: 1;
    }
    .order-two{
        order: 2;
    }
    .order-three{
        order: 3;
    }

    @media screen and (min-width: 1200px){

        .order-one{
            order: 3;
        }
        .order-two{
            order: 2;
        }
        .order-three{
            order: 1;
        }
    }


    /* .left-animation-block{
        @media screen and (min-width: 1200px){
            opacity: 0;
            transform: translateX(-50%);
        }
    }

    .right-animation-block{
        @media screen and (min-width: 1200px){
            opacity: 0;
            transform: translateX(50%);
        }
    } */
`