import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';

class Login extends React.Component {
    state = {
        redirectToReferer: false
    }

    render() {
        const { redirectedFrom } = this.props.location.state || { redirectedFrom: { pathname: '/' } };
        console.log(redirectedFrom);
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Login
                    </Header>
                    <Segment>
                        <Form size="large">
                            <Button color="blue" fluid size="large">
                                Login with your CAC Card
                            </Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Login;