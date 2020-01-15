import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ToastProvider } from 'react-toast-notifications'
import { client } from './modules/core/apolloClient';
import { AuthProvider } from './modules/core/authentication/authContext';

import { toastSettings } from './modules/core/layout/toaster/settings';

export default function ({ children }) {
    return (
        <AuthProvider>
            <ToastProvider components={toastSettings.customRenderer.components}>
                <ApolloProvider client={client}>
                    {children}
                </ApolloProvider>
            </ToastProvider>
        </AuthProvider>
    );
}