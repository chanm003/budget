import { gql } from 'apollo-boost';
import { generateMutationOptions, generateResponseParsers } from '../core/apiHelpers';

const RESOURCE_NAME = 'Directorate';

export const api = {
    Query: {
        ById: gql`
            query GetItem($id: MongoID!) {
                DirectorateById(_id: $id) {
                    _id
                    title
                }
            }
        `,
        Many: gql`
            query GetItems {
                DirectorateMany {
                    _id 
                    title
                }
            }
        `
    },
    Mutation: {
        CreateOne: gql`
            mutation CreateItem($title: String!) {
                DirectorateCreateOne(record: {title: $title}){
                    record {
                        _id
                        title
                    }
                }
            }
        `,
        UpdateById: gql`
            mutation UpdateItem($id: MongoID!, $title: String!) {
                DirectorateUpdateById(record: {_id: $id, title: $title}){
                    record {
                        _id
                        title
                    }
                }
            }
        `,
        RemoveById: gql`
            mutation RemoveItem($id: MongoID!) {
                DirectorateRemoveById(_id: $id) {
                    record {
                        _id
                        title
                    }
                }
            }
        `
    }
};

export const mutationOptions = generateMutationOptions(RESOURCE_NAME, api);

export const responseParsers = generateResponseParsers(RESOURCE_NAME, api);
