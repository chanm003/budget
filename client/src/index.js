import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./modules/common/layout/App";
import { Router } from "react-router-dom";
import AppProviders from './AppProviders';
import browserHistory from './browserHistory';

ReactDOM.render(
  <AppProviders>
    <Router history={browserHistory}>
      <App />
    </Router>
  </AppProviders>,
  document.getElementById("root")
);