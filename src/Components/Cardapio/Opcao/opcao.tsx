import styled from "styled-components";
import { font1, corPrimaria, corContraste } from "Components/UI/variaveis";

export const ButOption = styled.button<{$ativo?: boolean}>`
    border: none;
    padding: 0px;
    transition: 0.75s;
    margin: ${props => props.$ativo ? "0px 0px -130px 0px" : "0px"};
    z-index: 1;

    @media(max-width: 700px){
        margin: ${props => props.$ativo ? "0px 0px -135px 0px" : "0px"};
        transition: 0s;
    }
`

export const Press = styled.div<{$ordenado?: boolean}>`
    padding: 7px;
    background-color: ${props => props.$ordenado ? corContraste : corPrimaria};
    border-radius: 5px 5px 0px 0px;
    display: flex;
    justify-content: space-between;

    p{
        font-size: 1.2em;
        font-family: ${font1};
        color: ${props => props.$ordenado ? "#fff" : "#000"};

        @media(max-width: 900px){
            font-size: 1.1em;
        }
    }

    @media(max-width: 900px){
        padding: 4px 7px;
        border-radius: 0px;
        border: 1px solid ${corContraste};
    }

`
export const BoxOpcoes = styled.div<{$ativo?: boolean}>`
    width: 250px;
    height: ${props => props.$ativo ? "130px" : "0px"};
    background-color: #000;
    transition: 750ms;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    gap: 1px;

    @media(max-width: 700px){
        width: 180px;
        height: ${props => props.$ativo ? "auto" : "0px"};
    }
    @media(max-width: 550px){
        width: 130px;
    }
`

export const End = styled.div`
    width: 250px;
    height: 5px;
    background-color: ${corContraste};
    border-radius: 0px 0px 5px 5px;

    @media(max-width: 700px){
        width: 180px;
        border-radius: 0px;
    }
    @media(max-width: 550px){
        width: 130px;
    }
`
