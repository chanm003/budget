import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/core/layout/App';
import { Router } from 'react-router-dom';
import AppProviders from './AppProviders';
import browserHistory from './modules/core/browserHistory';
import shared from 'shared';

console.log(shared.sayHi());
ReactDOM.render(
    <AppProviders>
        <Router history={browserHistory}>
            <App />
        </Router>
    </AppProviders>,
    document.getElementById('root'),
);
