import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ToastProvider } from 'react-toast-notifications'
import { client } from './apolloClient';
import { AuthProvider } from './context/auth';

export default function ({ children }) {
    return (
        <AuthProvider>
            <ToastProvider>
                <ApolloProvider client={client}>
                    {children}
                </ApolloProvider>
            </ToastProvider>
        </AuthProvider>
    );
}