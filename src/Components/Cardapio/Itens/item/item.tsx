import styled from "styled-components";
import { corPrimaria, corDeFundo, font2, corContraste, corSecundaria, font1 } from "Components/UI/variaveis"

export const ItemGrid = styled.div<{$img?: string}>`
    display: grid;
    width: 48%;
    height: 200px;
    background-color: ${corDeFundo};
    grid-template-columns: 140px 3fr;
    grid-template-rows: 140px 1fr;
    background-color: #d8d8d8;
    margin: 15px 0px;
    outline: 5px solid #d8d8d8;
    border-radius: 1%;
    grid-template-areas: "im pr" "vl tg";


    .imagem{
        background-image: url(${props => props.$img});
        background-size: cover;
        border-radius: 10px;
        grid-area: im;
    }
    .paragrafo{
        background-color: ${corPrimaria};
        height:130px;
        align-self: flex-end;
        border-radius: 0px 10px 0px 0px;
        border: 1px solid ${corContraste};
        border-bottom: none;
        border-left: none;
        grid-area: pr;
        display: flex;
        flex-direction: column;
        gap: 1.3vw;
        padding: 10px 0px 0px 10px;
        font-family: ${font2};
        .titulo{
            font-size: 1.3em;
            color: ${corContraste};
        }
    }
    .valor{
        text-align: center;
        font-family: ${font2};
        font-size: 1.6em;
        color: ${corSecundaria};

        background-color: ${corPrimaria};
        width: 90%;
        justify-self: end;
        padding: 11% 0%;
        
        border-radius: 0px 0px 0px 10px;
        border: 1px solid ${corContraste};
        border-top: none;
        border-right: none;
        grid-area: vl;
    }
    .tags{
        background-color: ${corPrimaria};
        border-radius: 0px 0px 10px 0px;
        border: 1px solid ${corContraste};
        border-top: none;
        border-left: none;
        grid-area: tg;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .tag{
            padding: 5px;
            min-width: 70px;
            border-radius: 3px;
            text-align: center;
            background-color: #4e924e;
            border: 1px solid ${corContraste};
            font-family: ${font1};
            color: white;
        }
    }

    @media(max-width: 900px){
        grid-template-columns: 140px 3fr 1fr;
        grid-template-rows: 3fr 1fr;
        grid-template-areas: "im pr vl" "im tg vl";
        width: 97%;
        height: 120px;
        outline: 2px solid ${corContraste};

        .imagem{
            border-radius: 5px 0px 0px 5px;
            border: none;
            grid-area: im;
            transform: scale(1.15);
            border-radius: 5px;
        }
        .paragrafo{
            height: auto;
            align-self: auto;
            border-radius: 0px;
            border: none;
            grid-area: pr;
            gap: 5px;
            padding: 3px 0px 0px 15px;
            .titulo{
                font-size: 1.2em;
                text-align: center;
            }
        }
        .valor{
            width: auto;
            justify-self: auto;
            border-radius: 0px 5px 0px 0px;
            border: none;
            grid-area: vl;

            font-size: 1.9em;

            padding: 30% 0%;
        }
        .tags{
            border-radius: 0px 0px 5px 0px;
            border: none;
            grid-area: tg;
            .tag{
                font-size: 0.8em;
                padding: 5px;
                min-width: 60px;
            }
        }
    }

    @media(max-width: 650px){
        grid-template-columns: 120px 120px;
        grid-template-rows: 120px 6fr 1fr;
        grid-template-areas: "im vl" "pr pr" "tg tg";
        border-radius: 2%;
        height: 350px;
        width: 260px;
        margin: 0px 15px;

        .imagem{
            transform: translate(-10px, -10px) scale(1.19);
            border-radius: 5px 5px 5px 5px;
            grid-area: im;
        }
        .paragrafo{
            grid-area: pr;
            align-content: center;
            padding: 30px 5px 0px 5px;
            gap: 20px;
        }
        .valor{
            grid-area: vl;
        }
        .tags{
            grid-area: tg;
            border-radius: 0px 0px 5px 5px;
        }
    }
`