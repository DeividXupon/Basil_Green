import styled from "styled-components";
import {corPrimaria, paddingHeight, paddingHeightMedia1000px, paddingHeightMedia550px } from 'Components/UI/variaveis'

export const BoxSobre = styled.section`
    background: ${corPrimaria};
    padding: 50px ${paddingHeight} 20px ${paddingHeight};

    @media (max-width: 1000px){
        padding: 50px ${paddingHeightMedia1000px} 20px ${paddingHeightMedia1000px};
    }

    @media (max-width: 550px){
        padding: 50px ${paddingHeightMedia550px} 20px ${paddingHeightMedia550px};
    }
`