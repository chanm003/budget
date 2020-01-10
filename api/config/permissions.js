const { shield, rule } = require('graphql-shield');
const { apiSecurity, roleNames, serverErrors } = require('shared');

const { models } = require('./database');

const generateRule = (hasPermissions) => {
    return rule()(async (parent, args, ctx, info) => {
        if (ctx.user.role === roleNames.VISITOR) {
            return new Error(serverErrors.INVALID_JWT);
        }

        if (!hasPermissions(ctx.user, args.record)) {
            return new Error('Unauthorized');
        }

        return true;
    })
}

const sfc = Object.keys(models).reduce(
    (combined, modelName) => {
        if (apiSecurity[modelName]) {
            combined.Query = { ...combined.Query, ...apiSecurity[modelName].Query };
            combined.Mutation = { ...combined.Mutation, ...apiSecurity[modelName].Mutation };
        }
        return combined;
    },
    {
        Query: {},
        Mutation: {}
    })

const operationTypes = ['Query', 'Mutation'];
operationTypes.forEach(operationType => {
    Object.keys(sfc[operationType]).forEach(operationName => {
        sfc[operationType][operationName] = generateRule(sfc[operationType][operationName]);
    });
})

const permissionsMiddleware = shield(sfc);

module.exports = {
    permissionsMiddleware
};