import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import Can from './Can';
import { useAuth, hasValidToken } from '../authentication/authContext';

export const AuthRoute = ({ component: Component, roles, ...rest }) => {
    const { perform } = rest;
    const { user, logout } = useAuth();
    const { pathname } = useLocation();

    if (user.role !== 'visitor' && !hasValidToken()) {
        logout();
    }

    return (
        <Route {...rest} render={props => {
            return <Can
                role={user.role}
                perform={perform}
                yes={() => {
                    // render component to user
                    return <Component {...props} />;
                }}
                no={() => {
                    if (user.role === 'visitor') {
                        return <Redirect to={{ pathname: "/login", state: { from: pathname } }} />
                    } else {
                        return <Redirect to={{ pathname: "/error", state: { type: 'UNAUTHORIZED', message: `We're sorry, you do not have sufficient permissions to view this page` } }} />;
                    }
                }}
            />
        }} />
    );
}