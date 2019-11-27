import React from 'react'
import {
    Button,
    Icon,
} from 'semantic-ui-react';

export default function GitLoginButton(props) {
    const onGitLoginButtonClicked = async () => {
        props.setRedirectPath();
        document.location.href = '/api/users/github';
    }

    return (
        <Button color='black' fluid size="large" onClick={onGitLoginButtonClicked}>
            <Icon name='github' /> Continue with your Github
        </Button>
    )
}
