const { rule } = require('graphql-shield');
const { roleNames, serverErrors } = require('shared');

const generateRule = (operationName, collectionName, apiPermissions) => {
    return rule()(async (parent, args, ctx, info) => {
        if (ctx.user.role === roleNames.VISITOR) {
            return new Error(serverErrors.INVALID_JWT);
        }

        if (!apiPermissions[`${collectionName}${operationName}`](ctx.user, args.record)) {
            return new Error('Unauthorized');
        }

        return true;
    })
}

const generateRules = (collectionName, apiPermissions) => {
    return {
        Query: {
            [`${collectionName}ById`]: generateRule('ById', collectionName, apiPermissions),
            [`${collectionName}Many`]: generateRule('Many', collectionName, apiPermissions)
        },
        Mutation: {
            [`${collectionName}CreateOne`]: generateRule('CreateOne', collectionName, apiPermissions),
            [`${collectionName}RemoveById`]: generateRule('RemoveById', collectionName, apiPermissions),
            [`${collectionName}UpdateById`]: generateRule('UpdateById', collectionName, apiPermissions)
        }
    };
}

module.exports = {
    generateRules
}