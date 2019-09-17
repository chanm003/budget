const graphqlHttp = require('express-graphql');

const graphQlSchema = require('../graphql/schema/index');
const graphQlResolvers = require('../graphql/resolvers/index');

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