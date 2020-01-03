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
    generateValidators
}