import styled from "styled-components";
import { corPrimaria, corSecundaria, font1, paddingHeight, paddingHeightMedia1000px } from "Components/UI/variaveis";

export const Menu = styled.header`
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 0 ${paddingHeight};
    background-color: ${corPrimaria};
    height: 50px;
    width: 100%;
    z-index: 10;
    box-shadow: 0px 2px 1px ${corPrimaria};

    @media(max-width: 1000px){
        padding: 0 ${paddingHeightMedia1000px};
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
            transition: 0.3s;
            width: 5px;
            height: 3px;
            border-radius: 4px;
            margin-top: 7px;
            background-color: ${corSecundaria};
            display: block;
        }

        &:hover::after{
            transition: 0.4s;
            width: 100%;
        }

        @media(max-width: 1000px){
            &{
                font-size: 1em;
            }
            &:hover::after{
                width: 5px;
            }
        }
    }

    @media(max-width: 700px){
        display: none;
    }
`

