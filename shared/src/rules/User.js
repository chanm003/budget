const { roleNames } = require('../roleNames');
const resourceName = 'User';

const grantsObject = {
    [roleNames.VISITOR]: {
        User: {
        }
    },
    [roleNames.LOGGED_IN_USER]: {
        User: {
            'read:any': ['*'],
            'update:any': ['*']
        }
    },
    [roleNames.ADMIN]: {
        User: {
            'read:any': ['*'],
            'update:any': ['*']
        }
    }
};


// TODO: perform permissions based on data https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/
const apiSecurity = {
    User: {
        Query: {
            UserById: ac => (user, data) => {
                return ac.can(user.role)['readAny'](resourceName).granted;
            },
            UserByIds: ac => (user, data) => {
                return ac.can(user.role)['readAny'](resourceName).granted;
            },
            UserCount: ac => (user, data) => {
                return ac.can(user.role)['readAny'](resourceName).granted;
            },
            UserMany: ac => (user, data) => {
                return ac.can(user.role)['readAny'](resourceName).granted;
            }
        },
        Mutation: {
            UserCreateOne: ac => (user, data) => {
                throw new Error('use /api/users/signup_emailPassword');
            },
            UserCreateMany: ac => (user, data) => {
                throw new Error('not implemented');
            },
            UserRemoveById: ac => (user, data) => {
                throw new Error('not implemented');
            },
            UserRemoveMany: ac => (user, data) => {
                throw new Error('not implemented');
            },
            UserUpdateById: ac => (user, data) => {
                throw new Error('use UserUpdateProfile instead');
            },
            UserUpdateProfile: ac => (user, data) => {
                return ac.can(user.role)['updateOwn'](resourceName).granted;
            }
        }
    }
}

module.exports = {
    apiSecurity,
    grantsObject
}