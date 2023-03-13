import React from "react";
import {InputText, InputBox, InputLabel, Icon} from "./styles";

export const Input = ({label, type, onChange, icon}) => {

    return (
        <InputBox>
            {icon ? <Icon>{icon}</Icon> : null}
            <InputText type={type} onChange={onChange}/>
            <InputLabel >{label}</InputLabel>
        </InputBox>
    )
};
