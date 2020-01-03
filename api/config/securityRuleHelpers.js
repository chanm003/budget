const { rule } = require('graphql-shield');

const generateRules = (collectionName, apiPermissions) => {
    return {
        Query: {
            [`${collectionName}Many`]: rule()(async (parent, args, ctx, info) => {
                return apiPermissions[`${collectionName}Many`](ctx.user, args.record);
            })
        },
        Mutation: {
            [`${collectionName}CreateOne`]: rule()(async (parent, args, ctx, info) => {
                return apiPermissions[`${collectionName}CreateOne`](ctx.user, args.record);
            }),
            [`${collectionName}UpdateById`]: rule()(async (parent, args, ctx, info) => {
                return apiPermissions[`${collectionName}UpdateById`](ctx.user, args.record);
            })
        }
    };
}

module.exports = {
    generateRules
}