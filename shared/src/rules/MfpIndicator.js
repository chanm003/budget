const { roleNames } = require('../roleNames');

const grantsObject = {
    [roleNames.VISITOR]: {
        MfpIndicator: {}
    },
    [roleNames.LOGGED_IN_USER]: {
        MfpIndicator: {
            'read:any': ['*']
        }
    },
    [roleNames.ADMIN]: {
        MfpIndicator: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        }
    }
};

// TODO: perform permissions based on data https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/
const apiSecurity = {
    MfpIndicator: {
        Query: {
            MfpIndicatorById: ac => (user, data) => {
                return ac.can(user.role)['readAny']('MfpIndicator').granted;
            },
            MfpIndicatorMany: ac => (user, data) => {
                return ac.can(user.role)['readAny']('MfpIndicator').granted;
            }
        },
        Mutation: {
            MfpIndicatorCreateOne: ac => (user, data) => {
                return ac.can(user.role)['createOwn']('MfpIndicator').granted;
            },
            MfpIndicatorRemoveById: ac => (user, data) => {
                return ac.can(user.role)['deleteOwn']('MfpIndicator').granted;
            },
            MfpIndicatorUpdateById: ac => (user, data) => {
                return ac.can(user.role)['updateOwn']('MfpIndicator').granted;
            }
        }
    }
}

module.exports = {
    apiSecurity,
    grantsObject
}