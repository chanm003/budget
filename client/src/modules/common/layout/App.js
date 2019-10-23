import React from 'react';
import AppLayout from './AppLayout/AppLayout';
import { Route } from 'react-router-dom';
import { routes } from '../../../routes';

export default function App() {
  return (
    <AppLayout>
      {Object.values(routes).map((route, index) => (
        route.auth
          ? <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path} />
          : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path} />
      ))}
    </AppLayout>
  );
}
