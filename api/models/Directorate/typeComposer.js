const { composeWithMongoose } = require('graphql-compose-mongoose/node8');

const Directorate = require('./model');
const { typeComposer: UserTC } = require('../User/typeComposer');
const { addReference } = require('../../config/schemaHelpers');

const DirectorateTC = composeWithMongoose(Directorate, {});

// two fields on Directorate are of type User
addReference([{ name: 'createdBy' }, { name: 'updatedBy' }], DirectorateTC, UserTC,
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
  typeComposer: DirectorateTC
};