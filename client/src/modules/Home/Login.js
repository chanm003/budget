import React, { useState, useEffect, useRef } from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Icon,
} from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../../context/auth';

export default (props) => {
    const iframe = useRef(null);
    const [loginError, setLoginError] = useState('')
    const { user, login } = useAuth();
    const { state } = useLocation();
    const { protocol, hostname } = document.location;
    const cacURL = `${protocol}//${hostname}:7000`;

    useEffect(() => {
        if (user.role !== 'visitor') {
            props.history.push(localStorage.getItem('redirectPath'));
        }

        window.onmessage = function (evt) {
            if (evt.origin === cacURL) {
                login(evt.data);
                props.history.push(localStorage.getItem('redirectPath'));
            }
        }
    });

    const onGitLoginButtonClicked = async () => {
        setRedirectPath(state);
        document.location.href = '/api/users/github';
    }

    const onCacLoginButtonClicked = async () => {
        setRedirectPath(state);
        iframe.current.onload = function (a, b, c) {
            console.log(iframe.current)
        }
        iframe.current.src = cacURL;
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

                <Button color="blue" fluid size="large" onClick={onCacLoginButtonClicked}>
                    Login with your CAC Card
                </Button>
                <iframe ref={iframe} width="1000" style={{ display: 'none' }} />
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
