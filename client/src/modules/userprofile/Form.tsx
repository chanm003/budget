import React, { useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { validationSchemas } from 'shared';

import { handleValueChange, FormError } from '../common/formHelpers';
import { UserUpdateMyProfileMutationVariables } from '../../generated/graphql';

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

    useEffect(() => {
        register({ name: 'firstName' });
        register({ name: 'lastName' });
        register({ name: 'email' });
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
                        name="firstName"
                        fluid
                        defaultValue={props.initialValues.firstName}
                        label="First Name"
                        placeholder="First Name"
                        autoComplete="off"
                        onChange={handleValueChange(
                            setValue,
                            triggerValidation,
                        )}
                        error={errors.firstName ? true : false}
                    />
                    <Form.Input
                        name="lastName"
                        fluid
                        defaultValue={props.initialValues.lastName}
                        label="Last Name"
                        placeholder="Last Name"
                        autoComplete="off"
                        onChange={handleValueChange(
                            setValue,
                            triggerValidation,
                        )}
                        error={errors.lastName ? true : false}
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input
                        name="email"
                        fluid
                        defaultValue={props.initialValues.email}
                        label="Email"
                        placeholder="Email"
                        autoComplete="off"
                        onChange={handleValueChange(
                            setValue,
                            triggerValidation,
                        )}
                        error={errors.email ? true : false}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            <FormError errors={errors} />
        </React.Fragment>
    );
};

export default CustomForm;
