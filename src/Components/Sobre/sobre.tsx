import styled from "styled-components";
import {paddingHeight, paddingHeightMedia1000px, paddingHeightMedia550px } from 'Components/UI/variaveis'

export const BoxSobre = styled.section`
    padding: 150px ${paddingHeight} 80px ${paddingHeight};

    @media (max-width: 1000px){
        padding: 100px ${paddingHeightMedia1000px} 80px ${paddingHeightMedia1000px};
    }

    @media (max-width: 550px){
        padding: 100px ${paddingHeightMedia550px} 80px ${paddingHeightMedia550px};
    }
`