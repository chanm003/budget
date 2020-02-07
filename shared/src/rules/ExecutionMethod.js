const { roleNames } = require('../roleNames');

const grantsObject = {
    [roleNames.VISITOR]: {
        ExecutionMethod: {}
    },
    [roleNames.LOGGED_IN_USER]: {
        ExecutionMethod: {
            'read:any': ['*']
        }
    },
    [roleNames.ADMIN]: {
        ExecutionMethod: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        }
    }
};

// TODO: perform permissions based on data https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/
const apiSecurity = {
    ExecutionMethod: {
        Query: {
            ExecutionMethodById: ac => (user, data) => {
                return ac.can(user.role)['readAny']('ExecutionMethod').granted;
            },
            ExecutionMethodMany: ac => (user, data) => {
                return ac.can(user.role)['readAny']('ExecutionMethod').granted;
            }
        },
        Mutation: {
            ExecutionMethodCreateOne: ac => (user, data) => {
                return ac.can(user.role)['createOwn']('ExecutionMethod').granted;
            },
            ExecutionMethodRemoveById: ac => (user, data) => {
                return ac.can(user.role)['deleteOwn']('ExecutionMethod').granted;
            },
            ExecutionMethodUpdateById: ac => (user, data) => {
                return ac.can(user.role)['updateOwn']('ExecutionMethod').granted;
            }
        }
    }
}

module.exports = {
    apiSecurity,
    grantsObject
}