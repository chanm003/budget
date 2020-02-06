import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons } from '@uifabric/icons';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

import App from './modules/core/layout/App';
import { Router } from 'react-router-dom';
import AppProviders from './AppProviders';
import browserHistory from './modules/core/browserHistory';

initializeIcons();

ReactDOM.render(
    <AppProviders>
        <Router history={browserHistory}>
            <Fabric id='app"'>
                <App />
            </Fabric>
        </Router>
    </AppProviders>,
    document.getElementById('root'),
);
