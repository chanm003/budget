import Home from './Home';
import { RouteDictionary } from '../../interfaces';

// Home routes
const routeDictionary: RouteDictionary = {
    home: {
        path: '/',
        component: Home,
        exact: true,
        auth: false,
    },
};

export default routeDictionary;
