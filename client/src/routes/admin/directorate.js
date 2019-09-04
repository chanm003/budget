import DirectorateList from '../../modules/admin/directorate/List';

// Admin crate routes
export const directorateList = {
  path: '/admin/directorates',
  component: DirectorateList,
  auth: true
}

/*
export const crateCreate = {
  path: '/admin/crate/create',
  component: CrateCreateOrEdit,
  auth: true,
  role: params.user.roles.admin
}
export const crateEdit = {
  path: (id = ':id') => (`/admin/crate/${ id }/edit`),
  component: CrateCreateOrEdit,
  auth: true,
  role: params.user.roles.admin
}
*/