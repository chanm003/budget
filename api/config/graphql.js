const { GraphQLServer } = require('graphql-yoga');
const bodyParser = require('body-parser');

const { models } = require('../config/database');
const graphQlSchema = require('../graphql/schema/index');
const graphQlResolvers = require('../graphql/resolvers/index');

const startOptions = {
    port: 9000,
    endpoint: '/graphql',
    playground: '/graphql'
}

const createServer = () => {
    const server = new GraphQLServer({
        typeDefs: graphQlSchema,
        resolvers: graphQlResolvers,
        context: request => {
            return {
                ...request,
                models,
            }
        }
    });

    server.express.use(bodyParser.urlencoded({ extended: false }));
    server.express.use(bodyParser.json());
    return server;
}

module.exports = {
    createServer,
    startOptions
}