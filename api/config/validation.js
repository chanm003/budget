const { validationSchemas } = require('shared');

const { models } = require('./database');

const validationMiddleware = { Mutation: {} };

Object.keys(models).forEach(modelName => {
    if (validationSchemas[modelName]) {
        validationMiddleware.Mutation = { ...validationMiddleware.Mutation, ...validationSchemas[modelName].graphqlMutations }
    }
});

module.exports = {
    validationMiddleware
}