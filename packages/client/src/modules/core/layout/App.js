import React from 'react';
import { Route } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import { routes } from '../../../routes';
import { AuthRoute } from '../security/AuthRoute';

export default function App() {
  return (
    <AppLayout>
      {Object.values(routes).map((route, index) => (
        route.auth
          ? <AuthRoute {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path} />
          : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path} />
      ))}
    </AppLayout>
  );
}
