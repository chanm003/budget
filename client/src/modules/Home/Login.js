import React, { useState, useEffect } from 'react';
import {
    Button,
    Grid,
    Header,
    Message,
    Icon,
} from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import CacLoginButton from './CacLoginButton';
import { useAuth } from '../../context/auth';

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

    const onCacLoginDataReceived = (authData) => {
        login(authData);
        props.history.push(localStorage.getItem('redirectPath'));
    }

    const setRedirectPath = state => {
        const redirectPath = state && state.from ? state.from : '/';
        localStorage.setItem('redirectPath', redirectPath);
    }

    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                    Login
                </Header>
                <CacLoginButton onLoginButtonClicked={onCacLoginButtonClicked} onLoginSuccess={onCacLoginDataReceived} />
                <br />
                <Button color='black' fluid size="large" onClick={onGitLoginButtonClicked}>
                    <Icon name='github' /> Login with your Github
                </Button>

                {loginError && (
                    <Message error>
                        {loginError}
                    </Message>
                )}
            </Grid.Column>
        </Grid>
    );
}
