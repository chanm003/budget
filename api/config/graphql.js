const { GraphQLServer } = require('graphql-yoga');
const jwt = require('jsonwebtoken');
const { roleNames } = require('shared');

const { jsonWebTokenSecret } = require('./keys');
const { configureExpress } = require('./express');
const { permissionsMiddleware } = require('./permissions');
const { validationMiddleware } = require('./validation');
const { generateSchema } = require('./schema');

const startOptions = {
    port: 9000,
    endpoint: '/graphql',
    playground: '/graphql'
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

const createServer = () => {
    const server = new GraphQLServer({
        middlewares: [permissionsMiddleware, validationMiddleware],
        schema: generateSchema(),
        context: ({ request: req }) => {
            return {
                req,
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