export const generateMutationOptions = (collectionName, api) => {
    return {
        CreateOne: {
            update(cache, { data: { [`${collectionName}CreateOne`]: { record } } }) {
                addNewItemToCache(collectionName, api, cache, record);
            }
        },
        RemoveById: {
            update(cache, { data: { [`${collectionName}RemoveById`]: { record } } }) {
                removeItemFromCache(collectionName, api, cache, record);
            }
        }
    }
}

export const generateResponseParsers = (collectionName, api) => {
    return {
        ById: (data) => {
            return data ? data[`${collectionName}ById`] : null;
        },
        CreateOne: (response) => {
            const { data: { [`${collectionName}CreateOne`]: { record } } } = response;
            return record;
        },
        Many: (data) => {
            return data ? data[`${collectionName}Many`] : [];
        },
        RemoveById: (response) => {
            const { data: { [`${collectionName}RemoveById`]: { record } } } = response;
            return record;
        },
        UpdateById: (response) => {
            const { data: { [`${collectionName}UpdateById`]: { record } } } = response;
            return record;
        }
    }
}

const addNewItemToCache = (collectionName, api, cache, itemToAdd) => {
    try {
        const { [`${collectionName}Many`]: existingItems } = cache.readQuery({ query: api.Query.Many });
        cache.writeQuery({
            query: api.Query.Many,
            data: {
                [`${collectionName}Many`]: [...existingItems, itemToAdd]
            }
        })
    } catch (err) { /* may not exist if user navigated directly to CREATE form */ }
}

const removeItemFromCache = (collectionName, api, cache, itemToRemove) => {
    try {
        const { [`${collectionName}Many`]: existingItems } = cache.readQuery({ query: api.Query.Many });
        cache.writeQuery({
            query: api.Query.Many,
            data: {
                [`${collectionName}Many`]: existingItems.filter(c => c._id !== itemToRemove._id)
            }
        })
    } catch (err) { }
}
