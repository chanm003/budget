import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Button } from 'semantic-ui-react';
import useForm from "react-hook-form";

import { handleValueChange, FormError } from './formHelpers';

export default (props) => {
    const {
        register,
        errors,
        handleSubmit,
        setValue,
        triggerValidation,
    } = useForm({ validationSchema, defaultValues: props.initialValues });

    useEffect(() => {
        register({ name: "title" });
    }, [register]);

    return (
        <React.Fragment>
            <Form className="attached fluid segment" onSubmit={handleSubmit((data) => props.onSubmit(data))}>
                <Form.Group widths="equal">
                    <Form.Input
                        name="title"
                        fluid
                        defaultValue={props.initialValues.title}
                        label="Title"
                        placeholder="Title"
                        autoComplete="off"
                        onChange={handleValueChange(setValue, triggerValidation)}
                        error={errors.title ? true : false}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            <FormError errors={errors} />
        </React.Fragment>
    );
};

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .trim()
        .required('Title is required')
});
