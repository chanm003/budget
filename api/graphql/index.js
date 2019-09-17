const graphqlHttp = require('express-graphql');

const graphQlSchema = require('./schema/index');
const graphQlResolvers = require('./resolvers/index');

module.exports = function (app) {
    app.use(
        '/graphql',
        graphqlHttp({
            schema: graphQlSchema,
            rootValue: graphQlResolvers,
            graphiql: true
        })
    );
}