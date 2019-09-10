const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Directorate {
    _id: ID!
    title: String!
}

input DirectorateInput {
    title: String!
}

type RootQuery {
    directorates: [Directorate!]!
    directorate(id: ID!): Directorate!
}

type RootMutation {
    createDirectorate(input: DirectorateInput): Directorate!
    updateDirectorate(id: ID!, input: DirectorateInput!): Directorate!
    removeDirectorate(id: ID!): Directorate!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);