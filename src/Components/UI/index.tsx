import styled from "styled-components";

export const IconeRedeSocial = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 8px;
    transition: 300ms;
    z-index: 1;

    &:hover{
        transform: translateY(-6px) scale(1.2) ;
        box-shadow: -4px 4px 0px 1px #00000097;

        @media(max-width: 900px){
            transform: translateY(-4px) scale(1.05) ;
            box-shadow: -2px 2px 0px 1px #00000097;
        }
    }

    @media(max-width: 900px){
        width: 22px;
        height: 22px;
        border-radius: 3px;
    }
` 
