const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const connectToDatabase = require('./db/index');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(
    '/graphql',
    graphqlHttp({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true
    })
);

connectToDatabase(
    () => {
        app.listen(9000);
    },
    err => {
        console.log(err);
    }
);