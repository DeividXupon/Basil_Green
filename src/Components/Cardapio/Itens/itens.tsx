import styled from "styled-components";

export const Mostruario = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;

    @media(max-width: 900px){
        height: 600px;
        width: 90%;
        overflow-y: scroll;
    }

    @media(max-width: 720px){
        overflow-y: auto;
        overflow-x: scroll;
        flex-wrap: nowrap;
        justify-content: stretch;
        height: 450px;
        align-items: center;
        width: 100%;
    }
`