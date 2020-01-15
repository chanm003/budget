import Login from '../modules/core/authentication/Login';
import Logout from '../modules/core/authentication/Logout';
import ErrorPage from '../modules/core/layout/Error';
import { RouteDictionary } from '../interfaces';

// Home routes
const routeDictionary: RouteDictionary = {
    error: {
        path: '/error',
        component: ErrorPage,
        exact: true,
        auth: false,
    },
    login: {
        path: '/login',
        component: Login,
        exact: true,
        auth: false,
    },
    logout: {
        path: '/logout',
        component: Logout,
        exact: true,
        auth: false,
    },
};

export default routeDictionary;
