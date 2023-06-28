import styled from "styled-components";
import { paddingHeight, font1, paddingHeightMedia1000px, corContraste, paddingHeightMedia550px } from "Components/UI/variaveis"

export const SectionFiltros = styled.section`
    display: flex;
    justify-content: space-between;
    height: 200px;
    align-items: end;

    .buscador{
        width: 100%;
    }

    .option{
        display: flex;
    }

    @media(max-width: 720px){
        padding: 0px ${paddingHeightMedia1000px};
    }

    @media(max-width: 550px){
        flex-direction: column;
        align-items: center;
        padding: 0px ${paddingHeightMedia550px};
        .option{
            justify-self: center;
            border-radius: 30px;
            margin: 15px 0px;
            z-index: 1;
        }
    }
`

export const BoxCardapio = styled.main`
    padding-top: 40px;
    padding: 50px ${paddingHeight} 0px ${paddingHeight};

    @media(max-width: 1000px){
        padding-top: 20px;
        padding: 40px ${paddingHeightMedia1000px} 0px ${paddingHeightMedia1000px};;
        margin-top: 0px;
    }

    @media(max-width: 720px){
        padding: 0px 0px;
        margin-top: 0px;
    }
`
export const Op = styled.div`
    padding: 5px;
    background-color: #79b88e;
    font-size: 16px;
    font-family: ${font1};

    &:hover{
        background-color: #89cea0;
    }

    @media(max-width: 900px){
        border-left: 1px solid ${corContraste};
        border-right: 1px solid ${corContraste};
    }
`