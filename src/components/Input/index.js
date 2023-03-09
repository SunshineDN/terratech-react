import {InputText, InputBox, InputLabel, ErrorContainer} from "./styles";
import {Controller} from "react-hook-form";

export const Input = ({label, type, onChange, control, name, errorMessage, ...rest}) => {
    return (
        <InputBox>

            <Controller render={({field: {onChange, onBlur, value, ref}}) => (
                <InputText {...rest} onChange={onChange}
                           onBlur={onBlur} value={value}
                           ref={ref} type={type}/>)}
                        control={control}
                        name={name}
            />
            <InputLabel >{label}</InputLabel>
            {errorMessage ? <ErrorContainer>{errorMessage}</ErrorContainer> : null}
        </InputBox>
    )
};
