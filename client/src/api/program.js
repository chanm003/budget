import { sendRequest } from './index';

const getItem = async (id) => {
    const gql = `
            query GetItem($id: ID!) {
                program(id: $id) {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql, { id });
    return response.program;
}

const getItems = async () => {
    const gql = `
            {
                programs {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql);
    return response.programs;
}

const createItem = async ({ title }) => {
    const gql = `
            mutation CreateItem($title: String!) {
                createProgram(input: {title: $title }) {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql, { title });
    return response.createProgram;
}

const updateItem = async (id, { title }) => {
    const gql = `
            mutation UpdateItem($id: ID!, $title: String!) {
                updateProgram(id: $id, input: {title: $title }) {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql, { id, title });
    return response.updateProgram;
}

const deleteItem = async (id) => {
    const gql = `
            mutation RemoveItem($id: ID!) {
                removeProgram(id: $id) {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql, { id });
    return response.removeProgram;
}


export default {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
}