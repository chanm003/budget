import React from 'react';
import { Stack, TextField } from 'office-ui-fabric-react';
import { validationSchemas } from 'shared';

import { handleTextFieldChange } from '../common/formHelpers';
import {
    ExpenditureTypeUpdateByIdMutationVariables as UpdateByIdMutationVariables,
    ExpenditureTypeCreateOneMutationVariables as CreateOneMutationVariables,
} from '../../generated/graphql';
import BaseForm, {
    RenderFieldsFunc,
    RegisterFieldsFunc,
} from '../common/components/BaseForm/BaseForm';

const validationSchema =
    validationSchemas.ExpenditureType.yupSchemas.defaultSchema;

export type FormData =
    | CreateOneMutationVariables
    | UpdateByIdMutationVariables;

interface Props {
    initialValues: Partial<FormData>;
    onSubmit: (formData: FormData) => void;
}

const registerFields: RegisterFieldsFunc = ({ register }) => {
    register({ name: 'title' });
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
                            name="title"
                            defaultValue={initialFormData.title}
                            label="Title"
                            placeholder="Title"
                            autoComplete="off"
                            onChange={handleTextFieldChange(
                                formContextValues,
                            )}
                            errorMessage={
                                formErrors.title
                                    ? formErrors.title.message
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
