const { roleNames } = require('../roleNames');

const grantsObject = {
    [roleNames.VISITOR]: {
        ExpenditureType: {}
    },
    [roleNames.LOGGED_IN_USER]: {
        ExpenditureType: {
            'read:any': ['*']
        }
    },
    [roleNames.ADMIN]: {
        ExpenditureType: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        }
    }
};

// TODO: perform permissions based on data https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/
const apiSecurity = {
    ExpenditureType: {
        Query: {
            ExpenditureTypeById: ac => (user, data) => {
                return ac.can(user.role)['readAny']('ExpenditureType').granted;
            },
            ExpenditureTypeMany: ac => (user, data) => {
                return ac.can(user.role)['readAny']('ExpenditureType').granted;
            }
        },
        Mutation: {
            ExpenditureTypeCreateOne: ac => (user, data) => {
                return ac.can(user.role)['createOwn']('ExpenditureType').granted;
            },
            ExpenditureTypeRemoveById: ac => (user, data) => {
                return ac.can(user.role)['deleteOwn']('ExpenditureType').granted;
            },
            ExpenditureTypeUpdateById: ac => (user, data) => {
                return ac.can(user.role)['updateOwn']('ExpenditureType').granted;
            }
        }
    }
}

module.exports = {
    apiSecurity,
    grantsObject
}