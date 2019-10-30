import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from "apollo-link-error";
import browserHistory from './browserHistory';

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
    if (graphQLErrors) {
        browserHistory.push("/error", {
            type: 'GRAPHQL',
            message: graphQLErrors.map(e => e.message)
        });
    }
    else if (networkError) {
        browserHistory.push("/error", {
            type: 'NETWORK',
            message: networkError.message
        });
    };
});

export const client = new ApolloClient({
    link: ApolloLink.from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache()
});