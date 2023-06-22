import styled from "styled-components";
import { corPrimaria, corSecundaria, font1 } from "Components/UI/variaveis";

export const Menu = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    background-color: ${corPrimaria};
    height: 50px;

    @media(max-width: 1000px){
        padding: 0 7vw;
    }

    @media(max-width: 700px){
        justify-content: center;
    }
`

export const NavegacaoHeader = styled.nav`
    display: flex;
    gap: 10px;

    a{
        text-decoration: none;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: black;
        padding: 16px 10px 0px 10px;
        font-size: 1.15em;
        font-weight: 600;
        font-family: ${font1};

        &::after{
            content: "";
            transition: 0.4s;
            width: 5px;
            height: 3px;
            border-radius: 4px;
            margin-top: 7px;
            background-color: ${corSecundaria};
            display: block;
        }

        &:hover::after{
            transition: 0.7s;
            width: 100%;
        }

        @media(max-width: 1000px){
            &:hover::after{
                width: 5px;
            }
        }
    }

    @media(max-width: 700px){
        display: none;
    }
`

