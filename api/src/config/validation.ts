import mongoose from 'mongoose';

const { validationSchemas } = require('shared');

const middleware = { Mutation: {} };
mongoose.modelNames().forEach(modelName => {
    if (validationSchemas[modelName]) {
        middleware.Mutation = {
            ...middleware.Mutation,
            ...validationSchemas[modelName].graphqlMutations,
        };
    }
});

export const validationMiddleware = middleware;
