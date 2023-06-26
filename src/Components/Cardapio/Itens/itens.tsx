import styled from "styled-components";

export const Mostruario = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media(max-width: 650px){
        overflow-x: scroll;
        flex-wrap: nowrap;
        justify-content: stretch;
        height: 450px;
        align-items: center;
    }
`