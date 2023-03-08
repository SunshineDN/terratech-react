import React from 'react';
import {LoginButton} from "./styles"

export const Button = ({value, gBtn}) => {
    return (
        <LoginButton gBtn={gBtn}>{value}</LoginButton>
    );
}