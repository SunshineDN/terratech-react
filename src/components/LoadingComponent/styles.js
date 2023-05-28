import styled from "styled-components";
import loading from "../../assets/loading.svg"

export const LoadingContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
`

export const LoadingImg = styled.div`
    padding: 0;
    margin: 0;
    background-image: url(${loading});
    height: 15%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`
