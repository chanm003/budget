import React, { useEffect } from 'react'
import { Message } from 'semantic-ui-react';

import { useStore } from '../../context';

export default function Logout(props) {
    const { auth: { user, logout } } = useStore();

    useEffect(() => {
        if (user.role !== 'visitor') {
            logout();
        }
    });

    return (
        <Message info>
            <Message.Header>You have been successfully logged out</Message.Header>
            <p>You can now close your browser.</p>
        </Message>
    )
}
