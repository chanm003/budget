import Home from '../modules/Home/Home';
import Login from '../modules/Home/Login';
import Logout from '../modules/Home/Logout';
import UnauthorizedPage from '../modules/Home/403';

// Home routes
export default {
    403: {
        path: '/403',
        component: UnauthorizedPage,
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