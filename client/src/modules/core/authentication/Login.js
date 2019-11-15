import React, { useState, useEffect } from 'react';
import {
    Segment,
    Grid,
    Divider,
} from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import CacLoginButton from './CacLoginButton';
import GitLoginButton from './GitLoginButton';
import { useAuth } from './authContext';
import SignIn from './SignIn';

export default (props) => {
    const { user } = useAuth();
    const { state } = useLocation();

    useEffect(() => {
        if (user.role !== 'visitor') {
            props.history.push(localStorage.getItem('redirectPath'));
        }
    });

    const setRedirectPath = () => {
        const redirectPath = state && state.from ? state.from : '/';
        localStorage.setItem('redirectPath', redirectPath);
    }

    const redirectUser = () => {
        props.history.push(localStorage.getItem('redirectPath'));
    }

    return (
        <Segment basic>
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <CacLoginButton
                        redirectUser={redirectUser}
                        setRedirectPath={setRedirectPath} />
                    <br />
                    <GitLoginButton
                        setRedirectPath={setRedirectPath} />
                </Grid.Column>
                <Grid.Column>
                    <SignIn
                        redirectUser={redirectUser}
                        setRedirectPath={setRedirectPath} />
                </Grid.Column>
            </Grid>

            <Divider vertical>OR</Divider>
        </Segment>
    );
}