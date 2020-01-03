const { roleNames } = require('../roleNames');
const resourceName = 'Directorate';

const grantsObject = {
    [roleNames.VISITOR]: {
        Directorate: {}
    },
    [roleNames.LOGGED_IN_USER]: {
        Directorate: {
            'read:any': ['*']
        }
    },
    [roleNames.ADMIN]: {
        Directorate: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        }
    }
};


// TODO: perform permissions based on data https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/
const apiSecurity = {
    DirectorateCreateOne: ac => (user, data) => {
        return ac.can(user.role)['createOwn'](resourceName).granted;
    },
    DirectorateMany: ac => (user, data) => {
        return ac.can(user.role)['readAny'](resourceName).granted;
    },
    DirectorateRemoveById: ac => (user, data) => {
        return ac.can(user.role)['deleteOwn'](resourceName).granted;
    },
    DirectorateUpdateById: ac => (user, data) => {
        return ac.can(user.role)['updateOwn'](resourceName).granted;
    }
}

module.exports = {
    apiSecurity,
    grantsObject
}