const express = require('express');
const bodyParser = require('body-parser');
const setupGraphQL = require('./graphql/index');
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

setupGraphQL(app);

connectToDatabase(
    () => {
        app.listen(9000);
    },
    err => {
        console.log(err);
    }
);