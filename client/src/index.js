import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./modules/common/layout/App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ApolloProvider from './apolloSetup';
import { Store } from './context';

export const browserHistory = createBrowserHistory();

ReactDOM.render(
  <ApolloProvider>
    <Store>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Store>
  </ApolloProvider>,
  document.getElementById("root")
);