const directorateSchema = require('./directorate');
const programSchema = require('./program');

module.exports = `
type Query {
    ${directorateSchema.queries}
    ${programSchema.queries}
}

type Mutation {
    ${directorateSchema.mutations}
    ${programSchema.mutations}
}

#Schema Types
${directorateSchema.types}
${programSchema.types}
`;