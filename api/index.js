const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const graphqlHttp = require('express-graphql');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

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

mongoose.connection.on("error", error => {
    console.log("Database connection error:", error);
});

mongoose.connection.once("open", () => {
    console.log("Connected to Database!");
});

app.use(
    '/graphql',
    graphqlHttp({
      schema: graphQlSchema,
      rootValue: graphQlResolvers,
      graphiql: true
    })
);

mongoose.connect('mongodb://mongodb:27017/budget', { useNewUrlParser: true })
    .then(() => {
        app.listen(9000);
    })
    .catch(err => {
        console.log(err);
    });