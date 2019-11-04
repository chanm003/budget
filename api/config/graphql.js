const { GraphQLServer } = require('graphql-yoga');

const jwt = require('jsonwebtoken');

const { models } = require('../config/database');
const graphQlSchema = require('../graphql/schema/index');
const graphQlResolvers = require('../graphql/resolvers/index');
const User = models.User;
const { isDevelopmentMode, jsonWebTokenSecret } = require('./keys');
const { configureExpress } = require('./express');

const startOptions = {
    port: 9000,
    endpoint: '/graphql',
    playground: '/graphql'
}

const verifyToken = (req) => {
    let currentUser = { role: 'visitor' };
    try {
        let authHeader = req.headers['authorization'];
        authHeader = authHeader && authHeader.replace('Bearer ', '')
        currentUser = jwt.verify(authHeader, jsonWebTokenSecret).user;
    } catch (e) {
        return currentUser;
    }
    return currentUser;
}

/*
const attemptToLoginUser = async function (req, res) {
    try {
        let user = null;
        const distinguishedName = req.headers['x-subject-dn'];
        if (distinguishedName) {
            // CERTIFICATE FOUND
            user = await User.mapToNewOrExistingUser({ distinguishedName });
        } else {
            // UNABLE TO FIND CERTIFICATE
            if (isDevelopmentMode) {
                user = await User.mapToRandomUser();
            } else {
                res.status(500).send('Unable to detect valid certificate.  Please token is inserted into the card reader.');
            }
        }

        const token = jwt.sign({ user }, jsonWebTokenSecret, { expiresIn: "5m" })

        res.json({
            user: {
                ...user._doc,
                id: user._id
            },
            token
        });
    } catch (err) {
        res.status(500).send(err.message)
    }
}
*/

const createServer = () => {
    const server = new GraphQLServer({
        typeDefs: graphQlSchema,
        resolvers: graphQlResolvers,
        context: ({ request: req }) => {
            return {
                req,
                models,
                user: verifyToken(req)
            }
        }
    });

    configureExpress(server.express);

    //server.express.get('/api/login', attemptToLoginUser);

    return server;
}

module.exports = {
    createServer,
    startOptions
}