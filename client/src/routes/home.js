import Home from '../modules/Home/Home';
import Login from '../modules/Home/Login';
import Logout from '../modules/Home/Logout';
import ErrorPage from '../modules/Home/Error';

// Home routes
export default {
    error: {
        path: '/error',
        component: ErrorPage,
        exact: true,
        auth: false
    },
    home: {
        path: '/',
        component: Home,
        exact: true,
        auth: false
    },
    login: {
        path: '/login',
        component: Login,
        exact: true,
        auth: false
    },
    logout: {
        path: '/logout',
        component: Logout,
        exact: true,
        auth: false
    },
}