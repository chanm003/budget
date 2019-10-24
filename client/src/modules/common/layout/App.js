import React from 'react';
import AppLayout from './AppLayout/AppLayout';
import { routes } from '../../../routes';
import { GuardedRoute } from '../../../security/GuardedRoute';

export default function App() {
  return (
    <AppLayout>
      {Object.values(routes).map((route, index) => (
        <GuardedRoute {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path} />
      ))}
    </AppLayout>
  );
}
