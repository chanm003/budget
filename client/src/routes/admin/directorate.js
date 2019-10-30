import List from '../../modules/admin/directorate/List';
import CreateOrEdit from '../../modules/admin/directorate/CreateOrEdit';

export const directorateList = {
    path: '/admin/directorates',
    component: List,
    exact: true,
    auth: true,
    perform: 'directorates:list'
}

export const directorateCreate = {
    path: '/admin/directorates/create',
    component: CreateOrEdit,
    exact: true,
    auth: true,
    perform: 'directorates:create'
}

export const directorateEdit = {
    path: (id = ':id') => (`/admin/directorates/${id}/edit`),
    component: CreateOrEdit,
    exact: true,
    auth: true,
    perform: 'directorates:edit'
}