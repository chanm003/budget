import List from '../../modules/admin/program/List';
import CreateOrEdit from '../../modules/admin/program/CreateOrEdit';

export const programList = {
  path: '/admin/programs',
  component: List,
  exact: true,
  auth: true
}

export const programCreate = {
  path: '/admin/programs/create',
  component: CreateOrEdit,
  auth: true
  //role: params.user.roles.admin
}

export const programEdit = {
  path: (id = ':id') => (`/admin/programs/${ id }/edit`),
  component: CreateOrEdit,
  auth: true
}

