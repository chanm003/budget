import List from '../modules/directorate/List';
import CreateOrEdit from '../modules/directorate/CreateOrEdit';

export default {
    directorateList: {
        path: '/admin/directorates',
        component: List,
        exact: true,
        auth: true,
        action: 'readAny',
        resource: 'directorate'
    },
    directorateCreate: {
        path: '/admin/directorates/create',
        component: CreateOrEdit,
        exact: true,
        auth: true,
        action: 'createOwn',
        resource: 'directorate'
    },
    directorateEdit: {
        path: (id = ':id') => (`/admin/directorates/${id}/edit`),
        component: CreateOrEdit,
        exact: true,
        auth: true,
        action: 'updateOwn',
        resource: 'directorate'
    }
}
