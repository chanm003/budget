import { gql } from 'apollo-boost';
import { generateMutationOptions, generateResponseParsers } from '../core/apiHelpers';

const RESOURCE_NAME = 'User';

export const api = {
    Query: {
        ById: gql`
            query GetItem($id: MongoID!) {
                UserById(_id: $id) {
                    _id
                    firstName
                    lastName
                    email
                }
            }
        `
    },
    Mutation: {
        UpdateProfile: gql`
            mutation UpdateItem($firstName: String!, $lastName: String!, $email: String!) {
                UserUpdateProfile(firstName: $firstName, lastName: $lastName, email: $email){
                    user {
                        _id
                        firstName
                        lastName
                        email
                        lastLoggedIn
                        updatedAt
                    }
                    token
                }
            }
        `
    }
};

const parseResponsers = {
    UpdateProfile: response => {
        const { data: { UserUpdateProfile } } = response;
        return UserUpdateProfile;
    }
}

export const mutationOptions = generateMutationOptions(RESOURCE_NAME, api);

export const responseParsers = { ...generateResponseParsers(RESOURCE_NAME, api), ...parseResponsers };
