const types = `
    type Directorate {
        _id: ID!
        title: String!
    }

    input DirectorateInput {
        title: String!
    }
`;

const queries = `
    directorates: [Directorate!]!
    directorate(id: ID!): Directorate!
`;

const mutations = `
    createDirectorate(input: DirectorateInput): Directorate!
    updateDirectorate(id: ID!, input: DirectorateInput!): Directorate!
    removeDirectorate(id: ID!): Directorate!
`;

module.exports = {
    types,
    queries,
    mutations
}