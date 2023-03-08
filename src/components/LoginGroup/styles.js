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

export const InputBox = styled.div`
    border-bottom: 2px solid #F1F1E8;
    height: 47px;
    margin-bottom: 50px;
    position: relative;
    width: 70%;
`;

export const Input = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
    font-family: 'Nunito';
    font-style: normal;
    font-size: 22px;
    font-weight: 600;    
    border: none;
    border-bottom: 2px solid #F1F1E8;
    height: 47px;
    background-color: transparent;
    border: none;
    color: #fff;
    height: 100%;
    outline: none;
    padding: 0 6px;
    width: 100%;
`;

export const InputLabel = styled.label`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
    font-family: 'Nunito';
    font-style: normal;
    color: #F1F1E8;
    font-size: 22px;
    font-weight: 600;
    left: 5px;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: .5s;
`;

export const LoginButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    text-align: center;
    color: #14AE5C;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    width: 70%;
    height: 47px;
    background: #BFDCAE;
    border: 2px solid #14AE5C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
`;