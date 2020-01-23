import React from 'react';
import { useLocation } from 'react-router-dom';
import { Message } from 'semantic-ui-react';

const ErrorPage: React.FC = () => {
    const { state } = useLocation();
    let header = 'Error occurred';
    let errorMessage =
        'Something went wrong.  Please try again at a later time.';

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
    );
};

export default ErrorPage;
