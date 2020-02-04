import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { validationSchemas } from 'shared';

import {
    handleTextFieldChange,
    FormErrors,
} from '../common/formHelpers';
import { UserUpdateMyProfileMutationVariables } from '../../generated/graphql';
import {
    Stack,
    TextField,
    PrimaryButton,
} from 'office-ui-fabric-react';

export type FormData = UserUpdateMyProfileMutationVariables;

interface Props {
    initialValues: Partial<FormData>;
    onSubmit: (formData: FormData) => void;
}

const CustomForm: React.FC<Props> = props => {
    const {
        register,
        errors,
        handleSubmit,
        setValue,
        triggerValidation,
    } = useForm({
        validationSchema:
            validationSchemas.User.yupSchemas.userprofileSchema,
        defaultValues: props.initialValues,
    });

    const formErrors = errors as FormErrors;

    useEffect(() => {
        register({ name: 'firstName' });
        register({ name: 'lastName' });
        register({ name: 'email' });
    }, [register]);
    return (
        <React.Fragment>
            <form
                onSubmit={handleSubmit(data =>
                    props.onSubmit(data as FormData),
                )}
            >
                <Stack tokens={{ childrenGap: 10 }}>
                    <Stack horizontal tokens={{ childrenGap: 20 }}>
                        <Stack.Item grow>
                            <TextField
                                name="firstName"
                                defaultValue={
                                    props.initialValues.firstName
                                }
                                label="First Name"
                                placeholder="First Name"
                                autoComplete="off"
                                onChange={handleTextFieldChange(
                                    setValue,
                                    triggerValidation,
                                )}
                                errorMessage={
                                    formErrors.firstName
                                        ? formErrors.firstName.message
                                        : ''
                                }
                            />
                        </Stack.Item>
                        <Stack.Item grow>
                            <TextField
                                name="lastName"
                                defaultValue={
                                    props.initialValues.lastName
                                }
                                label="Last Name"
                                placeholder="Last Name"
                                autoComplete="off"
                                onChange={handleTextFieldChange(
                                    setValue,
                                    triggerValidation,
                                )}
                                errorMessage={
                                    formErrors.lastName
                                        ? formErrors.lastName.message
                                        : ''
                                }
                            />
                        </Stack.Item>
                    </Stack>
                    <Stack horizontal tokens={{ childrenGap: 20 }}>
                        <Stack.Item grow>
                            <TextField
                                name="email"
                                defaultValue={
                                    props.initialValues.email
                                }
                                label="Email"
                                placeholder="Email"
                                autoComplete="off"
                                onChange={handleTextFieldChange(
                                    setValue,
                                    triggerValidation,
                                )}
                                errorMessage={
                                    formErrors.email
                                        ? formErrors.email.message
                                        : ''
                                }
                            />
                        </Stack.Item>
                    </Stack>
                </Stack>
                <br />
                <PrimaryButton type="submit" text="Submit" />
            </form>
        </React.Fragment>
    );
};

export default CustomForm;
