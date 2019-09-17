const express = require('express');

const configureExpress = require('./config/express');
const setupGraphQL = require('./config/graphql');
const connectToDatabase = require('./config/database');
const configurePassport = require('./config/passport');

const app = express();

configureExpress(app);

configurePassport(app);

setupGraphQL(app);

connectToDatabase(
    () => app.listen(9000),
    err => console.log(err)
);