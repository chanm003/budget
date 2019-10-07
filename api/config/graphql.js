const { GraphQLServer } = require('graphql-yoga');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const { models } = require('../config/database');
const graphQlSchema = require('../graphql/schema/index');
const graphQlResolvers = require('../graphql/resolvers/index');
const User = models.User;
const { isDevelopmentMode, jsonWebTokenSecret } = require('../config/keys');

const startOptions = {
    port: 9000,
    endpoint: '/graphql',
    playground: '/graphql'
}

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
                res.status(500).send('Unable to detect valid certificate.  Please ensure CAC or SIPR token is inserted into reader');
            }
        }

        const token = jwt.sign({ user }, jsonWebTokenSecret, { expiresIn: "1m" })

        res.json({
            user,
            token
        });
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const createServer = () => {
    const server = new GraphQLServer({
        typeDefs: graphQlSchema,
        resolvers: graphQlResolvers,
        context: req => {
            return {
                req,
                models,
            }
        }
    });

    server.express.use(bodyParser.urlencoded({ extended: false }));
    server.express.use(bodyParser.json());

    server.express.get('/api/login', attemptToLoginUser);

    return server;
}

module.exports = {
    createServer,
    startOptions
}