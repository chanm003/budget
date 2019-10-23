import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from "apollo-link-error";
import { useStore } from './context';

export default (props) => {
    const { common: { showErrorToast } } = useStore();

    const httpLink = createHttpLink({
        uri: '/graphql'
    });

    const authLink = setContext(() => {
        const token = localStorage.getItem('jwtToken');
        return {
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        };
    });

    const errorLink = onError(({ response, operation, graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.map(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                ),
            );

        if (networkError) console.log(`[Network error]: ${networkError}`);

        showErrorToast({ title: 'Error occured', description: 'Please try again at a later time' });
    });

    const client = new ApolloClient({
        link: ApolloLink.from([authLink, errorLink, httpLink]),
        cache: new InMemoryCache()
    });

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    );
}
