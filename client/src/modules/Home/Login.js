import React, { useContext, useState } from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';
import axios from 'axios';

import { GlobalContext } from '../../context';

export default (props) => {
    const [loginError, setLoginError] = useState('')
    const context = useContext(GlobalContext);

    const onLoginButtonClicked = async () => {
        try {
            setLoginError('')
            const { data } = await axios.get('/api/login');
            context.login(data);
            props.history.push('/');
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
