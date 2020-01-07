const { shield, rule } = require('graphql-shield');
const { apiPermissions, roleNames, serverErrors } = require('shared');

const { models } = require('./database');

const sfc = {
    Query: {},
    Mutation: {}
}

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


Object.keys(models).forEach(modelName => {
    sfc.Query = { ...sfc.Query, ...apiPermissions[modelName].Query };
    sfc.Mutation = { ...sfc.Mutation, ...apiPermissions[modelName].Mutation };
})

Object.keys(sfc.Query).forEach(operationName => {
    sfc.Query[operationName] = generateRule(sfc.Query[operationName])
})
Object.keys(sfc.Mutation).forEach(operationName => {
    sfc.Mutation[operationName] = generateRule(sfc.Mutation[operationName])
})

const permissionsMiddleware = shield(sfc);

module.exports = {
    permissionsMiddleware
};