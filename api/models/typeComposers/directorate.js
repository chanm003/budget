const { composeWithMongoose } = require('graphql-compose-mongoose/node8');

const Directorate = require('../directorate');
const { onCreatedMutation: onCreatedMutateUserFields, addRelation: addRelationToUser } = require('./user');

const DirectorateTC = composeWithMongoose(Directorate, {});

onCreatedMutateUserFields(DirectorateTC, (doc, user) => {
    doc.createdBy = user._id;
    return doc;
});

addRelationToUser(DirectorateTC, 'createdBy');

module.exports = {
    typeComposer: DirectorateTC
};