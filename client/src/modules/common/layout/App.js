import React from 'react'
import { Route } from 'react-router'
import Layout from './Layout'
import { routes } from '../../../routes';

export default () => (
  <Layout>
    
    {Object.values(routes).map((route, index) => (
      route.auth
        ? <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
        : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
    ))}
    
  </Layout>
);
