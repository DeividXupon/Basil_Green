import { corContraste, corPrimaria, corSecundaria} from "Components/UI/variaveis";
import styled from "styled-components";

export const Foto = styled.div<{$img: string}>`
    min-width: 400px;
    height: 400px;
    background-image: url(${props => props.$img});
    background-size: cover;
`

export const CarrosselMain = styled.div`
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
    overflow-x: scroll;

    border-radius: 3px;
    display: flex;
    max-height: 400px;
    max-width: 400px;
    min-height: 400px;
    min-width: 400px;


    @media(max-width: 550px){
        max-height: 400px;
        max-width: 350px;
        min-height: 400px;
        min-width: 30px;
    }
`

export const BoxCarrossel = styled.div`
    position: relative;
    .boxImgs{
        display: flex;
        align-items: center;
        gap: 10vw;
        justify-content: center;
        
        @media(max-width: 1000px){
            gap: 3vw;
        }
        @media(max-width: 550px){
            gap: 0vw;
        }
    }

    .butCarro1, .butCarro2{
        border: 3px solid ${corPrimaria};
        background-color: ${corPrimaria};
        padding: 3px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 4px 0px black;
        position: relative;

        &:hover{
            border: 3px solid ${corContraste};
        }

        @media(max-width: 550px){
            border-radius: 0px;
            height: 400px;
        }

    }

    .listaEscolha{
        margin-top: 3vw;
        display: flex;
        justify-content: space-around;
    }

    @media(max-width: 550px){
            .butCarro1{
                box-shadow: none;
            }
            .butCarro2{
                box-shadow: none;
            }
    }
`
export const FotoBut = styled.a<{$img: string, $visualizado: boolean}>`
    border: 3px solid ${props => props.$visualizado ? corSecundaria : "black"};
    width: 100px;
    height: 50px;
    background-image: url(${props => props.$img});
    background-size: cover;
    background-position: center;
    border-radius: 8px;

    &:hover{
        border: 3px solid ${corSecundaria};
    }

    @media(max-width: 1000px){
        width: 60px;
    }

    @media(max-width: 550px){
        display: none;
    }
`
