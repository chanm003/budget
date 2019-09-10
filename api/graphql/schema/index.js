const { buildSchema } = require('graphql');
const directorateSchema = require('./directorate');

module.exports = buildSchema(`
${directorateSchema.types}

type RootQuery {
    ${directorateSchema.queries}
}

type RootMutation {
    ${directorateSchema.mutations} 
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);