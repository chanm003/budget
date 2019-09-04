import BudgetCategoryList from '../../modules/admin/budgetCategory/List';

// Admin crate routes
export const budgetCategoryList = {
  path: '/admin/budgetCategories',
  component: BudgetCategoryList,
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