import React, { useState, useEffect } from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';
import axios from 'axios';

import { useStore } from '../../context';

export default (props) => {
    const [loginError, setLoginError] = useState('')
    const { auth: { user, login } } = useStore();

    useEffect(() => {
        if (user.role !== 'visitor') {
            props.history.push('/');
        }
    }, [user, props.history]);

    const onLoginButtonClicked = async () => {
        try {
            setLoginError('')
            const { data } = await axios.get('/api/login');
            login(data);
        } catch (err) {
            setLoginError(err.response.data);
        }
    }

    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                    Login
                </Header>
                <Segment className="attached">
                    <Form size="large">
                        <Button color="blue" fluid size="large" onClick={onLoginButtonClicked}>
                            Login with your CAC Card
                        </Button>
                    </Form>
                </Segment>
                {loginError && (
                    <Message attached='bottom' error>
                        {loginError}
                    </Message>
                )}
            </Grid.Column>
        </Grid>
    );
}
