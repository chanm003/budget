import { shield, rule } from 'graphql-shield';
import mongoose from 'mongoose';
import { Rule } from 'graphql-shield/dist/rules';

const { apiSecurity, roleNames, serverErrors } = require('shared');

const generateRule = (hasPermissions: any) => {
    return rule()(async (parent, args, ctx, info) => {
        if (ctx.user.role === roleNames.VISITOR) {
            return new Error(serverErrors.INVALID_JWT);
        }

        if (!hasPermissions(ctx.user, args.record)) {
            return new Error('Unauthorized');
        }

        return true;
    });
};

const sfc: SFC = mongoose.modelNames().reduce(
    (combined, modelName) => {
        if (apiSecurity[modelName]) {
            combined.Query = {
                ...combined.Query,
                ...apiSecurity[modelName].Query,
            };
            combined.Mutation = {
                ...combined.Mutation,
                ...apiSecurity[modelName].Mutation,
            };
        }
        return combined;
    },
    {
        Query: {},
        Mutation: {},
    },
);

const operationTypes = ['Query', 'Mutation'];
operationTypes.forEach(operationType => {
    Object.keys(sfc[operationType]).forEach(operationName => {
        sfc[operationType][operationName] = generateRule(
            sfc[operationType][operationName],
        );
    });
});

interface SFC {
    [key: string]: {
        [key: string]: Rule;
    };
}

export const permissionsMiddleware = shield(sfc);
