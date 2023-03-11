import React from "react";
import {InputText, InputBox, InputLabel} from "./styles";

export const Input = ({label, type, onChange}) => {

    return (
        <InputBox>
            <InputText type={type} onChange={onChange}/>
            <InputLabel >{label}</InputLabel>
        </InputBox>
    )
};
