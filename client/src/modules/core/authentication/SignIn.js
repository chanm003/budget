import React, { useEffect } from 'react';

import { Form, Button, Header } from 'semantic-ui-react';
import useForm from "react-hook-form";
import * as Yup from "yup";
import { handleValueChange, FormError } from '../../common/formHelpers';

export default function SignIn(props) {
    const {
        register,
        errors,
        handleSubmit,
        setValue,
        triggerValidation,
    } = useForm({ validationSchema: loginSchema });

    useEffect(() => {
        register({ name: 'email' });
        register({ name: 'password' });
    }, [register]);

    return (
        <React.Fragment>
            <Header as='h4'>Sign in with username and password</Header>
            <Form className="fluid" onSubmit={handleSubmit(props.onSubmit)}>
                <Form.Input
                    name="email"
                    fluid
                    type="email"
                    label="Email"
                    placeholder="Email"
                    autoComplete="off"
                    onFocus={props.onFormFocus}
                    onChange={handleValueChange(setValue, triggerValidation)}
                    error={errors.email ? true : false}
                />
                <Form.Input
                    name="password"
                    fluid
                    type="password"
                    label="Password"
                    placeholder="Password"
                    autoComplete="off"
                    onFocus={props.onFormFocus}
                    onChange={handleValueChange(setValue, triggerValidation)}
                    error={errors.password ? true : false}
                />

                <Button type="submit">Sign in</Button>
            </Form>
            <br />
            <FormError errors={errors} />
        </React.Fragment>
    )
}

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .email('Email must be in correct format')
        .required('Email is required')
    ,
    password: Yup.string()
        .trim()
        .required('Password is required')
});