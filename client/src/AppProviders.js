import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ToastProvider } from 'react-toast-notifications'
import { client } from './apolloClient';
import { AuthProvider } from './context/auth';

import { toastSettings } from './modules/common/layout/toaster/settings';

export default function ({ children }) {
    return (
        <AuthProvider>
            <ToastProvider components={toastSettings.components}>
                <ApolloProvider client={client}>
                    {children}
                </ApolloProvider>
            </ToastProvider>
        </AuthProvider>
    );
}