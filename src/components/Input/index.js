import React from "react";
import {InputText, InputBox, InputLabel, Icon, ErrorMessage} from "./styles";


export const Input = ({ name, label, type, onChange, onBlur, value, error, icon }) => {

    return (
        <InputBox>
            {icon ? <Icon>{icon}</Icon> : null}
            <InputText name={name} value={value} onBlur={onBlur} type={type} onChange={onChange}/>
            {error ? <ErrorMessage>{error}</ErrorMessage> : null}
            <InputLabel >{label}</InputLabel>
        </InputBox>
    )
};
