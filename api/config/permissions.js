const { shield } = require('graphql-shield');

const { securityRules: DirectorateSecurityRules } = require('../models/typeComposers/directorate');

const permissionsMiddleware = shield({
    Query: {
        ...DirectorateSecurityRules.Query
    },
    Mutation: {
        ...DirectorateSecurityRules.Mutation
    }
});

module.exports = {
    permissionsMiddleware
};