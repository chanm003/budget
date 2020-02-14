import React from 'react';
import { Message, InputOnChangeData } from 'semantic-ui-react';
import { FormContextValues } from 'react-hook-form/dist/contextTypes';

export type SetValueFunc = (
    name: string,
    value: any,
    shouldValidate?: boolean,
) => void | Promise<boolean>;

export type TriggerValidationFunc = (
    payload?: string | string[],
) => Promise<boolean>;

export const handleCheckboxChange = (
    setValue: SetValueFunc,
    triggerValidation: TriggerValidationFunc,
) => async (
    e: React.ChangeEvent<HTMLInputElement>,
    { name, checked }: InputOnChangeData,
) => {
    setValue(name, checked);
    await triggerValidation(name);
};

export const handleTextFieldChange = ({
    setValue,
    triggerValidation,
}: FormContextValues) => async (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string,
) => {
    const name = (event.target as HTMLInputElement).name;
    setValue(name, newValue);
    await triggerValidation(name);
};

export const handleValueChange = (
    setValue: SetValueFunc,
    triggerValidation: TriggerValidationFunc,
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
