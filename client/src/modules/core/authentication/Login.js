import React, { useState, useEffect } from 'react';
import {
    Segment,
    Grid,
    Divider,
} from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import { roleNames } from 'shared';

import CacLoginButton from './CacLoginButton';
import GitLoginButton from './GitLoginButton';
import { useAuth } from './authContext';
import SignIn from './SignIn';
import RegisterUser from './RegisterUser';

export default (props) => {
    const [visbleLocalStrategyForm, setVisbleLocalStrategyForm] = useState('SIGNIN');
    const { user } = useAuth();
    const { state } = useLocation();

    useEffect(() => {
        if (user.role !== roleNames.VISITOR) {
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
                    {visbleLocalStrategyForm === 'SIGNIN' && (
                        <SignIn
                            hideForm={() => setVisbleLocalStrategyForm('REGISTER')}
                            redirectUser={redirectUser}
                            setRedirectPath={setRedirectPath} />
                    )}
                    {visbleLocalStrategyForm === 'REGISTER' && (
                        <RegisterUser
                            hideForm={() => setVisbleLocalStrategyForm('SIGNIN')}
                            redirectUser={redirectUser}
                            setRedirectPath={setRedirectPath} />
                    )}
                </Grid.Column>
            </Grid>

            <Divider vertical>OR</Divider>
        </Segment>
    );
}