import React from "react";
import {InputText, InputBox, InputLabel} from "./styles";

export const Input = ({label}) => {
    return (
        <InputBox>
            <InputText />
            <InputLabel>{label}</InputLabel>
        </InputBox>
    )
};
