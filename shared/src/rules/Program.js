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
        },
        Mutation: {
        }
    }
}

module.exports = {
    apiSecurity,
    grantsObject
}