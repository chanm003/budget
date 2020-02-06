import React from 'react';
import { Route } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import { routeConfig } from '../../../combineRoutes';
import { AuthRoute } from '../security/AuthRoute';

export default function App() {
    return (
        <AppLayout>
            {Object.values(routeConfig).map((route, index) => {
                const path =
                    typeof route.path === 'function'
                        ? route.path()
                        : route.path;
                const { auth, operationName, ...routeProps } = route;
                return auth ? (
                    <AuthRoute {...route} key={index} path={path} />
                ) : (
                    <Route {...routeProps} key={index} path={path} />
                );
            })}
        </AppLayout>
    );
}
