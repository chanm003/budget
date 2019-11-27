import React from 'react';
import { Message } from 'semantic-ui-react';

export const handleCheckboxChange = (setValue, triggerValidation) => async (e, { name, checked }) => {
    setValue(name, checked);
    await triggerValidation({ name });
}

export const handleValueChange = (setValue, triggerValidation) => async (e, { name, value }) => {
    setValue(name, value);
    await triggerValidation({ name });
}

export const FormError = ({ errors, serverError }) => {
    return (
        <React.Fragment>
            {errors && Object.keys(errors).length > 0 && (
                <Message attached='bottom' error>
                    {Object.keys(errors).map(key => <p key={key}>{errors[key].message}</p>)}
                </Message>
            )}
            {serverError && (
                <Message attached='bottom' error>
                    <p>{serverError}</p>
                </Message>
            )}
        </React.Fragment>
    )
}