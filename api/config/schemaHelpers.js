const addToSchema = (collectionName, TC, schemaComposer) => {
    let query = {};
    query[`${collectionName}ById`] = TC.getResolver('findById');
    query[`${collectionName}ByIds`] = TC.getResolver('findByIds');
    query[`${collectionName}Many`] = TC.getResolver('findMany');
    query[`${collectionName}Count`] = TC.getResolver('count');
    schemaComposer.Query.addFields(query);
    let mutation = {};
    mutation[`${collectionName}CreateOne`] = TC.getResolver('createOne');
    mutation[`${collectionName}CreateMany`] = TC.getResolver('createMany');
    mutation[`${collectionName}UpdateById`] = TC.getResolver('updateById');
    mutation[`${collectionName}RemoveById`] = TC.getResolver('removeById');
    mutation[`${collectionName}RemoveMany`] = TC.getResolver('removeMany');
    schemaComposer.Mutation.addFields(mutation);
}

const addReference = (relatedFields, typeComposer, referencedTypeComposer, onCreating, onUpdating) => {
    relatedFields.forEach(relatedField => {
        typeComposer.addRelation(relatedField.name, {
            resolver: () => referencedTypeComposer.getResolver('findById'),
            prepareArgs: {
                _id: source => source[relatedField.name] || null,
            },
            projection: { [relatedField.name]: true }
        })
    });

    ['createOne', 'createMany'].forEach(createMethodName => {
        typeComposer.wrapResolverResolve(createMethodName, next => async rp => {
            rp.beforeRecordMutate = async (doc, { context }) => onCreating(doc, context);
            return next(rp);
        });
    });

    ['updateById', 'updateOne', 'updateMany'].forEach(updateMethodName => {
        typeComposer.wrapResolverResolve(updateMethodName, next => async rp => {
            rp.beforeRecordMutate = async (doc, { context }) => onUpdating(doc, context);
            return next(rp);
        });
    })
}

const generateValidators = (collectionName, validationSchema) => {
    return {
        [`${collectionName}CreateOne`]: async (resolve, root, args, context, info) => {
            await validationSchema.validate(args.record);
            const result = await resolve(root, args, context, info)
            return result;
        },
        [`${collectionName}CreateMany`]: async (resolve, root, args, context, info) => {
            const validationErrors = [];

            // async/await does not work as expected with forEach, so use modern for loop
            for (const record of args.records) {
                try {
                    await validationSchema.validate(record);
                } catch (err) {
                    validationErrors.push(err);
                }
            }

            if (validationErrors.length) {
                throw new Error(validationErrors);
            }

            const result = await resolve(root, args, context, info)
            return result;
        },
        [`${collectionName}UpdateById`]: async (resolve, root, args, context, info) => {
            await validationSchema.validate(args.record);
            const result = await resolve(root, args, context, info)
            return result;
        }
    }
}

module.exports = {
    addReference,
    addToSchema,
    generateValidators
}