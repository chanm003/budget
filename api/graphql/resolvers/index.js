const directorateResolver = require('./directorate');
const programResolver = require('./program');

module.exports = {
    Query: {
        ...directorateResolver.Query,
        ...programResolver.Query
    },
    Mutation: {
        ...directorateResolver.Mutation,
        ...programResolver.Mutation
    }
}