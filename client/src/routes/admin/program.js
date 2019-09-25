import List from '../../modules/admin/program/List';
import CreateOrEdit from '../../modules/admin/program/CreateOrEdit';

export const programList = {
  path: '/admin/programs',
  component: List,
  exact: true,
  auth: false
}

export const programCreate = {
  path: '/admin/programs/create',
  component: CreateOrEdit,
  auth: false
  //role: params.user.roles.admin
}

export const programEdit = {
  path: (id = ':id') => (`/admin/programs/${id}/edit`),
  component: CreateOrEdit,
  auth: false
}

