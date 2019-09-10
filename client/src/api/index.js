import axios from 'axios';
import {
    createItem as createDirectorate,
    updateItem as updateDirectorate,
    getItem as getDirectorate,
    getItems as getDirectorates,
    deleteItem as deleteDirectorate
} from './directorate';

export default {
    createDirectorate,
    getDirectorate,
    getDirectorates,
    updateDirectorate,
    deleteDirectorate
}

export const sendRequest = async (query, variables) => {
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