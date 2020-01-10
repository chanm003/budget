const addToSchema = (collectionName, TC, schemaComposer) => {
    let query = {};
    query[`${collectionName}ById`] = TC.getResolver('findById');
    query[`${collectionName}ByIds`] = TC.getResolver('findByIds');
    query[`${collectionName}Count`] = TC.getResolver('count');
    query[`${collectionName}Many`] = TC.getResolver('findMany');
    schemaComposer.Query.addFields(query);
    let mutation = {};
    mutation[`${collectionName}CreateMany`] = TC.getResolver('createMany');
    mutation[`${collectionName}CreateOne`] = TC.getResolver('createOne');
    mutation[`${collectionName}RemoveById`] = TC.getResolver('removeById');
    mutation[`${collectionName}RemoveMany`] = TC.getResolver('removeMany');
    mutation[`${collectionName}UpdateById`] = TC.getResolver('updateById');
    schemaComposer.Mutation.addFields(mutation);
}

const addReference = (relatedFields, typeComposer, referencedTypeComposer, onCreating, onUpdating) => {
    relatedFields.forEach(relatedField => {
        if (relatedField.type === 'multiple') {
            typeComposer.addRelation(relatedField.name, {
                resolver: () => referencedTypeComposer.getResolver('findMany'),
                prepareArgs: {
                    filter: source => ({
                        _operators: {
                            _id: {
                                in: source[relatedField.name] || []
                            }
                        }
                    })
                },
                projection: { [relatedField.name]: true }
            });
        } else {
            typeComposer.addRelation(relatedField.name, {
                resolver: () => referencedTypeComposer.getResolver('findById'),
                prepareArgs: {
                    _id: source => source[relatedField.name] || null,
                },
                projection: { [relatedField.name]: true }
            });
        }
    });

    onCreating.resolverNames.forEach(createMethodName => {
        typeComposer.wrapResolverResolve(createMethodName, next => async rp => {
            rp.beforeRecordMutate = async (doc, { context }) => onCreating.resolve(doc, context);
            return next(rp);
        });
    });

    onUpdating.resolverNames.forEach(updateMethodName => {
        typeComposer.wrapResolverResolve(updateMethodName, next => async rp => {
            rp.beforeRecordMutate = async (doc, { context }) => onUpdating.resolve(doc, context);
            return next(rp);
        });
    })
}

module.exports = {
    addReference,
    addToSchema
}