const { composeWithMongoose } = require('graphql-compose-mongoose/node8');

const { typeComposer: UserTC } = require('../User/typeComposer');
const { addReference } = require('../../config/schemaHelpers');

const typeComposer = composeWithMongoose(require('./model'), {});

// two fields on this type that are related to type User
addReference([{ name: 'createdBy' }, { name: 'updatedBy' }], typeComposer, UserTC,
    {
        resolverNames: ['createOne', 'createMany'],
        resolve: (doc, ctx) => {
            doc.createdBy = ctx.user._id;
            doc.updatedBy = ctx.user._id;
            return doc;
        }
    },
    {
        resolverNames: ['updateById'],
        resolve: (doc, ctx) => {
            if (doc) {
                doc.updatedBy = ctx.user._id;
            }
            return doc;
        }
    }
);

module.exports = {
    typeComposer
};