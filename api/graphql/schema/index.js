const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Directorate {
    _id: ID!
    title: String!
}

type RootQuery {
    directorates: [Directorate!]!
}

type RootMutation {
    removeDirectorate(id: ID!): Directorate!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);