const { composeWithMongoose } = require('graphql-compose-mongoose/node8');

const User = require('../user');

const UserTC = composeWithMongoose(User, {});

module.exports = {
    typeComposer: UserTC
};