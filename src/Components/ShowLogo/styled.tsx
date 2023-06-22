import styled from "styled-components";

export const BoxLinks = styled.div`
    height: 60px;
    background-color: red;
`

export const BoxShow = styled.div`
    height: 40vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 30%;
    margin-top: -6%;
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
        margin-top: 2vw;
        width: 40%;
    }
`