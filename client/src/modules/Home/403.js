import React from 'react'
import { Message } from 'semantic-ui-react';

export default function UnauthorizedPage() {
    return (
        <Message negative>
            <Message.Header>Unauthorized Access</Message.Header>
            <p>We're sorry, you do not have sufficient permissions to view this page</p>
        </Message>
    )
}
