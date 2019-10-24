import Home from '../modules/Home/Home';
import Login from '../modules/Home/Login';
import UnauthorizedPage from '../modules/Home/403';

// Home routes
export default {
    403: {
        path: '/403',
        component: UnauthorizedPage,
        exact: true,
        perform: '403-page:visit'
    },
    home: {
        path: '/',
        component: Home,
        exact: true,
        perform: 'home-page:visit'
    },
    login: {
        path: '/login',
        component: Login,
        perform: 'login-page:visit'
    }
}