import React, { useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { validationSchemas } from 'shared';

import { handleValueChange, FormError } from '../common/formHelpers';
import {
    DirectorateUpdateByIdMutationVariables,
    DirectorateCreateOneMutationVariables,
} from '../../generated/graphql';

const validationSchema =
    validationSchemas.Directorate.yupSchemas.defaultSchema;

export type FormData =
    | DirectorateCreateOneMutationVariables
    | DirectorateUpdateByIdMutationVariables;

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

    return (
        <React.Fragment>
            <Form
                className="attached fluid segment"
                onSubmit={handleSubmit(data =>
                    props.onSubmit(data as FormData),
                )}
            >
                <Form.Group widths="equal">
                    <Form.Input
                        name="title"
                        fluid
                        defaultValue={props.initialValues.title}
                        label="Title"
                        placeholder="Title"
                        autoComplete="off"
                        onChange={handleValueChange(
                            setValue,
                            triggerValidation,
                        )}
                        error={errors.title ? true : false}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            <FormError errors={errors} />
        </React.Fragment>
    );
};

export default CustomForm;
