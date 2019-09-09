import axios from 'axios';
import {
    getItem as getDirectorate,
    getItems as getDirectorates,
    deleteItem as deleteDirectorate
} from './directorate';

export default {
    getDirectorate,
    getDirectorates,
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