import React from 'react';
import { Message, InputOnChangeData } from 'semantic-ui-react';

type setValueFunc = (
    name: string,
    value: any,
    shouldValidate?: boolean,
) => void | Promise<boolean>;

type triggerValidationFunc = (
    payload?: string | string[],
) => Promise<boolean>;

export const handleCheckboxChange = (
    setValue: setValueFunc,
    triggerValidation: triggerValidationFunc,
) => async (
    e: React.ChangeEvent<HTMLInputElement>,
    { name, checked }: InputOnChangeData,
) => {
    setValue(name, checked);
    await triggerValidation(name);
};

export const handleTextFieldChange = (
    setValue: setValueFunc,
    triggerValidation: triggerValidationFunc,
) => async (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string,
) => {
    const name = (event.target as HTMLInputElement).name;
    setValue(name, newValue);
    await triggerValidation(name);
};

export const handleValueChange = (
    setValue: setValueFunc,
    triggerValidation: triggerValidationFunc,
) => async (
    e: React.ChangeEvent<HTMLInputElement>,
    { name, value }: InputOnChangeData,
) => {
    setValue(name, value);
    await triggerValidation(name);
};

export interface FormErrors {
    [key: string]: {
        message: string;
        type: string;
    };
}

interface Props {
    errors: any;
    serverError?: string;
}

export const FormError: React.FC<Props> = ({
    errors,
    serverError,
}) => {
    return (
        <React.Fragment>
            {errors && Object.keys(errors).length > 0 && (
                <Message attached="bottom" error>
                    {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key].message}</p>
                    ))}
                </Message>
            )}
            {serverError && (
                <Message attached="bottom" error>
                    <p>{serverError}</p>
                </Message>
            )}
        </React.Fragment>
    );
};
