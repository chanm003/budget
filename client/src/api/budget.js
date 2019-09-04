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

    return await sendRequest(gql);
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
    getDirectorates
}