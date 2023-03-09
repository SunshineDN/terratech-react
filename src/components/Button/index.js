import React from 'react';
import {LoginButton} from "./styles"

export const Button = ({value, type}) => {
    return (
        <LoginButton type={type}>{value}</LoginButton>
    );
}