import { corSecundaria, font1, font2 } from "Components/UI/variaveis";
import styled from "styled-components";

export const TextoSobreBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 40px 0px ;

    .but{
        width: 250px;
        padding: 10px;
        margin-top: 25px;
        font-size: 1.5em;
        align-self: center;
        border: none;
        background: ${corSecundaria};
        border-radius: 30px;
        font-family: ${font1};

        @media(max-width: 720px){
            width: 170px;
            font-size: 1.2em;
        }
    }

`

export const Paragra = styled.p<{$aberto: boolean}>`
    font-family: ${font2};
    padding: 30px 50px;
    font-size: 1.3em;
    text-align: justify;
    height: ${props => props.$aberto ? "auto" : "360px"};
    overflow: hidden;

    i{
        color: ${corSecundaria};
    }

    @media(max-width: 1000px){
        padding: 30px 20px;
        font-size: 1.2em;
    }

    @media(max-width: 720px){
        height: ${props => props.$aberto ? "auto" : "300px"};
        text-align: center;
        padding: 30px 0px;
        font-size: 1em;
    }
`