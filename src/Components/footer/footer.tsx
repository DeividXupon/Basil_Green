import styled from "styled-components";
import { corContraste, font2 } from "Components/UI/variaveis"

export const BoxFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: ${corContraste};

    .link{
        width: 40px;
        height: 40px;
        margin: 0px 10px;
        color: black;
        text-decoration: none;
    }

    .assinatura{
        font-size: 1.3em;
        font-family: ${font2};
        text-align: center;

        @media(max-width: 550px) {
            font-size: 1em;
        }
    }
`