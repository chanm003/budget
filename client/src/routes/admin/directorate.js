import DirectorateList from '../../modules/admin/directorate/List';
import DirectorateCreateOrEdit from '../../modules/admin/directorate/CreateOrEdit';

export const directorateList = {
  path: '/admin/directorates',
  component: DirectorateList,
  exact: true,
  auth: true
}

export const directorateCreate = {
  path: '/admin/directorates/create',
  component: DirectorateCreateOrEdit,
  auth: true
  //role: params.user.roles.admin
}

export const directorateEdit = {
  path: (id = ':id') => (`/admin/directorates/${ id }/edit`),
  component: DirectorateCreateOrEdit,
  auth: true
}
