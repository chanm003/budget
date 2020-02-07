import List from './List';
import CreateOrEdit from './CreateOrEdit';
import { RouteDictionary } from '../../interfaces';

const resourceName = 'MfpIndicator';
const basePath = '/admin/mfpindicators';

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
