const { composeWithMongoose } = require('graphql-compose-mongoose/node8');

const Directorate = require('../directorate');

const DirectorateTC = composeWithMongoose(Directorate, {});

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
});

module.exports = DirectorateTC;