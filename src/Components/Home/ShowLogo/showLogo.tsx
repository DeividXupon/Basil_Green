import styled from "styled-components";
import { paddingHeight } from "Components/UI/variaveis";

export const BoxShow = styled.div`
    height: 38vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px ${paddingHeight};
`

export const LogoGrande = styled.img`
    width: 50vw;
    height: 44%;
    z-index: 1;

    @media(max-width: 700px){
        display: none;
    }
`
export const Prato = styled.img`
    background-size: cover;
    width: 45%;
    margin-top: -9%;
    animation: rodar 45s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    @keyframes rodar {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    @media(max-width: 700px){
        margin-top: 7vw;
        width: 50%;
    }
`