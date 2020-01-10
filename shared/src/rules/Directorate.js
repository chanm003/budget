const { roleNames } = require('../roleNames');

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
    Directorate: {
        Query: {
            DirectorateById: ac => (user, data) => {
                return ac.can(user.role)['readAny']('Directorate').granted;
            },
            DirectorateByIds: ac => (user, data) => {
                return ac.can(user.role)['readAny']('Directorate').granted;
            },
            DirectorateCount: ac => (user, data) => {
                return ac.can(user.role)['readAny']('Directorate').granted;
            },
            DirectorateMany: ac => (user, data) => {
                return ac.can(user.role)['readAny']('Directorate').granted;
            }
        },
        Mutation: {
            DirectorateCreateOne: ac => (user, data) => {
                return ac.can(user.role)['createOwn']('Directorate').granted;
            },
            DirectorateCreateMany: ac => (user, data) => {
                return ac.can(user.role)['createOwn']('Directorate').granted;
            },
            DirectorateRemoveById: ac => (user, data) => {
                return ac.can(user.role)['deleteOwn']('Directorate').granted;
            },
            DirectorateRemoveMany: ac => (user, data) => {
                return ac.can(user.role)['deleteOwn']('Directorate').granted;
            },
            DirectorateUpdateById: ac => (user, data) => {
                return ac.can(user.role)['updateOwn']('Directorate').granted;
            }
        }
    }
}

module.exports = {
    apiSecurity,
    grantsObject
}