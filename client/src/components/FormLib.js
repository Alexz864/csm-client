import {useState} from 'react';

// formik
import {useField} from 'formik';

// styled components
import {
    StyledTextInput,
    StyledLabel,
    StyledIcon,
    StyledEye,
    ErrorMsg
} from './Styles';

// eye for password
import {FiEyeOff, FiEye} from 'react-icons/fi';

export const TextInput = ({icon, ...props}) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);

    return(
        <div style={{position: "relative"}}>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            {props.type !== "password" &&
                <StyledTextInput
                    invalid={meta.touched && meta.error}
                    {...field}
                    {...props}
                />
            }

                {props.type === "password" && (
                    <StyledTextInput 
                        invalid={meta.touched && meta.error}
                        {...field}
                        {...props}
                        type={show ? "text" : "password"}
                    />
                )}

            <StyledIcon>{icon}</StyledIcon>
            {
                props.type === "password" &&
                <StyledEye onClick={() => setShow(!show)}>
                    {show && <FiEye />}
                    {!show && <FiEyeOff />}
                </StyledEye>
            }

            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ): (
                <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>
            )}
        </div>
    );
}