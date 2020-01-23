import List from '../modules/directorate/List';
import CreateOrEdit from '../modules/directorate/CreateOrEdit';
import { RouteDictionary } from '../interfaces';

const routeDictionary: RouteDictionary = {
    directorateList: {
        path: '/admin/directorates',
        component: List,
        exact: true,
        auth: true,
        operationName: 'DirectorateMany',
    },
    directorateCreate: {
        path: '/admin/directorates/create',
        component: CreateOrEdit,
        exact: true,
        auth: true,
        operationName: 'DirectorateCreateOne',
    },
    directorateEdit: {
        path: (id: string = ':id') =>
            `/admin/directorates/${id}/edit`,
        component: CreateOrEdit,
        exact: true,
        auth: true,
        operationName: 'DirectorateUpdateById',
    },
};

export default routeDictionary;
