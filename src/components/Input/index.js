import React, {useState} from "react";
import {InputText, InputBox, InputLabel} from "./styles";

export const Input = ({label, onChange, type}) => {
    const [value, setValue] = useState("")

    return (
        <InputBox>
            <InputText type={type} onChange={e => setValue(e.target.value())}/>
            <InputLabel >{label}</InputLabel>
        </InputBox>
    )
};
