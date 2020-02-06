import List from '../modules/directorate/List';
import CreateOrEdit from '../modules/directorate/CreateOrEdit';
import { RouteDictionary } from '../interfaces';

const resourceName = 'Directorate';
const basePath = '/admin/directorates';

const routeDictionary: RouteDictionary = {
    [`${resourceName}Many`]: {
        path: basePath,
        component: List,
        exact: true,
        auth: true,
        operationName: `${resourceName}Many`,
    },
    [`${resourceName}CreateOne`]: {
        path: `${basePath}/create`,
        component: CreateOrEdit,
        exact: true,
        auth: true,
        operationName: `${resourceName}CreateOne`,
    },
    [`${resourceName}UpdateById`]: {
        path: (id: string = ':id') => `${basePath}/${id}/edit`,
        component: CreateOrEdit,
        exact: true,
        auth: true,
        operationName: `${resourceName}UpdateById`,
    },
};

export default routeDictionary;
