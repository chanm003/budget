const { composeWithMongoose } = require('graphql-compose-mongoose/node8');

const Directorate = require('../directorate');
const {
    onCreatedMutation: onCreatedMutateUserFields,
    onUpdatedMutation: onUpdatedMutateUserFields,
    addRelation: addRelationToUser
} = require('./user');

const DirectorateTC = composeWithMongoose(Directorate, {});
defineRelationshipToUser();

function defineRelationshipToUser() {
    // fields that reference User model
    addRelationToUser(DirectorateTC, 'createdBy');
    addRelationToUser(DirectorateTC, 'updatedBy');

    // on Directorate created, mutate fields that reference User model
    onCreatedMutateUserFields(DirectorateTC, (doc, user) => {
        doc.createdBy = user._id;
        doc.updatedBy = user._id;
        return doc;
    });

    // on Directorate updated, mutate fields that reference User model
    onUpdatedMutateUserFields(DirectorateTC, (doc, user) => {
        doc.updatedBy = user._id;
        return doc;
    });
}

module.exports = {
    typeComposer: DirectorateTC
};