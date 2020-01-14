import React from 'react';
import { Message, InputOnChangeData } from 'semantic-ui-react';

type setValueFunc = (
    name: string,
    value: any,
    shouldValidate?: boolean,
) => void;

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

interface Props {
    errors: any;
    serverError: any;
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
