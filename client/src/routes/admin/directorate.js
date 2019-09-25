import List from '../../modules/admin/directorate/List';
import CreateOrEdit from '../../modules/admin/directorate/CreateOrEdit';

export const directorateList = {
  path: '/admin/directorates',
  component: List,
  exact: true,
  auth: false
}

export const directorateCreate = {
  path: '/admin/directorates/create',
  component: CreateOrEdit,
  auth: false
  //role: params.user.roles.admin
}

export const directorateEdit = {
  path: (id = ':id') => (`/admin/directorates/${id}/edit`),
  component: CreateOrEdit,
  auth: false
}
