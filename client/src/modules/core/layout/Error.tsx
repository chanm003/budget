import React from 'react';
import { useLocation } from 'react-router-dom';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react';

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
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
            truncated={true}
            overflowButtonAriaLabel="See more"
        >
            <b>{header}</b>
            <p>{errorMessage}</p>
        </MessageBar>
    );
};

export default ErrorPage;
