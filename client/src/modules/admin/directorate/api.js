import { gql } from 'apollo-boost';

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
        directorates {
            id 
            title
        }
    }
`;

export const DELETE_ITEM = gql`
    mutation RemoveItem($id: ID!) {
        removeDirectorate(id: $id) {
            id
            title
        }
    }
`;

export const deleteMutationOptions = {
    update(cache, { data: { removeDirectorate: deletedItem } }) {
        const { directorates: existingItems } = cache.readQuery({ query: GET_ITEMS });
        cache.writeQuery({
            query: GET_ITEMS,
            data: {
                directorates: existingItems.filter(c => c.id !== deletedItem.id)
            }
        })
    }
};
