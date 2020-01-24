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
        },
        Mutation: {
        }
    }
}

module.exports = {
    apiSecurity,
    grantsObject
}