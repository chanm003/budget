import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
    Stack,
    TextField,
    PrimaryButton,
} from 'office-ui-fabric-react';
import { validationSchemas } from 'shared';

import {
    handleTextFieldChange,
    FormErrors,
} from '../common/formHelpers';
import {
    ExpenditureTypeUpdateByIdMutationVariables as UpdateByIdMutationVariables,
    ExpenditureTypeCreateOneMutationVariables as CreateOneMutationVariables,
} from '../../generated/graphql';

const validationSchema =
    validationSchemas.ExpenditureType.yupSchemas.defaultSchema;

export type FormData =
    | CreateOneMutationVariables
    | UpdateByIdMutationVariables;

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
        validationSchema,
        defaultValues: props.initialValues,
    });

    useEffect(() => {
        register({ name: 'title' });
    }, [register]);

    const formErrors = errors as FormErrors;

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
                                name="title"
                                defaultValue={
                                    props.initialValues.title
                                }
                                label="Title"
                                placeholder="Title"
                                autoComplete="off"
                                onChange={handleTextFieldChange(
                                    setValue,
                                    triggerValidation,
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
                <br />
                <PrimaryButton type="submit" text="Save" />
            </form>
        </React.Fragment>
    );
};

export default CustomForm;
