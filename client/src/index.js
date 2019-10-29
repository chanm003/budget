import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./modules/common/layout/App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ApolloProvider from './apolloSetup';
import { AuthProvider } from './context/auth';

export const browserHistory = createBrowserHistory();

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider>
      <Router history={browserHistory}>
        <App />
      </Router>
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById("root")
);