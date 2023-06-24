import styled from "styled-components";
import { corPrimaria, corContraste } from "Components/UI/variaveis";

export const BoxBuscador = styled.div`
    margin: 25px 0px;
    border: 1px solid ${corContraste};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 0px 5px;
    border-radius: 20px;
    background-color: ${corPrimaria};
`

export const InputPricipal = styled.input`
    border: none;
    background-color: ${corPrimaria};
    height: 30px;
    width: 200px;
    margin-left: 5px;
    border-radius: 0px 20px 20px 0px;

    @media(max-width: 700px){
        height: 25px;
        width: 240px;
    }
`