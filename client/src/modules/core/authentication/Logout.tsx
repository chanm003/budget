import React, { useEffect } from 'react';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react';

import { roleNames } from 'shared';

import { useAuth } from './authContext';

const Logout: React.FC = () => {
    const { user, logout } = useAuth();

    useEffect(() => {
        if (user.role !== roleNames.VISITOR) {
            logout();
        }
    });

    return (
        <MessageBar
            messageBarType={MessageBarType.info}
            isMultiline={false}
            dismissButtonAriaLabel="Close"
            truncated={true}
            overflowButtonAriaLabel="See more"
        >
            <b>You have been successfully logged out.</b>
            <p>You can now close your browser.</p>
        </MessageBar>
    );
};

export default Logout;
