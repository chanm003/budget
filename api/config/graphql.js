const { GraphQLServer } = require('graphql-yoga');
const jwt = require('jsonwebtoken');
const { schemaComposer } = require('graphql-compose');
const { roleNames } = require('shared');

const { models } = require('./database');
const { jsonWebTokenSecret } = require('./keys');
const { configureExpress } = require('./express');
const UserTC = require('../models/typeComposers/user').typeComposer;
const { addToSchema } = require('./schemaHelpers');
const { typeComposer: DirectorateTC, validators: DirectorateValidators } = require('../models/typeComposers/directorate');

const startOptions = {
    port: 9000,
    endpoint: '/graphql',
    playground: '/graphql'
}

const generateSchema = () => {
    addToSchema('User', UserTC, schemaComposer);
    addToSchema('Directorate', DirectorateTC, schemaComposer);
    return schemaComposer.buildSchema();
}

const verifyToken = (req) => {
    let currentUser = { role: roleNames.VISITOR };
    try {
        let authHeader = req.headers['authorization'];
        authHeader = authHeader && authHeader.replace('Bearer ', '')
        currentUser = jwt.verify(authHeader, jsonWebTokenSecret).user;
    } catch (e) {
        return currentUser;
    }
    return currentUser;
}

const validationMiddleware = {
    Mutation: {
        ...DirectorateValidators
    }
}

const createServer = () => {
    const server = new GraphQLServer({
        middlewares: [validationMiddleware],
        schema: generateSchema(),
        context: ({ request: req }) => {
            return {
                req,
                models,
                user: verifyToken(req)
            }
        }
    });

    configureExpress(server.express);

    return server;
}

module.exports = {
    createServer,
    startOptions
}