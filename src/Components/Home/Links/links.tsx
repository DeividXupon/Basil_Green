import styled from "styled-components";
import { corPrimaria } from "Components/UI/variaveis"

export const BoxLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 70px;
    border-radius: 40px;
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    background-color: ${corPrimaria};

    @media(max-width: 900px){
        height: 30px;
        width: 130px;
        gap: 10px;
    }
`