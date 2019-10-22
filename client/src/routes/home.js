import Home from '../modules/Home/Home';
import Login from '../modules/Home/Login';

// Home routes
export default {
    home: {
        path: '/',
        component: Home,
        exact: true,
        auth: false
    },
    login: {
        path: '/login',
        component: Login,
        auth: false
    }
}