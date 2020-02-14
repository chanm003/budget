import React from 'react';
import { Stack, TextField } from 'office-ui-fabric-react';
import { validationSchemas } from 'shared';

import { handleTextFieldChange } from '../common/formHelpers';
import BaseForm, {
    RenderFieldsFunc,
    RegisterFieldsFunc,
} from '../common/components/BaseForm/BaseForm';
import { UserUpdateMyProfileMutationVariables } from '../../generated/graphql';

const validationSchema =
    validationSchemas.User.yupSchemas.userprofileSchema;

export type FormData = UserUpdateMyProfileMutationVariables;

interface Props {
    initialValues: Partial<FormData>;
    onSubmit: (formData: FormData) => void;
}

const registerFields: RegisterFieldsFunc = ({ register }) => {
    register({ name: 'firstName' });
    register({ name: 'lastName' });
    register({ name: 'email' });
};

const renderFieldsFunc = (
    initialFormData: Partial<FormData>,
): RenderFieldsFunc => {
    return (formContextValues, formErrors) => {
        return (
            <Stack tokens={{ childrenGap: 10 }}>
                <Stack horizontal tokens={{ childrenGap: 20 }}>
                    <Stack.Item grow>
                        <TextField
                            name="firstName"
                            defaultValue={initialFormData.firstName}
                            label="First Name"
                            placeholder="First Name"
                            autoComplete="off"
                            onChange={handleTextFieldChange(
                                formContextValues,
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
                            defaultValue={initialFormData.lastName}
                            label="Last Name"
                            placeholder="Last Name"
                            autoComplete="off"
                            onChange={handleTextFieldChange(
                                formContextValues,
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
                            defaultValue={initialFormData.email}
                            label="Email"
                            placeholder="Email"
                            autoComplete="off"
                            onChange={handleTextFieldChange(
                                formContextValues,
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
        );
    };
};

const CustomForm: React.FC<Props> = ({ initialValues, onSubmit }) => {
    return (
        <BaseForm<FormData>
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            initialValues={initialValues}
            registerFields={registerFields}
            renderFields={renderFieldsFunc(initialValues)}
        />
    );
};

export default CustomForm;
