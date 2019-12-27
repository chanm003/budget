const { composeWithMongoose } = require('graphql-compose-mongoose/node8');

const User = require('../user');

const UserTC = composeWithMongoose(User, {});

const onCreatedMutation = (typeComposer, mutate) => {
    typeComposer.wrapResolverResolve('createMany', next => async rp => {
        rp.beforeRecordMutate = async (doc, { context: { user } }) => mutate(doc, user);
        return next(rp);
    });

    typeComposer.wrapResolverResolve('createOne', next => async rp => {
        rp.beforeRecordMutate = async (doc, { context: { user } }) => mutate(doc, user);
        return next(rp);
    });
}

const addRelation = (typeComposer, fieldName) => {
    typeComposer.addRelation(fieldName, {
        resolver: () => UserTC.getResolver('findById'),
        prepareArgs: {
            _id: source => source[fieldName] || null,
        },
        projection: { [fieldName]: true }
    })
}


const onUpdatedMutation = (typeComposer, mutate) => {
    typeComposer.wrapResolverResolve('updateById', next => async rp => {
        rp.beforeRecordMutate = async (doc, { context: { user } }) => mutate(doc, user);
        return next(rp);
    });

    typeComposer.wrapResolverResolve('updateOne', next => async rp => {
        rp.beforeRecordMutate = async (doc, { context: { user } }) => mutate(doc, user);
        return next(rp);
    });

    typeComposer.wrapResolverResolve('updateMany', next => async rp => {
        rp.beforeRecordMutate = async (doc, { context: { user } }) => mutate(doc, user);
        return next(rp);
    });
}

module.exports = {
    typeComposer: UserTC,
    addRelation: addRelation,
    onCreatedMutation: onCreatedMutation,
    onUpdatedMutation: onUpdatedMutation
};