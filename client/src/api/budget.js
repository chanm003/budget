import axios from 'axios';

const getDirectorates = async () => {
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

const deleteDirectorate = async (id) => {
    const gql = `
            mutation RemoveDirectorate($id: ID!) {
                removeDirectorate(id: $id) {
                    _id
                    title
                }
            }
        `;

    const response = await sendRequest(gql, { id });
    return response.removeDirectorate;
}

const sendRequest = async (query, variables) => {
    const requestBody = { query };

    if (variables) {
        requestBody.variables = variables
    }

    const config = {
        method: 'POST',
        data: JSON.stringify(requestBody),
        url: '/graphql',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const resp = await axios(config);
    return resp.data.data;
}

export default {
    getDirectorates,
    deleteDirectorate
}