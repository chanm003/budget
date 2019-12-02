const { GraphQLServer } = require('graphql-yoga');

const jwt = require('jsonwebtoken');

const { models } = require('./database');
const { composeWithMongoose } = require('graphql-compose-mongoose/node8');
const { schemaComposer } = require('graphql-compose');
const { isDevelopmentMode, jsonWebTokenSecret } = require('./keys');
const { configureExpress } = require('./express');

const startOptions = {
    port: 9000,
    endpoint: '/graphql',
    playground: '/graphql'
}

const addToSchema = (collection, TC) => {
    let query = {};
    query[`${collection}ById`] = TC.getResolver('findById');
    query[`${collection}ByIds`] = TC.getResolver('findByIds');
    query[`${collection}One`] = TC.getResolver('findOne');
    query[`${collection}Many`] = TC.getResolver('findMany');
    query[`${collection}Count`] = TC.getResolver('count');
    schemaComposer.Query.addFields(query);
    let mutation = {};
    mutation[`${collection}CreateOne`] = TC.getResolver('createOne');
    mutation[`${collection}CreateMany`] = TC.getResolver('createMany');
    mutation[`${collection}UpdateById`] = TC.getResolver('updateById');
    mutation[`${collection}UpdateOne`] = TC.getResolver('updateOne');
    mutation[`${collection}UpdateMany`] = TC.getResolver('updateMany');
    mutation[`${collection}RemoveById`] = TC.getResolver('removeById');
    mutation[`${collection}RemoveOne`] = TC.getResolver('removeOne');
    mutation[`${collection}RemoveMany`] = TC.getResolver('removeMany');
    schemaComposer.Mutation.addFields(mutation);
}

const generateSchema = () => {
    const UserTC = composeWithMongoose(models.User, {});
    const DirectorateTC = composeWithMongoose(models.Directorate, {});

    DirectorateTC.wrapResolverResolve('createMany', next => async rp => {
        rp.beforeRecordMutate = async (doc, { context: { user } }) => {
            doc.createdBy = user._id || '5de4fab4024e060045b174ce';
            return doc;
        }
        return next(rp);
    });

    DirectorateTC.addRelation('createdBy', {
        resolver: () => UserTC.getResolver('findById'),
        prepareArgs: {
            _id: source => source.createdBy || null,
        },
        projection: { createdBy: true }
    })


    addToSchema('User', UserTC);
    addToSchema('Directorate', DirectorateTC);

    return schemaComposer.buildSchema();
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

const createServer = () => {
    const server = new GraphQLServer({
        schema: generateSchema(),
        context: ({ request: req }) => {
            return {
                req,
                models,
                user: verifyToken(req)
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