import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Segment,
    Button,
    Grid,
    Divider,
    Message,
    Icon,
} from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import CacLoginButton from './CacLoginButton';
import { useAuth } from './authContext';
import SignIn from './SignIn';

export default (props) => {
    const [loginError, setLoginError] = useState('')
    const { user, login } = useAuth();
    const { state } = useLocation();

    useEffect(() => {
        if (user.role !== 'visitor') {
            props.history.push(localStorage.getItem('redirectPath'));
        }
    });

    const onGitLoginButtonClicked = async () => {
        setRedirectPath(state);
        document.location.href = '/api/users/github';
    }

    const onCacLoginButtonClicked = () => {
        setRedirectPath(state);
    }

    const onSignInFormSubmit = async (formData) => {
        try {
            setRedirectPath(state);
            const response = await axios.post('/api/users/signin_emailPassword', formData)
            login(response.data);
            props.history.push(localStorage.getItem('redirectPath'));
        } catch (err) {
            let message = 'Network request failed';
            if (err.response.status === 401) {
                message = 'Invalid username or password'
            } else {
                message = err.message;
            }
            setLoginError(message);
        }
    }

    const onCacLoginDataReceived = (authData) => {
        login(authData);
        props.history.push(localStorage.getItem('redirectPath'));
    }

    const setRedirectPath = state => {
        const redirectPath = state && state.from ? state.from : '/';
        localStorage.setItem('redirectPath', redirectPath);
    }

    return (
        <Segment basic>
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <CacLoginButton onLoginButtonClicked={onCacLoginButtonClicked} onLoginSuccess={onCacLoginDataReceived} />
                    <br />
                    <Button color='black' fluid size="large" onClick={onGitLoginButtonClicked}>
                        <Icon name='github' /> Continue with your Github
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <SignIn
                        onFormFocus={() => setLoginError('')}
                        onSubmit={onSignInFormSubmit} />

                    {loginError && (
                        <Message error>
                            {loginError}
                        </Message>
                    )}
                </Grid.Column>
            </Grid>

            <Divider vertical>OR</Divider>
        </Segment>
    );
}