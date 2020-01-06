import React from 'react'
import { Message } from 'semantic-ui-react';

export default function ErrorPage({ location: { state } }) {
    let header = 'Error occurred';
    let errorMessage = 'Something went wrong.  Please try again at a later time.'

    if (state) {
        const { message } = state;
        header = 'Error occurred';
        errorMessage = message;
    }

    return (
        <Message negative>
            <Message.Header>{header}</Message.Header>
            <p>{errorMessage}</p>
        </Message>
    )
}
