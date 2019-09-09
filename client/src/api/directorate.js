import { sendRequest } from './index';

export const getItem = async (id) => {
    const gql = `
            query GetItem($id: ID!) {
                directorate(id: $id) {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql, { id });
    return response.directorate;
}

export const getItems = async () => {
    const gql = `
            {
                directorates {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql);
    return response.directorates;
}

export const deleteItem= async (id) => {
    const gql = `
            mutation RemoveItem($id: ID!) {
                removeDirectorate(id: $id) {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql, { id });
    return response.removeDirectorate;
}