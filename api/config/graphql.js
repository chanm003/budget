const { GraphQLServer } = require('graphql-yoga');
const { roleNames } = require('shared');

const { configureExpress } = require('./express');
const { permissionsMiddleware } = require('./permissions');
const { validationMiddleware } = require('./validation');
const { generateSchema } = require('./schema');
const { verifyToken } = require('./jwt');

const startOptions = {
    port: 9000,
    endpoint: '/graphql',
    playground: '/graphql'
}

const parseUserFromRequest = (req) => {
    let currentUser = { role: roleNames.VISITOR };
    try {
        let authHeader = req.headers['authorization'];
        authHeader = authHeader && authHeader.replace('Bearer ', '');
        currentUser = verifyToken(authHeader).user;
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
                user: parseUserFromRequest(req)
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