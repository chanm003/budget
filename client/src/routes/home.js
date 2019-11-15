import Home from '../modules/home/Home';

// Home routes
export default {
    home: {
        path: '/',
        component: Home,
        exact: true,
        auth: false
    },
}