import styled from "styled-components";
import fundoChef from "assets/fundoChef.png";
import { fontTilt, paddingHeight, paddingHeightMedia1000px, paddingHeightMedia550px } from "Components/UI/variaveis";

export const BoxChef = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px ${paddingHeight};

    background-image: url(${fundoChef});
    background-size: cover;
    background-repeat: no-repeat;

    .fotoChef{
        width: 40vw;
    }
    .palavChef{
        width: 40vw;
        font-size: 1.4em;
        font-family: ${fontTilt};
        margin-left: -100px;
        text-align: center;
    }

    @media (max-width: 1000px){
        padding: 100px ${paddingHeightMedia1000px};
        .palavChef{
            font-size: 1.2em;
        }
    }

    @media (max-width: 700px){
        flex-direction: column;
        padding: 100px ${paddingHeightMedia550px};
        .palavChef{
            width: 75vw;
            font-size: 1em;
            margin-left: 0px;
        }
    }
`