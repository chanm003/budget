import List from '../modules/directorate/List';
import CreateOrEdit from '../modules/directorate/CreateOrEdit';

export default {
    directorateList: {
        path: '/admin/directorates',
        component: List,
        exact: true,
        auth: true,
        perform: 'directorates:list'
    },
    directorateCreate: {
        path: '/admin/directorates/create',
        component: CreateOrEdit,
        exact: true,
        auth: true,
        perform: 'directorates:create'
    },
    directorateEdit: {
        path: (id = ':id') => (`/admin/directorates/${id}/edit`),
        component: CreateOrEdit,
        exact: true,
        auth: true,
        perform: 'directorates:edit'
    }
}
