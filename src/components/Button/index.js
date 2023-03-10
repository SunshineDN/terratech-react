import React from 'react';
import {LoginButton} from "./styles"

export const Button = ({value, type, onClick}) => {
    return (
        <LoginButton type={type} onClick={onClick}>{value}</LoginButton>
    );
}