import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Header } from 'semantic-ui-react';
import useForm from "react-hook-form";
import { validationSchemas } from 'shared';

import { useAuth } from './authContext';
import { handleValueChange, FormError } from '../../common/formHelpers';

export default function SignIn(props) {
    const [serverError, setServerError] = useState('');
    const { login } = useAuth();

    const {
        register,
        errors,
        handleSubmit,
        setValue,
        triggerValidation,
    } = useForm({ validationSchema: validationSchemas.loginSchema });

    useEffect(() => {
        register({ name: 'email' });
        register({ name: 'password' });
    }, [register]);

    const onFormFocus = () => {
        setServerError('');
    }

    const onSignInFormSubmit = async (formData) => {
        try {
            props.setRedirectPath();
            const response = await axios.post('/api/users/signin_emailPassword', formData)
            login(response.data);
            props.redirectUser();
        } catch (err) {
            let message = 'Network request failed';
            if (err.response.status === 401 && err.response.data && err.response.data.error) {
                message = err.response.data.error.message;
            } else {
                message = err.message;
            }
            setServerError(message);
        }
    }

    return (
        <React.Fragment>
            <Header as='h4'>Sign in with username and password</Header>
            <Form className="fluid" onSubmit={handleSubmit(onSignInFormSubmit)}>
                <Form.Input
                    name="email"
                    fluid
                    type="email"
                    label="Email"
                    placeholder="Email"
                    autoComplete="off"
                    onFocus={onFormFocus}
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
                    onFocus={onFormFocus}
                    onChange={handleValueChange(setValue, triggerValidation)}
                    error={errors.password ? true : false}
                />
                <Button type="submit">Sign in</Button>
            </Form>
            <br />
            <p>Need an account? <a onClick={props.hideForm}>Sign up</a></p>
            <FormError errors={errors} serverError={serverError} />
        </React.Fragment>
    )
}
