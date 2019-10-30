import { gql } from 'apollo-boost';

export const CREATE_ITEM = gql`
    mutation CreateItem($title: String!) {
        createDirectorate(input: {title: $title }) {
            id
            title
        }
    }
`;

export const GET_ITEM = gql`
    query GetItem($id: ID!) {
        directorate(id: $id) {
            id
            title
        }
    }
`;

export const GET_ITEMS = gql`
    {
        directoratessss {
            id 
            title
        }
    }
`;

export const UPDATE_ITEM = gql`
    mutation UpdateItem($id: ID!, $title: String!) {
        updateDirectorate(id: $id, input: {title: $title }) {
            id
            title
        }
    }
`;

export const DELETE_ITEM = gql`
    mutation RemoveItem($id: ID!) {
        removeDirectorates(id: $id) {
            id
            title
        }
    }
`;

export const createMutationOptions = {
    update(cache, { data: { createDirectorate: createdItem } }) {
        addNewItemToCache(cache, createdItem);
    }
};

export const deleteMutationOptions = {
    update(cache, { data: { removeDirectorate: deletedItem } }) {
        removeItemFromCache(cache, deletedItem);
    }
};

const addNewItemToCache = (cache, itemToAdd) => {
    try {
        const { directorates: existingItems } = cache.readQuery({ query: GET_ITEMS });
        cache.writeQuery({
            query: GET_ITEMS,
            data: {
                directorates: [...existingItems, itemToAdd]
            }
        })
    } catch (err) { /* may not exist if user navigated directly to CREATE form */ }
}

const removeItemFromCache = (cache, itemToRemove) => {
    try {
        const { directorates: existingItems } = cache.readQuery({ query: GET_ITEMS });
        cache.writeQuery({
            query: GET_ITEMS,
            data: {
                directorates: existingItems.filter(c => c.id !== itemToRemove.id)
            }
        })
    } catch (err) { }
}
