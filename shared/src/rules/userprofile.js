const { roleNames } = require('../roleNames');
const resourceName = 'User';

const grantsObject = {
    [roleNames.VISITOR]: {
        User: {
            'read:any': ['*']
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
    UserById: ac => (user, data) => {
        return ac.can(user.role)['readAny'](resourceName).granted;
    },
    UserUpdateById: ac => (user, data) => {
        return ac.can(user.role)['updateOwn'](resourceName).granted;
    }
}

module.exports = {
    apiSecurity,
    grantsObject
}