import React, { useEffect } from 'react';
import { Message } from 'semantic-ui-react';
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
        <Message info>
            <Message.Header>
                You have been successfully logged out
            </Message.Header>
            <p>You can now close your browser.</p>
        </Message>
    );
};

export default Logout;
