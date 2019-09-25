import React, { Component } from 'react';
import AppLayout from './AppLayout/AppLayout';
import { Route, Redirect } from 'react-router-dom';
import { routes } from '../../../routes';

const PrivateRoute = ({ component: Component, ...routeProperties }) => {
  console.log(routeProperties);
  return (
    <Route {...routeProperties} render={(props) => {
      const isAuthorized = false;
      return isAuthorized
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { redirectedFrom: props.location }
        }} />
    }} />
  );
}

class App extends Component {
  render() {
    return (
      <AppLayout>
        {Object.values(routes).map((route, index) => (
          route.auth
            ? <PrivateRoute {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path} />
            : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path} />
        ))}
      </AppLayout>
    );
  }
}

export default App;