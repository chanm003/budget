const { roleNames } = require('../roleNames');

const grantsObject = {
    [roleNames.VISITOR]: {
        Program: {}
    },
    [roleNames.LOGGED_IN_USER]: {
        Program: {
            'read:any': ['*']
        }
    },
    [roleNames.ADMIN]: {
        Program: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        }
    }
};

// TODO: perform permissions based on data https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/
const apiSecurity = {
    Program: {
        Query: {
            ProgramById: ac => (user, data) => {
                return ac.can(user.role)['readAny']('Program').granted;
            },
            ProgramByIds: ac => (user, data) => {
                return ac.can(user.role)['readAny']('Program').granted;
            },
            ProgramCount: ac => (user, data) => {
                return ac.can(user.role)['readAny']('Program').granted;
            },
            ProgramMany: ac => (user, data) => {
                return ac.can(user.role)['readAny']('Program').granted;
            }
        },
        Mutation: {
            ProgramCreateOne: ac => (user, data) => {
                return ac.can(user.role)['createOwn']('Program').granted;
            },
            ProgramCreateMany: ac => (user, data) => {
                return ac.can(user.role)['createOwn']('Program').granted;
            },
            ProgramRemoveById: ac => (user, data) => {
                return ac.can(user.role)['deleteOwn']('Program').granted;
            },
            ProgramRemoveMany: ac => (user, data) => {
                return ac.can(user.role)['deleteOwn']('Program').granted;
            },
            ProgramUpdateById: ac => (user, data) => {
                return ac.can(user.role)['updateOwn']('Program').granted;
            }
        }
    }
}

module.exports = {
    apiSecurity,
    grantsObject
}