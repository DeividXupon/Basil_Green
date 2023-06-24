import styled from "styled-components";
import { corPrimaria, font1, corContraste } from "Components/UI/variaveis";

export const BoxFiltro = styled.div`
    display: flex;
    gap: 10px;

    @media(max-width: 900px){
        gap: 2px;
    }

    @media(max-width: 430px){
        justify-content: center;
    }
`

export const Opcao = styled.button<{$selecionado?: boolean}>`
    border: 1px solid ${(props) => props.$selecionado ? "black" : corPrimaria};;
    padding: 7px 20px;
    border-radius: 5px;
    background-color: ${(props) => props.$selecionado ? corContraste : corPrimaria};
    font-family: ${font1};
    font-size: 1em;
    color: ${props => props.$selecionado ? "#fff" : "#000"};

    &:hover{
        border-color: black;
    }

    @media(max-width: 900px){
        font-size: 0.8em;
        border-radius: 0px;
        padding: 7px 10px;
    }

`