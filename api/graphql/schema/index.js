const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Directorate {
    _id: ID!
    title: String!
}

type RootQuery {
    directorates: [Directorate!]!
}

schema {
    query: RootQuery
}
`);