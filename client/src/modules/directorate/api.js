import { gql } from 'apollo-boost';

export const CREATE_ITEM = gql`
    mutation CreateItem($title: String!) {
        DirectorateCreateOne(record: {title: $title}){
            record {
                _id
                title
            }
        }
    }
`;

export const GET_ITEM = gql`
    query GetItem($id: MongoID!) {
        DirectorateById(_id: $id) {
            _id
            title
        }
    }
`;

export const GET_ITEMS = gql`
    query GetItems {
        DirectorateMany {
            _id 
            title
        }
    }
`;

export const UPDATE_ITEM = gql`
    mutation UpdateItem($id: MongoID!, $title: String!) {
        DirectorateUpdateById(record: {_id: $id, title: $title}){
            record {
                _id
                title
            }
        }
    }
`;

export const DELETE_ITEM = gql`
    mutation RemoveItem($id: MongoID!) {
        DirectorateRemoveById(_id: $id) {
            record {
                _id
                title
            }
        }
    }
`;

export const createMutationOptions = {
    update(cache, { data: { DirectorateCreateOne: { record } } }) {
        addNewItemToCache(cache, record);
    }
};

export const deleteMutationOptions = {
    update(cache, { data: { DirectorateRemoveById: { record } } }) {
        removeItemFromCache(cache, record);
    }
};

const addNewItemToCache = (cache, itemToAdd) => {
    try {
        const { DirectorateMany: existingItems } = cache.readQuery({ query: GET_ITEMS });
        cache.writeQuery({
            query: GET_ITEMS,
            data: {
                DirectorateMany: [...existingItems, itemToAdd]
            }
        })
    } catch (err) { /* may not exist if user navigated directly to CREATE form */ }
}

const removeItemFromCache = (cache, itemToRemove) => {
    try {
        const { DirectorateMany: existingItems } = cache.readQuery({ query: GET_ITEMS });
        cache.writeQuery({
            query: GET_ITEMS,
            data: {
                DirectorateMany: existingItems.filter(c => c._id !== itemToRemove._id)
            }
        })
    } catch (err) { }
}
