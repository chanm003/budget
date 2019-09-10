const { buildSchema } = require('graphql');
const directorateSchema = require('./directorate');
const programSchema = require('./program');

module.exports = buildSchema(`
${directorateSchema.types}
${programSchema.types}

type RootQuery {
    ${directorateSchema.queries}
    ${programSchema.queries}
}

type RootMutation {
    ${directorateSchema.mutations}
    ${programSchema.mutations} 
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);