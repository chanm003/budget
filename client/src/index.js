import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import App from './modules/common/layout/App';
import * as serviceWorker from './serviceWorker';

// Client App
const Client = () => (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  )

ReactDOM.render(<Client />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
