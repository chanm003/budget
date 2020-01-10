import Edit from '../modules/userprofile/Edit';

export default {
    userprofileEdit: {
        path: '/userprofile/edit',
        component: Edit,
        exact: true,
        auth: true,
        operationName: 'UserUpdateProfile'
    }
}
