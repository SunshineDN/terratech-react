import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    background-color: #474F38;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 520px;
    border: 3px solid #BABABA;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    align-items: center;
    padding: 36px 0;
`;

export const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 46px;
    text-align: center;
    color: #F1F1E8;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 36px;
`;